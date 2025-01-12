"use client"
import { Category } from '@prisma/client';
import React from 'react';
import { IconType } from 'react-icons';
import {
  FcMusic,
  FcCamera,
  FcSportsMode,
  FcSalesPerformance,
  FcMultipleDevices,
  FcFilmReel,
  FcEngineering,
  FcNews,
} from 'react-icons/fc';
import CategoriesItem from './CategoriesItem';

interface CategoryProps {
  items: Category[];
}

const Categories = ({ items }: CategoryProps) => {


  const IconMap: Record<Category['name'], IconType> = {
    'Computer Science': FcNews,
    'Social Science': FcEngineering,
    'Fitness': FcSportsMode,
    'Information Technology': FcMultipleDevices,
    'Life and Habits': FcMusic,
    'Movie Making': FcFilmReel,
    'Web Development': FcSalesPerformance,
    'Lifeskill': FcCamera,
  };
  return (
    <div className='flex items-center gap-x-2 overflow-x-auto pb-2'>
      {items.map((item) => (
        <CategoriesItem key={item.id} label={item.name} icon={IconMap[item.name]} value={item.id}/>
      ))}
    </div>
  );
};

export default Categories;
