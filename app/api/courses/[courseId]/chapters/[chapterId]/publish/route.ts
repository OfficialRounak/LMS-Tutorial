import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string; chapterId: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse('Unauthorized User', { status: 401 });
    }

    const ownCourse = await db.course.findUnique({
      where: {
        id: params.courseId,
        userId,
      },
    });

    if (!ownCourse) {
      return new NextResponse('Unauthorized User', { status: 401 });
    }

    // for publishing the chapter we need to check for the criterias it need to fullfill ,
    // like- it should have(chapter.Title,chapter.videoUrl,mux data,chapter.des)

    const chapter = await db.chapter.findUnique({
      where: {
        id: params.chapterId,
        courseId: params.courseId,
      },
    });


    if (
      !chapter ||
      !chapter.title ||
      !chapter.describtion ||
      !chapter.videoUrl 
    ) {
      return new NextResponse('Missing chapter criterias', { status: 400 });
    }

    const chapterPublished = await db.chapter.update({
      where: {
        id: params.chapterId,
      },
      data: {
        isPublished: true,
      },
    });

    return NextResponse.json(chapterPublished);
  } catch (error) {
    console.log('[CHAPTER PUBLISH]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
