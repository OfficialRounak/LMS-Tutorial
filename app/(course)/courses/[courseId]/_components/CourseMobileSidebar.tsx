import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Chapter, Course, UserProgress } from '@prisma/client';
import React from 'react';
import CourseSidebar from './CourseSidebar';
import { Menu } from 'lucide-react';

interface CourseMobileSidebarProps {
  course: Course & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[];
  };
  progressCount: number;
}

const CourseMobileSidebar = ({
  course,
  progressCount,
}: CourseMobileSidebarProps) => {
  return (
    <Sheet>
      <SheetTrigger className='md:hidden pr-4 hover:opacity-75 transition'><Menu/></SheetTrigger>
      <SheetContent side='left' className='p-0 bg-white w-72'><CourseSidebar course={course} ProgressCount={progressCount}/></SheetContent>
    </Sheet>
  );
};

export default CourseMobileSidebar;
