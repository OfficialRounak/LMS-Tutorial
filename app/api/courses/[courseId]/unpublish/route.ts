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
      }
    }); 

    if (!course) {
      return new NextResponse('Not Found', { status: 404 });
    }

    
    const updatedCourse = await db.course.update({
      where: {
        id: courseId,
        userId: userId,
      },
      data: {
        isPublished: false,
      },
    });

    return NextResponse.json(updatedCourse);
  } catch (error) {
    console.log('[PUBLISH COURSE]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
