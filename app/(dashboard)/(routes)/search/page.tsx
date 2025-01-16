import { db } from '@/lib/db';
import React from 'react';
import Categories from './_components/Categories';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { getCourses } from '@/actions/getCourses';
import CoursesList from './_components/CoursesList';

interface searchParamsProps {
  searchParams: {
    title: string;
    categoryId: string;
  };
}

const SearchPage = async ({ searchParams }: searchParamsProps) => {
  const { userId } = auth();
  if (!userId) {
    redirect('/');
  }
  const categories = await db.category.findMany({
    orderBy: {
      name: 'asc',
    },
  });

  const courses = await getCourses({
    userId,
    ...searchParams,
  });

  return (
    <div className="p-6">
      <div className="py-6 px-4">
        <Categories items={categories} />
      </div>
      <CoursesList items={courses} />
    </div>
  );
};

export default SearchPage;
