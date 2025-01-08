import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const { userId } = auth();
    const { courseId } = params;

    if (!userId) {
      return new NextResponse('unauthorized', { status: 401 });
    }

    const course = await db.course.findUnique({
      where: {
        id: courseId,
        userId: userId,
      },
      include: {
        chapters: true,
      },
    }); // querrying the course with chapters included in it.
    // console.log("looking into the course object",course)

    if (!course) {
      return new NextResponse('Not Found', { status: 404 });
    }

    const publishedChapCheck = course.chapters?.some(
      (chapter) => chapter.isPublished
    ); // just simply checking if atleast a single chapter is published in the course.

    if (
      !publishedChapCheck ||
      !course.categoryId ||
      !course.description ||
      !course.title ||
      !course.imageUrl ||
      !course.price
    ) {
      return new NextResponse('Missing Required Fields', { status: 401 });
    } // checking whether if any important filed is missing

    const updatedCourse = await db.course.update({
      where: {
        id: courseId,
        userId: userId,
      },
      data: {
        isPublished: true,
      },
    });

    return NextResponse.json(updatedCourse);
  } catch (error) {
    console.log('[PUBLISH COURSE]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
