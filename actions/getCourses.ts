import { Category, Course } from '@prisma/client';
import { progress } from './getProgress';
import { db } from '@/lib/db';

type CourseWithProgressWithCategory = Course & {
  category: Category | null;
  chapters: { id: string }[];
  progress: number | null;
};
type GetCourses = {
  userId: string;
  title?: string;
  categoryId?: string;
};

export const getCourses = async ({
  userId,
  title,
  categoryId,
}: GetCourses): Promise<CourseWithProgressWithCategory[]> => {
  try {
    const courses = await db.course.findMany({
      where: {
        isPublished: true,
        categoryId: categoryId,
      },
      include: {
        category: true,
        chapters: {
          where: {
            isPublished: true,
          },
          select: {
            id: true,
          },
        },
        purchases: {
          where: {
            userId,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    // Filter courses based on title if title is provided
    const filteredCourses = title
      ? courses.filter((course) => {
          return course.title?.toLowerCase().includes(title.toLowerCase());
        })
      : courses;

    const courseWithProgress: CourseWithProgressWithCategory[] =
      await Promise.all(
        filteredCourses.map(async (course) => {
          if (course.purchases.length === 0) {
            return {
              ...course,
              progress: null,
            };
          }
          const progressPercentage = await progress(userId, course.id);
          return {
            ...course,
            progress: progressPercentage,
          };
        })
      );

    return courseWithProgress;
  } catch (error) {
    console.log('[GET_COURSES]', error);
    return [];
  }
};
