import { progress } from '@/actions/getProgress';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React from 'react';
import CourseSidebar from './_components/CourseSidebar';
import CourseNavbar from './_components/CourseNavbar';


interface ParticularCourseLayoutProps {
  children: React.ReactNode;
  params: { courseId: string };
}

const ParticularCourseLayout = async ({
  children,
  params,
}: ParticularCourseLayoutProps) => {
  const { userId } = auth();

  if (!userId) {
    redirect('/');
  }

  const course = await db.course.findUnique({
    //querying a course which will have chapters and userprogress included in it.
    where: {
      id: params.courseId,
    },
    include: {
      chapters: {
        where: {
          isPublished: true, // query only those chapters in the course which are published
        },
        include: {
          userProgress: {
            // query only the userProgress of chapters which are from the userID logged in
            where: {
              userId,
            },
          },
        },
        orderBy: {
          position: 'asc', // order these chapters by ascending order
        },
      },
    },
  });

  if (!course) {
    redirect('/');
  }

  const progressCount = await progress(userId, course.id);
  return (
    <div>
      <div className="h-[80px] md:pl-80 w-full fixed inset-y-0 z-50">
        <CourseNavbar course={course} progressCount={progressCount}/>
      </div>
      <div className="hidden md:flex h-full border-r w-80 flex-col fixed inset-y-0 z-50">
        <CourseSidebar course={course} ProgressCount={progressCount} />
      </div>
      <div className="md:pl-80 pt-[80px] h-full">{children}</div>
    </div>
  );
};

export default ParticularCourseLayout;
