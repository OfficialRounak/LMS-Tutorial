import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import Mux from '@mux/mux-node';

const { Video } = new Mux(
  process.env.MUX_TOKEN_ID!,
  process.env.MUX_TOKEN_SECRET!
);

export async function DELETE(
  req: Request,
  { params }: { params: { chapterId: string; courseId: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse('Unauthorised', { status: 401 });
    }

    const ownCourse = await db.course.findUnique({
      where: {
        userId,
        id: params.courseId,
      },
    });

    if (!ownCourse) {
      return new NextResponse('Unauthorized', { status: 401 });
    }
    const chapter = await db.chapter.findUnique({
      where: {
        id: params.chapterId,
        courseId: params.courseId,
      },
    });

    if (!chapter) {
      return new NextResponse('Chapter Not Found', { status: 404 });
    }

    if (chapter.videoUrl) {
      const existingMuxData = await db.muxdata.findUnique({
        where: {
          chapterId: params.chapterId,
        },
      });

      if (existingMuxData) {
        await Video.Assets.del(existingMuxData.assetId);
        await db.muxdata.delete({
          where: {
            id: existingMuxData.id,
          },
        });
      }
    }

    const deletedChapter = await db.chapter.delete({
      where: {
        id: params.chapterId,
      },
    });

    const publishedChapterInCourse = await db.chapter.findMany({
      where: {
        courseId: params.courseId,
        isPublished: true,
      },
    });

    if (!publishedChapterInCourse.length) {
      await db.course.update({
        where: {
          id: params.courseId,
        },
        data: {
          isPublished: false,
        },
      });
    }

    return NextResponse.json(deletedChapter);
  } catch (error) {
    console.log('[COURSE CHAPTER DELETE]', error);
    return new NextResponse('Internal server error', { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { chapterId: string; courseId: string } }
) {
  try {
    const { isPublished, description, ...values } = await req.json();
    const { userId } = auth();

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const ownCourse = await db.course.findUnique({
      where: {
        userId,
        id: params.courseId,
      },
    });

    if (!ownCourse) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const chapter = await db.chapter.update({
      where: {
        id: params.chapterId,
        courseId: params.courseId,
      },
      data: {
        describtion: description,
        ...values,
      },
    });
    //here is the cleaning function to clean if there is an existing video while editing , and also clear the video Assets from mux
    if (values.videoUrl) {
      const existingMuxData = await db.muxdata.findFirst({
        where: {
          id: params.chapterId,
        },
      });

      if (existingMuxData) {
        // clearing the mux data storage in the mux server for the existing video playback so that there is no other value for the same id for processing the video url and also
        //clearing the our own database -if any other video exists in the data base for the same id
        await Video.Assets.del(existingMuxData.assetId);
        await db.muxdata.delete({
          where: {
            id: existingMuxData.id,
          },
        });
      }

      const videoAsset = await Video.Assets.create({
        // creating the videoplayback  to render in the player , we are pushing it to the mux server and cfeating a asset out of it
        input: values.videoUrl,
        playback_policy: 'public',
        test: false,
      });

      await db.muxdata.create({
        // updating out own
        data: {
          chapterId: params.chapterId,
          assetId: videoAsset.id,
          playbackId: videoAsset.playback_ids?.[0]?.id,
        },
      });
    }

    return NextResponse.json(chapter);
  } catch (error) {
    console.log('[COURSE_CHAPTER]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
