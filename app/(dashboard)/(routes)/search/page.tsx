import { db } from '@/lib/db';
import React from 'react';
import Categories from './_components/Categories';

const SearchPage = async () => {
  const categories = await db.category.findMany({
    orderBy: {
      name: 'asc',
    },
  });
  return (
    <div className='py-6 px-4'>
      <Categories items={categories} />
    </div>
  );
};

export default SearchPage;
