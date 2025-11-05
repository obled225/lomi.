import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LottieIcon } from '@/components/ui/lottie-icon';
import { animations, LottieAnimationData } from '@/lib/utils/lottie-animations';
import { useTheme } from '@/lib/hooks/use-theme';
import { playClickSound } from '@/lib/utils/sound';

type DocCard = {
    id: string;
    title: string;
    description: string;
    icon: LottieAnimationData;
    href: string;
};

type FeaturedCard = {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    href: string;
    badge?: string;
};

export function DocumentationDropdown({
    onMouseLeave,
}: {
    onMouseLeave?: () => void;
}) {
    const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
    const { theme } = useTheme();

    const featuredCard: FeaturedCard = {
        title: 'Build Your Docs.',
        description: 'Learn to use Fumadocs on your docs site.',
        image: '/images/docs/featured-docs.png', // You'll need to add this image
        imageAlt: 'Documentation interface screenshot',
        href: '/docs/getting-started',
        badge: 'Getting Started',
    };

    const docCards: DocCard[] = [
        {
            id: 'components',
            title: 'Components',
            description: 'Add interactive experience to your docs.',
            icon: animations.code,
            href: '/docs/components',
        },
        {
            id: 'markdown',
            title: 'Markdown',
            description: 'Learn the writing format/syntax of Fumadocs.',
            icon: animations.mail,
            href: '/docs/markdown',
        },
        {
            id: 'openapi',
            title: 'OpenAPI',
            description:
                'Generate interactive playgrounds and docs for your OpenAPI schema.',
            icon: animations.settings,
            href: '/docs/openapi',
        },
        {
            id: 'manual-installation',
            title: 'Manual Installation',
            description: 'Setup Fumadocs for your existing Next.js app.',
            icon: animations.search,
            href: '/docs/installation',
        },
    ];

    return (
        <div
            className="w-full max-w-7xl max-h-[420px] overflow-y-auto py-1"
            onMouseLeave={onMouseLeave}
        >
            <div className="flex flex-col md:flex-row gap-4">
                {/* Featured Large Card */}
                <Link
                    href={featuredCard.href}
                    className="group flex-1 min-w-0 rounded-sm overflow-hidden bg-background border border-border hover:border-zinc-300 dark:hover:border-zinc-700 transition-all cursor-pointer hover:shadow-sm"
                    onClick={playClickSound}
                >
                    <div className="relative h-full min-h-[280px] md:min-h-[320px] flex flex-col">
                        {/* Image Background */}
                        <div className="absolute inset-0 opacity-10 dark:opacity-20 group-hover:opacity-15 dark:group-hover:opacity-25 transition-opacity">
                            <Image
                                src={featuredCard.image}
                                alt={featuredCard.imageAlt}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>

                        {/* Content Overlay */}
                        <div className="relative z-10 flex flex-col justify-between h-full p-6 md:p-8">
                            {/* Title Section */}
                            <div>
                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors">
                                    {featuredCard.title}
                                </h3>
                            </div>

                            {/* Bottom Section */}
                            <div className="mt-auto">
                                {featuredCard.badge && (
                                    <div className="inline-block mb-2 px-2.5 py-1 text-xs font-semibold text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 rounded-sm">
                                        {featuredCard.badge}
                                    </div>
                                )}
                                <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                    {featuredCard.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>

                {/* Grid of Smaller Cards */}
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3 min-w-0">
                    {docCards.map((card) => (
                        <Link
                            key={card.id}
                            href={card.href}
                            className="group flex flex-col px-4 py-4 bg-background border border-border hover:border-zinc-300 dark:hover:border-zinc-700 rounded-sm transition-all cursor-pointer hover:shadow-sm"
                            onMouseEnter={() => setHoveredIcon(card.id)}
                            onMouseLeave={() => setHoveredIcon(null)}
                            onClick={playClickSound}
                        >
                            <div className="flex items-start gap-3 mb-3">
                                <div className="shrink-0">
                                    <LottieIcon
                                        animationData={card.icon}
                                        size={24}
                                        loop={false}
                                        autoplay={false}
                                        initialFrame={0}
                                        isHovered={hoveredIcon === card.id}
                                        customColor={
                                            hoveredIcon === card.id
                                                ? theme === 'dark'
                                                    ? [0.922, 0.922, 0.941] // Very light in dark mode (zinc-200)
                                                    : [0.145, 0.145, 0.169] // Very dark in light mode (zinc-800)
                                                : theme === 'dark'
                                                    ? [0.631, 0.631, 0.667] // zinc-400 in dark mode
                                                    : [0.322, 0.322, 0.357] // zinc-600 in light mode
                                        }
                                    />
                                </div>
                                <h4 className="text-base font-semibold text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors leading-tight">
                                    {card.title}
                                </h4>
                            </div>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                {card.description}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

