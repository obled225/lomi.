import { useTranslation } from "@/lib/contexts/translation-context";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { t } from "@/lib/i18n/translations";

export function CareersSection() {
    const { currentLanguage } = useTranslation();

    return (
        <section className="relative w-full py-12 md:py-12 lg:py-12 xl:py-12 overflow-hidden">
            <div className="container mx-auto px-6 md:px-8 lg:px-12">
                <div className="flex flex-col space-y-6 text-left mt-20 md:mt-0">
                    {/* Careers content */}
                    <div className="space-y-4">
                        <h2 className="text-4xl font-normal tracking-tighter text-left text-zinc-800 dark:text-white md:text-5xl max-w-7xl whitespace-pre-line">
                            {String(t("careers.title", currentLanguage))}
                        </h2>
                    </div>
                    {/* Join Us Button */}
                    <Button
                        variant="blue"
                        size="header"
                        className="self-start"
                    >
                        {String(t("careers.join_us", currentLanguage))}
                    </Button>
                </div>

                {/* Careers Image Section */}
                <div className="w-full mt-8 relative">
                    <Image
                        src="/company/join-us.webp"
                        alt="Join our team"
                        width={800}
                        height={400}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                        decoding="async"
                    />
                </div>
            </div>
        </section>
    );
}
