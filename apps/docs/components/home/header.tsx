"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Star } from "lucide-react";
import type { User } from "@supabase/supabase-js";
import { Dock } from "@/components/ui/dock";
import { DockDropdown } from "@/components/design/dock-dropdown";
import { Button } from "@/components/ui/button";
import { IntegrationsDropdown } from "@/components/home/dropdowns/products-dropdown";
import { playClickSound } from "@/lib/utils/sound";
import { useGithubStars } from "@/lib/hooks/use-github-stars-hooks";
import { useAuth } from "@/lib/hooks/use-auth";
import { useTranslation } from "@/lib/contexts/translation-context";
import { t as translate } from "@/lib/i18n/translations";
import Image from "next/image";

const AuthButtons = ({
    isMobile = false,
    playClickSound,
    user,
    t,
    navigate,
}: {
    isMobile?: boolean;
    playClickSound: () => void;
    user: User | null;
    t: (key: string) => string;
    navigate: (path: string) => void;
}) => {
    // Don't show auth buttons on mobile - this isn't a mobile app
    if (isMobile) {
        return null;
    }

    return (
        <div className="flex items-center gap-3 pr-2">
            {/* Talk to us button */}
            <Button
                variant="outline"
                size="header"
                onClick={() => {
                    playClickSound();
                    window.open("https://cal.com/babacar-diop", "_blank");
                }}
            >
                {t("header.talk")}
            </Button>

            {/* Connect/Dashboard button */}
            <Button
                variant={user ? "workspace" : "blue"}
                size="header"
                onClick={() => {
                    playClickSound();
                    navigate(user ? "/portal" : "/sign-in");
                }}
            >
                {user ? t("header.dashboard") : t("header.connect")}
            </Button>
        </div>
    );
};

export function Header() {
    const router = useRouter();
    const { currentLanguage } = useTranslation();
    const { user } = useAuth();
    const starCount = useGithubStars();
    const [isIntegrationsOpen, setIsIntegrationsOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const leaveTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Create t function that uses currentLanguage (same pattern as tracking-cookie.tsx)
    const t = (key: string) => String(translate(key, currentLanguage));

    const handleSmoothScroll = (sectionId: string) => (e: React.MouseEvent) => {
        e.preventDefault();

        // Smooth scroll to section with 4px offset
        const element = document.getElementById(sectionId);
        if (element) {
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset + 3.5;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        } else {
            // If section doesn't exist on current page, navigate to home page with hash
            if (window.location.pathname !== "/") {
                window.location.href = `/#${sectionId}`;
            }
        }
    };

    const handleIntegrationsMouseEnter = () => {
        if (leaveTimeout.current) {
            clearTimeout(leaveTimeout.current);
        }
        setIsIntegrationsOpen(true);
    };

    const handleIntegrationsMouseLeave = () => {
        leaveTimeout.current = setTimeout(() => {
            setIsIntegrationsOpen(false);
        }, 200);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navigate = (path: string) => {
        router.push(path);
    };

    return (
        <Dock>
            <header className="bg-background/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-sm shadow-sm select-none">
                <div className="flex items-center justify-between h-12">
                    <div className="flex items-center pl-4 pt-1">
                        <Link href="/" onClick={playClickSound}>
                            <Image
                                src="/company/lomi_l.webp"
                                alt="lomi. logo"
                                width={80}
                                height={80}
                                className="cursor-pointer hover:opacity-80 transition-opacity"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation - Hidden on mobile */}
                    <nav className="hidden md:flex items-center space-x-6 pr-4 pt-1">
                        <button
                            className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors bg-transparent rounded-sm px-2 py-1.5 border-none cursor-pointer hover:bg-[#2a2f3d]/3 dark:hover:bg-[#2a2f3d]/10"
                            onMouseEnter={handleIntegrationsMouseEnter}
                            onMouseLeave={handleIntegrationsMouseLeave}
                            onClick={playClickSound}
                        >
                            {t("header.products")}
                        </button>
                        <button
                            className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors bg-transparent rounded-sm px-2 py-1.5 border-none cursor-pointer hover:bg-[#2a2f3d]/3 dark:hover:bg-[#2a2f3d]/10"
                            onClick={(e) => {
                                playClickSound();
                                handleSmoothScroll("pricing")(e);
                            }}
                        >
                            {t("header.pricing")}
                        </button>
                        <button
                            className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors bg-transparent rounded-sm px-2 py-1.5 border-none cursor-pointer hover:bg-[#2a2f3d]/3 dark:hover:bg-[#2a2f3d]/10"
                            onClick={() => {
                                playClickSound();
                                window.open("https://docs.lomi.africa", "_blank");
                            }}
                        >
                            {t("header.documentation")}
                        </button>
                        <button
                            className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors bg-transparent rounded-sm px-2 py-1.5 border-none cursor-pointer hover:bg-[#2a2f3d]/3 dark:hover:bg-[#2a2f3d]/10"
                            onClick={() => {
                                playClickSound();
                                navigate("/blog");
                            }}
                        >
                            {t("header.blog")}
                        </button>
                        <span className="text-muted-foreground text-lg leading-none font-thin">
                            |
                        </span>
                        {/* GitHub Stars */}
                        <Link
                            href="https://github.com/lomiafrica/lomi."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center mr-3"
                            onMouseDown={() => playClickSound()}
                        >
                            <div className="flex items-center gap-1 text-amber-500 hover:text-amber-600 transition-colors">
                                <span className="font-semibold text-amber-600 dark:text-amber-300 hover:text-amber-700 dark:hover:text-amber-200">
                                    {starCount !== null ? starCount.toLocaleString() : "10"}
                                </span>
                                <Star className="h-4 w-4 text-amber-600 dark:text-amber-300 hover:text-amber-700 dark:hover:text-amber-200 fill-current" />
                            </div>
                        </Link>

                        <AuthButtons
                            isMobile={false}
                            playClickSound={playClickSound}
                            user={user}
                            t={t}
                            navigate={navigate}
                        />
                    </nav>

                    {/* Mobile Menu Button - Hidden on desktop */}
                    <button
                        className="md:hidden pr-4 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
                        onClick={() => {
                            playClickSound();
                            toggleMobileMenu();
                        }}
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? (
                            <X size={20} />
                        ) : (
                            <Menu size={20} />
                        )}
                    </button>
                </div>

                {/* Mobile Menu - Hidden on desktop */}
                {isMobileMenuOpen && (
                    <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-background/95 backdrop-blur-md">
                        <nav className="flex flex-col space-y-4 py-4 px-4">
                            <button
                                className="text-left text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors bg-transparent rounded-sm px-2 py-1.5 border-none cursor-pointer w-full hover:bg-[#2a2f3d]/3 dark:hover:bg-[#2a2f3d]/10"
                                onClick={(e) => {
                                    playClickSound();
                                    handleSmoothScroll("pricing")(e);
                                }}
                            >
                                {t("header.pricing")}
                            </button>
                            <button
                                className="text-left text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors bg-transparent rounded-sm px-2 py-1.5 border-none cursor-pointer w-full hover:bg-[#2a2f3d]/3 dark:hover:bg-[#2a2f3d]/10"
                                onClick={() => {
                                    playClickSound();
                                    window.open("https://docs.lomi.africa", "_blank");
                                }}
                            >
                                {t("header.documentation")}
                            </button>
                            <button
                                className="text-left text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors bg-transparent rounded-sm px-2 py-1.5 border-none cursor-pointer w-full hover:bg-[#2a2f3d]/3 dark:hover:bg-[#2a2f3d]/10"
                                onClick={() => {
                                    playClickSound();
                                    navigate("/blog");
                                }}
                            >
                                {t("header.blog")}
                            </button>


                            <AuthButtons
                                isMobile={true}
                                playClickSound={playClickSound}
                                user={user}
                                t={t}
                                navigate={navigate}
                            />
                        </nav>
                    </div>
                )}

                {/* Desktop Products Dropdown */}
                <DockDropdown
                    isOpen={isIntegrationsOpen}
                    onMouseEnter={handleIntegrationsMouseEnter}
                    onMouseLeave={handleIntegrationsMouseLeave}
                >
                    <IntegrationsDropdown />
                </DockDropdown>
            </header>
        </Dock>
    );
}
