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

    console.log("found owncourse",ownCourse)

    if (!ownCourse) {
      return new NextResponse('Unauthorized User', { status: 401 });
    }

    const unpublishedChapter = await db.chapter.update({
      where: {
        id: params.chapterId,
        courseId: params.courseId,
      },
      data: {
        isPublished: false,
      },
    }); // unpublishing a chap

    const publishedChapterInCourse = await db.chapter.findMany({
      where: {
        courseId: params.courseId,
        isPublished: true,
      },
    });// after unpublishing checking whther any chapters are left or not which are published 

    if (!publishedChapterInCourse.length) {
      await db.course.update({
        where: {
          id: params.courseId,
        },
        data: {
          isPublished: false,
        },
      });
    } // if there is no chapter left as published in the course , means the chapter we unpublished was the only chapter , we should unpublish the course if its in publish status by any chance.

    return NextResponse.json(unpublishedChapter);
  } catch (error) {
    console.log('[CHAPTER UNPUBLISH]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
