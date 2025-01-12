'use client';

import { cn } from '@/lib/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { IconType } from 'react-icons';
import qs from 'query-string';

interface CategoriesItemProps {
  label: string;
  icon?: IconType;
  value: string;
}

const CategoriesItem = ({ label, icon: Icon, value }: CategoriesItemProps) => {
  const searchparams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const categoryId = searchparams.get('categoryId');
  const title = searchparams.get('title');

  const isSelected = categoryId === value; // when this is true that means some category is already active

  const onClick = () => {
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          title: title,
          categoryId: isSelected ? null : value, // if there is an active category and onClick is triggered again that means the user wants to deselect th category. So it is made to become null
        },
      },
      { skipNull: true, skipEmptyString: true } // this indicates if there is any value null or empty string -dont implement that into the query string 
    ); // the process to use query string library to create a perfecat url with numnerous query string

    router.push(url);
  };

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        'py-2 px-3 text-sm border border-slate-200 rounded-full flex items-center gap-x-1 hover:border-sky-700 transition',
        isSelected && 'border-sky-700 bg-sky-200/20 text-sky-800'
      )}
    >
      {Icon && <Icon size={20} />}
      <div className="truncate">{label}</div>
    </button>
  );
};

export default CategoriesItem;
