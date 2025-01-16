import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
interface CourseCardProps {
  id: string;
  title: string;
  image: string;
  chaptersLength: number;
  price: number | null;
  progress: number | null;
  category: string;
}

const CourseCard = ({
  id,
  title,
  image,
  chaptersLength,
  price,
  progress,
  category,
}: CourseCardProps) => {
  return (
    <Link href={`/courses/${id}`}>
      <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full">
        <div className="relative w-full aspect-video rounded-md overflow-hidden">
          <Image fill alt={title} src={image} className="object-cover" />
        </div>
        <div className="flex flex-col pt-2">
          <div className="text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2">
            {title}
          </div>
          
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
