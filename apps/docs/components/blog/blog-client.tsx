'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import type { Post } from '@/lib/sanity/types';
import { urlFor } from '@/lib/sanity/client';
import { motion } from 'framer-motion';
import { useTranslation } from '@/lib/contexts/translation-context';
import { t } from '@/lib/i18n/translations';
import Image from 'next/image';
import Spinner from '@/components/ui/spinner';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { playClickSound } from '@/lib/utils/sound';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import '../../app/styles/blog.css';

// Helper function to get category from post
const getPostCategory = (post: Post): string => {
  // First try to get from categories array
  if (
    post.categories &&
    post.categories.length > 0 &&
    post.categories[0]?.slug?.current
  ) {
    return post.categories[0].slug.current;
  }

  // Fallback to legacy category field
  return post.category || 'news';
};

// Function to get category color
const getCategoryColor = (category: string) => {
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

export default function BlogClient() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { currentLanguage } = useTranslation();
  const router = useRouter();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Pagination constants
  const POSTS_PER_PAGE = 32; // Show all posts on one page
  const MAX_POSTS = 32; // Show pagination only when we reach 32 posts

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/blog/posts');

        if (!response.ok) {
          throw new Error(`API responded with status: ${response.status}`);
        }

        const data = await response.json();

        if (data.success) {
          setPosts(data.posts || []);
        } else {
          throw new Error(data.error || 'Failed to fetch posts');
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
        // Show detailed error information
        if (error instanceof Error) {
          console.error('Error message:', error.message);
          console.error('Error stack:', error.stack);
        }
        // Set an empty array to avoid undefined errors
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Function to get the localized field based on current language
  const getLocalizedField = (post: Post, field: string, fallback: string) => {
    if (currentLanguage === 'fr' && post[`${field}_fr` as keyof Post]) {
      return post[`${field}_fr` as keyof Post] as string;
    }
    return (post[field as keyof Post] as string) || fallback;
  };

  // Check if a post has content in the current language
  const hasLanguageContent = (post: Post) => {
    // For English, always show the post since it's the base language
    if (currentLanguage === 'en') return true;

    // For other languages, check if the languages field includes the current language
    // If the languages field doesn't exist, check if there's content in the current language
    if (!post.languages) {
      if (currentLanguage === 'fr') {
        return !!post.title_fr || !!post.excerpt_fr || !!post.body_fr;
      }
      return false;
    }

    return post.languages.includes(currentLanguage);
  };

  // Filter posts by language and limit to MAX_POSTS
  const filteredPosts = posts
    .filter((post) => hasLanguageContent(post))
    .slice(0, MAX_POSTS);

  // Separate featured and regular posts, with featured posts first
  const featuredPost = filteredPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  // Create display posts array with featured first, then regular posts
  const displayPosts = featuredPost ? [featuredPost, ...regularPosts] : regularPosts;

  // Calculate pagination
  const totalPosts = displayPosts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = displayPosts.slice(startIndex, endIndex);

  // Reset to page 1 when language changes or posts change
  useEffect(() => {
    setCurrentPage(1);
  }, [currentLanguage, totalPosts]);

  return (
    <section className="w-full py-8 md:py-20 lg:py-24 xl:py-32">
      <div className="max-w-7xl mx-auto pl-2 pr-4 py-2">
        <div className="flex flex-col space-y-6 text-left -mt-4">
          <div className="space-y-4">
            <motion.h1
              className="text-4xl font-normal tracking-tighter text-left text-zinc-800 dark:text-white md:text-5xl max-w-7xl whitespace-pre-line"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {t('blog.heading', currentLanguage) as string}
            </motion.h1>
            <motion.p
              className="text-gray-500 dark:text-gray-400 text-base leading-relaxed tracking-tight max-w-4xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t('blog.subheading', currentLanguage) as string}
            </motion.p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center min-h-[50vh] py-20">
              <Spinner />
            </div>
          ) : filteredPosts.length === 0 ? (
            <motion.div
              className="text-center py-20 bg-zinc-50 dark:bg-zinc-900/50 rounded-sm p-8 mb-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">
                {t('blog.noPosts', currentLanguage) as string}
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                {t('blog.noPostsDesc', currentLanguage) as string}
              </p>
              <Button
                variant="pink"
                onClick={() => {
                  playClickSound();
                  router.push('/');
                }}
              >
                {t('blog.backHome', currentLanguage) as string}
              </Button>
            </motion.div>
          ) : (
            <div className="mb-0 relative">
              <motion.div
                ref={scrollContainerRef}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {currentPosts.map((post, index) => {
                  const isFeatured = post.featured;
                  const isFirstOnPage = index === 0 && currentPage === 1;

                  return (
                    <motion.div
                      key={post._id}
                      variants={itemVariants}
                      className={`w-full ${isFeatured && isFirstOnPage ? 'sm:col-span-2 lg:col-span-2' : ''}`}
                      onMouseEnter={() => setHoveredCard(post._id)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <Link
                        href={`/blog/${post.slug.current}`}
                        className="group flex flex-col h-full"
                        onMouseDown={playClickSound}
                      >
                        <article className={`flex flex-col bg-white dark:bg-zinc-900 rounded-sm overflow-hidden shadow-sm hover:shadow-sm transition-all duration-300 border border-zinc-200 dark:border-zinc-800 h-full ${isFeatured && isFirstOnPage ? 'ring-2 ring-primary/20 shadow-lg' : ''}`}>
                          {post.image && (
                            <div className="aspect-3/2 overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
                              <Image
                                src={urlFor(post.image)
                                  .width(320)
                                  .height(213)
                                  .url()}
                                alt={
                                  post.image.alt ||
                                  getLocalizedField(post, 'title', post.title)
                                }
                                width={320}
                                height={213}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                              />
                            </div>
                          )}
                          <div className="p-5 flex flex-col grow">
                            <div className="grow flex flex-col">
                              {post.author && post.publishedAt && (
                                <div className="flex items-center mb-1">
                                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                                    {new Date(
                                      post.publishedAt,
                                    ).toLocaleDateString(
                                      currentLanguage === 'zh'
                                        ? 'zh-CN'
                                        : currentLanguage,
                                      {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric',
                                      },
                                    )}
                                  </p>
                                </div>
                              )}

                              {!post.author && post.publishedAt && (
                                <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">
                                  {new Date(post.publishedAt).toLocaleDateString(
                                    currentLanguage === 'fr'
                                      ? 'fr-FR'
                                      : currentLanguage === 'es'
                                        ? 'es-ES'
                                        : currentLanguage === 'zh'
                                          ? 'zh-CN'
                                          : 'en-US',
                                    {
                                      year: 'numeric',
                                      month: 'short',
                                      day: 'numeric',
                                    },
                                  )}
                                </p>
                              )}

                              <h2 className="font-normal text-lg mb-3 leading-tight text-zinc-900 dark:text-white min-h-fit">
                                {getLocalizedField(post, 'title', post.title)}
                              </h2>
                              <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 overflow-hidden line-clamp-2">
                                {getLocalizedField(post, 'excerpt', '')}
                              </p>
                            </div>
                            <div className="mt-auto flex flex-row justify-between items-center">
                              <span
                                className={`px-2 py-1 text-xs font-normal rounded ${getCategoryColor(getPostCategory(post))}`}
                              >
                                {
                                  t(
                                    `blog.categories.${getPostCategory(post)}`,
                                    currentLanguage,
                                  ) as string
                                }
                              </span>

                              {isFeatured && isFirstOnPage && (
                                <span className="px-2 py-1 text-xs font-semibold rounded bg-gradient-to-r from-primary to-primary/80 text-white">
                                  Featured
                                </span>
                              )}

                              <div className="flex items-center text-primary text-sm font-normal">
                                <span
                                  className="transition-transform duration-300"
                                  style={{
                                    transform:
                                      hoveredCard === post._id
                                        ? 'translateX(-2px)'
                                        : 'translateX(0)',
                                  }}
                                ></span>
                                <ArrowRight
                                  className={`ml-1 h-4 w-4 transition-all duration-300 ${hoveredCard === post._id ? 'opacity-100 translate-x-1' : 'opacity-0 -translate-x-3'}`}
                                />
                              </div>
                            </div>
                          </div>
                        </article>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Pagination - only show when there are 32 or more posts */}
              {totalPosts >= MAX_POSTS && totalPages > 1 && (
                <div className="flex justify-center items-center mt-8 space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      playClickSound();
                      setCurrentPage(prev => Math.max(1, prev - 1));
                    }}
                    disabled={currentPage === 1}
                    className="flex items-center gap-1"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    {t('blog.previous', currentLanguage) as string}
                  </Button>

                  <div className="flex items-center space-x-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        onClick={() => {
                          playClickSound();
                          setCurrentPage(page);
                        }}
                        className="w-8 h-8 p-0"
                      >
                        {page}
                      </Button>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      playClickSound();
                      setCurrentPage(prev => Math.min(totalPages, prev + 1));
                    }}
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-1"
                  >
                    {t('blog.next', currentLanguage) as string}
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
