import { IconBadge } from '@/components/IconBadge';
import formatPrice from '@/lib/formatPrice';
import { BookOpen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
interface CourseCardProps {
  id: string;
  title: string;
  image: string;
  chaptersLength: number;
  price: number;
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
          <p className="text-xs text-muted-foreground">{category}</p> 
          <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
            <div className="flex items-center gap-x-1 text-slate-500">
              <IconBadge icon={BookOpen} size="sm" />
            </div>
            <span>
              {chaptersLength} {chaptersLength > 1 ? 'chapters' : 'chapter'}
            </span>
          </div>
          {progress !== null ? (
            'Todo:progress'
          ) : (
            <p className="text-md md:text-sm text-slate-700 font-medium">
              {formatPrice(price)}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
