import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export async function POST(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const { userId } = auth();
    const { url } = await req.json();

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const courseOwner = await db.course.findUnique({
      where: {
        id: params.courseId,
        userId: userId,
      },
    });

    if (!courseOwner) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    // Count existing attachments for the course
    const attachmentCount = await db.attachment.count({
      where: {
        courseId: params.courseId,
      },
    });

    // Generate a specific and sequential name
    const attachmentName = `Course Attachment ${attachmentCount + 1}`;

    const attachments = await db.attachment.create({
      data: {
        url,
        name: attachmentName,
        courseId: params.courseId,
      },
    });

    return NextResponse.json(attachments);
  } catch (error) {
    console.log('COURSE_ID_ATTACHMENTS', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
