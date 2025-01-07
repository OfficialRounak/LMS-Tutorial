import { IconBadge } from '@/components/IconBadge';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs';
import {
  CircleDollarSign,
  FilePlus,
  LayoutDashboard,
  ListChecks,
} from 'lucide-react';
import { redirect } from 'next/navigation';
import React from 'react';
import TitleForm from './_components/TitleForm';
import DescriptionForm from './_components/DescriptionForm';
import { ImageForm } from './_components/ImageForm';
import { SelectOptionForm } from './_components/SelectForm';
import PriceForm from './_components/Priceform';
import { FileAttachmentForm } from './_components/FileAttachmentForm';
import ChapterForm from './_components/ChapterForm';
import Banner from '@/components/Banner';
import Actions from './_components/Actions';

const CourseIdPage = async ({ params }: { params: { courseId: string } }) => {
  const { userId } = auth();

  if (!userId) {
    return redirect('/');
  }

  const course = await db.course.findUnique({
    where: {
      id: params.courseId,
      userId,
    },
    include: {
      chapters: {
        orderBy: {
          position: 'asc',
        },
      },
      attachments: {
        orderBy: {
          createdAt: 'asc',
        },
      },
    },
  });

  const categories = await db.category.findMany({
    orderBy: {
      name: 'asc',
    },
  });

  // console.log('checking for chap', course?.chapters);

  if (!course) {
    return redirect('/');
  }

  const requiredFields = [
    course.title,
    course.description,
    course.imageUrl,
    course.price,
    course.categoryId,
    course.chapters.some((chapter) => chapter.isPublished),
  ];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length; // this actually helps in fields if it has a value , if there is a value it will counted as 1 else null, in the case of null it wont count it as a number

  const completionText = `(${completedFields}/${totalFields})`;

  const completedCourse = requiredFields.filter(Boolean)

  return (
    <>
    {!course.isPublished && (<Banner label='This course is unpublished. It will not be visible to the students.'/>)}
    <div className="p-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-2xl font-medium">Course Setup</h1>
          <span className="text-sm text-slate-700">
            Completed all fields{completionText}
          </span>
        </div>
        <Actions courseId={course.id} disabled={!completedCourse} isPublished={course.isPublished}/>
      </div>
      <div className="grid md:grid grid-cols-2 gap-6 mt-16">
        <div>
          <div className="flex items-center gap-x-2">
            <IconBadge icon={LayoutDashboard} />
            <h2 className="text-xl">Customise your course</h2>
          </div>
          <TitleForm initialData={course} courseId={course.id} />
          <DescriptionForm initialData={course} courseId={course.id} />
          <ImageForm initialData={course} courseId={course.id} />
          <SelectOptionForm
            courseId={course.id}
            initialData={course}
            options={categories.map((category) => {
              return {
                label: category.name,
                value: category.id,
              };
            })}
          />
        </div>
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={ListChecks} />
              <h2 className="text-xl">Course chapters</h2>
            </div>
            <ChapterForm initialData={course} courseId={course.id} />
          </div>
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={CircleDollarSign} />
              <h2 className="text-xl">Sell your course</h2>
            </div>
            <div>
              <PriceForm courseId={course.id} initialData={course} />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={FilePlus} />
              <h2 className="text-xl">Add attachments</h2>
            </div>
            <div>
              <FileAttachmentForm initialData={course} courseId={course.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CourseIdPage;
