/* @proprietary license */

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '@/lib/utils/translation-context';
import { t } from '@/lib/i18n/translations';
import Link from 'next/link';
import { playClickSound } from '@/lib/utils/sound';
import type { Post } from '@/lib/sanity/types';
import { getPostCategory, getCategoryColor } from '@/lib/utils/blog-utils';

export function BlogArticlesCarousel() {
    const { currentLanguage } = useTranslation();
    const [latestPosts, setLatestPosts] = useState<Post[]>([]);
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);

    useEffect(() => {
        const fetchLatestPosts = async () => {
            try {
                const response = await fetch('/api/blog/posts');
                if (response.ok) {
                    const data = await response.json();
                    if (data.success && data.posts) {
                        // Get the latest 6 posts for horizontal scrolling
                        setLatestPosts(data.posts.slice(0, 6));
                    }
                }
            } catch (error) {
                console.error('Error fetching latest posts:', error);
            }
        };

        fetchLatestPosts();
    }, []);

    // Function to get the localized field based on current language
    const getLocalizedField = (post: Post, field: string, fallback: string) => {
        if (currentLanguage === 'fr' && post[`${field}_fr` as keyof Post]) {
            return post[`${field}_fr` as keyof Post] as string;
        }
        return (post[field as keyof Post] as string) || fallback;
    };


    return (
        <div className="w-full mt-8 relative">
            {/* Horizontal scrolling for all cards */}
            {latestPosts.length > 0 && (
                <div className="overflow-x-auto pb-4 scrollbar-hide">
                    <div className="flex gap-8" style={{ width: 'max-content' }}>
                        {latestPosts.map((post) => (
                            <div key={post._id} className="shrink-0 w-[612px] h-[235px]">
                                <motion.div
                                    className="w-full h-full"
                                    onMouseEnter={() => setHoveredCard(post._id)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                >
                                    <Link
                                        href={`/blog/${post.slug.current}`}
                                        className="group flex flex-col h-full"
                                        onMouseDown={playClickSound}
                                    >
                                        <article className="flex flex-col bg-white dark:bg-zinc-900 rounded-sm overflow-hidden shadow-sm hover:shadow-sm transition-all duration-300 border border-zinc-200 dark:border-zinc-800 h-full p-6 min-h-[235px]">
                                            <div className="grow flex flex-col">
                                                {post.publishedAt && (
                                                    <p className="text-zinc-500 dark:text-zinc-400 text-xs mb-3">
                                                        {new Date(post.publishedAt).toLocaleDateString(
                                                            currentLanguage === 'zh'
                                                                ? 'zh-CN'
                                                                : currentLanguage === 'fr'
                                                                    ? 'fr-FR'
                                                                    : currentLanguage === 'es'
                                                                        ? 'es-ES'
                                                                        : 'en-US',
                                                            {
                                                                year: 'numeric',
                                                                month: 'short',
                                                                day: 'numeric',
                                                            },
                                                        )}
                                                    </p>
                                                )}

                                                <h3 className="font-normal leading-tight text-zinc-900 dark:text-white text-lg mb-4 line-clamp-2">
                                                    {getLocalizedField(post, 'title', post.title)}
                                                </h3>

                                                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6 line-clamp-3 grow">
                                                    {getLocalizedField(post, 'excerpt', '')}
                                                </p>
                                            </div>

                                            <div className="mt-auto flex flex-row justify-between items-center">
                                                <span className={`px-2 py-1 text-xs font-normal rounded ${getCategoryColor(getPostCategory(post))}`}>
                                                    {t(`blog.categories.${getPostCategory(post)}`, currentLanguage) as string}
                                                </span>

                                                <div className="flex items-center text-primary text-sm font-normal">
                                                    <ArrowRight
                                                        className={`ml-1 h-4 w-4 transition-all duration-300 ${hoveredCard === post._id ? 'opacity-100 translate-x-1' : 'opacity-0 -translate-x-3'
                                                            }`}
                                                    />
                                                </div>
                                            </div>
                                        </article>
                                    </Link>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
