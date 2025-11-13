'use client';

import { ChevronDown } from "lucide-react";
import { useTranslation } from '@/lib/contexts/translation-context';
import { t as translate } from '@/lib/i18n/translations';

export default function PricingDetails() {
    const { currentLanguage } = useTranslation();
    const t = (key: string) => String(translate(key, currentLanguage));

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const SECTIONS = [
        { id: "intro", label: t('pricingDetails.sections.intro') },
        { id: "transaction", label: t('pricingDetails.sections.transaction') },
        { id: "additional", label: t('pricingDetails.sections.additional') },
        { id: "example", label: t('pricingDetails.sections.example') },
        { id: "refunds", label: t('pricingDetails.sections.refunds') },
        { id: "dispute", label: t('pricingDetails.sections.dispute') },
        { id: "payout", label: t('pricingDetails.sections.payout') },
        { id: "volume", label: t('pricingDetails.sections.volume') },
    ];

    const CONTENT = {
        intro: {
            title: t('pricingDetails.content.intro.title'),
            sections: [
                {
                    subtitle: t('pricingDetails.content.intro.sections.0.subtitle'),
                    items: [
                        {
                            text: t('pricingDetails.content.intro.sections.0.items.0.text'),
                        },
                    ],
                },
                {
                    subtitle: t('pricingDetails.content.intro.sections.1.subtitle'),
                    items: [
                        {
                            text: t('pricingDetails.content.intro.sections.1.items.0.text'),
                        },
                    ],
                },
            ],
        },
        transaction: {
            title: t('pricingDetails.content.transaction.title'),
            sections: [
                {
                    subtitle: t('pricingDetails.content.transaction.sections.0.subtitle'),
                    items: [
                        {
                            text: t('pricingDetails.content.transaction.sections.0.items.0.text'),
                        },
                        {
                            text: t('pricingDetails.content.transaction.sections.0.items.1.text'),
                        },
                    ],
                },
            ],
        },
        additional: {
            title: t('pricingDetails.content.additional.title'),
            sections: [
                {
                    subtitle: t('pricingDetails.content.additional.sections.0.subtitle')
                },
                {
                    subtitle: t('pricingDetails.content.additional.sections.1.subtitle')
                },
            ],
        },
        example: {
            title: t('pricingDetails.content.example.title'),
            sections: [
                {
                    subtitle: t('pricingDetails.content.example.sections.0.subtitle'),
                    items: [
                        {
                            text: t('pricingDetails.content.example.sections.0.items.0.text'),
                        },
                    ],
                    table: [
                        { label: t('pricingDetails.content.example.sections.0.table.0.label'), value: t('pricingDetails.content.example.sections.0.table.0.value') },
                        { label: t('pricingDetails.content.example.sections.0.table.1.label'), value: t('pricingDetails.content.example.sections.0.table.1.value') },
                        { label: t('pricingDetails.content.example.sections.0.table.2.label'), value: t('pricingDetails.content.example.sections.0.table.2.value') },
                        { label: t('pricingDetails.content.example.sections.0.table.3.label'), value: t('pricingDetails.content.example.sections.0.table.3.value') },
                    ],
                },
                {
                    subtitle: t('pricingDetails.content.example.sections.1.subtitle'),
                    items: [
                        {
                            text: t('pricingDetails.content.example.sections.1.items.0.text'),
                        },
                    ],
                    table: [
                        { label: t('pricingDetails.content.example.sections.1.table.0.label'), value: t('pricingDetails.content.example.sections.1.table.0.value') },
                        { label: t('pricingDetails.content.example.sections.1.table.1.label'), value: t('pricingDetails.content.example.sections.1.table.1.value') },
                        { label: t('pricingDetails.content.example.sections.1.table.2.label'), value: t('pricingDetails.content.example.sections.1.table.2.value') },
                        { label: t('pricingDetails.content.example.sections.1.table.3.label'), value: t('pricingDetails.content.example.sections.1.table.3.value') },
                        { label: t('pricingDetails.content.example.sections.1.table.4.label'), value: t('pricingDetails.content.example.sections.1.table.4.value') },
                    ],
                },
            ],
        },
        refunds: {
            title: t('pricingDetails.content.refunds.title'),
            sections: [
                {
                    subtitle: t('pricingDetails.content.refunds.sections.0.subtitle'),
                    items: [
                        {
                            text: t('pricingDetails.content.refunds.sections.0.items.0.text'),
                            bubble: t('pricingDetails.content.refunds.sections.0.items.0.bubble'),
                        },
                    ],
                },
            ],
        },
        dispute: {
            title: t('pricingDetails.content.dispute.title'),
            sections: [
                {
                    subtitle: t('pricingDetails.content.dispute.sections.0.subtitle'),
                    items: [
                        {
                            text: t('pricingDetails.content.dispute.sections.0.items.0.text'),
                        },
                    ],
                },
                {
                    subtitle: t('pricingDetails.content.dispute.sections.1.subtitle'),
                    items: [
                        {
                            text: t('pricingDetails.content.dispute.sections.1.items.0.text'),
                            bubble: t('pricingDetails.content.dispute.sections.1.items.0.bubble'),
                        },
                    ],
                },
            ],
        },
        payout: {
            title: t('pricingDetails.content.payout.title'),
            sections: [
                {
                    subtitle: t('pricingDetails.content.payout.sections.0.subtitle'),
                    items: [
                        {
                            text: t('pricingDetails.content.payout.sections.0.items.0.text'),
                        },
                    ],
                    providers: [
                        {
                            name: t('pricingDetails.content.payout.sections.0.providers.0.name'),
                            fees: [
                                t('pricingDetails.content.payout.sections.0.providers.0.fees.0'),
                            ],
                        },
                        {
                            name: t('pricingDetails.content.payout.sections.0.providers.1.name'),
                            fees: [
                                t('pricingDetails.content.payout.sections.0.providers.1.fees.0'),
                                t('pricingDetails.content.payout.sections.0.providers.1.fees.1'),
                            ],
                        }
                    ],
                },
            ],
        },
        volume: {
            title: t('pricingDetails.content.volume.title'),
            sections: [
                {
                    subtitle: t('pricingDetails.content.volume.sections.0.subtitle'),
                    items: [
                        {
                            text: t('pricingDetails.content.volume.sections.0.items.0.text')
                        },
                    ],
                },
            ],
        },
    };

    return (
        <div className="max-w-7xl mx-auto pl-2 pr-4 py-2">

            {/* Menu */}
            <div className="border-b border-border mb-8">
                <div className="flex flex-col gap-2 py-8 px-6">
                    {SECTIONS.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            className="flex items-center gap-2 text-base font-normal text-foreground hover:text-foreground/80 transition-colors py-2 w-fit"
                        >
                            <ChevronDown size={16} className="opacity-70" />
                            <span>{section.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="px-6 pb-6">
                <div className="space-y-0">
                    {SECTIONS.map((section) => {
                        const sectionData = CONTENT[section.id as keyof typeof CONTENT];
                        return (
                            <div key={section.id} id={section.id} className="scroll-mt-32">
                                <div className="flex">
                                    <div className="w-[30%] pt-8 pb-8">
                                        <h2 className="text-lg font-normal text-foreground sticky top-20">{sectionData.title}</h2>
                                    </div>
                                    <div className="w-[5%]" />
                                    <div className="w-[55%] py-8">
                                        {/* Content sections */}
                                        <div className="space-y-8">
                                            {sectionData.sections.map((subsection, idx) => {
                                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                                const sub = subsection as any;
                                                return (
                                                    <div key={idx} className="space-y-3">
                                                        {/* Subtitle */}
                                                        <h3 className="text-foreground font-normal text-lg">{sub.subtitle}</h3>

                                                        <div className="space-y-3">
                                                            {sub.items && sub.items.map((item: { text: string; bubble?: string }, itemIdx: number) => (
                                                                <div key={itemIdx}>
                                                                    <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed tracking-tight">{item.text}</p>
                                                                    {item.bubble && (
                                                                        <div className="mt-4 bg-muted border border-border rounded p-4">
                                                                            <p className="text-muted-foreground text-sm leading-relaxed">{item.bubble}</p>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            ))}
                                                        </div>

                                                        {/* Pricing Table */}
                                                        {sub.table && (
                                                            <div className="mt-8 space-y-0 border border-border rounded">
                                                                {sub.table.map((row: { label: string; value: string }, rowIdx: number) => (
                                                                    <div
                                                                        key={rowIdx}
                                                                        className={`flex justify-between items-center px-6 py-4 text-sm ${rowIdx !== sub.table.length - 1 ? "border-b border-border" : ""
                                                                            }`}
                                                                    >
                                                                        <span className="text-muted-foreground">{row.label}</span>
                                                                        <span className="text-foreground font-medium">{row.value}</span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}

                                                        {/* Provider Comparison */}
                                                        {sub.providers && (
                                                            <div className="grid grid-cols-2 gap-6 mt-8">
                                                                {sub.providers.map((provider: { name: string; fees: string[] }, provIdx: number) => (
                                                                    <div key={provIdx} className="border border-border rounded p-6">
                                                                        <h4 className="text-foreground font-medium mb-4 text-sm">{provider.name}</h4>
                                                                        <ul className="space-y-3">
                                                                            {provider.fees.map((fee: string, feeIdx: number) => (
                                                                                <li key={feeIdx} className="text-muted-foreground text-sm">
                                                                                    {fee}
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    <div className="w-[5%]" />
                                </div>

                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
