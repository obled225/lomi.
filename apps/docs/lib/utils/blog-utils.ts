/* @proprietary license */

import type { Post } from '@/lib/sanity/types';

// Get category from post
export const getPostCategory = (post: Post): string => {
  if (
    post.categories &&
    post.categories.length > 0 &&
    post.categories[0]?.slug?.current
  ) {
    return post.categories[0].slug.current;
  }
  return post.category || 'news';
};

// Function to get category color
export const getCategoryColor = (category: string) => {
  if (!category)
    return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';

  const categoryColorMap: Record<string, string> = {
    news: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    opinion:
      'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
    edge: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    spreadsheets:
      'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
    'case-study':
      'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300',
  };

  return (
    categoryColorMap[category] ||
    'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
  );
};
