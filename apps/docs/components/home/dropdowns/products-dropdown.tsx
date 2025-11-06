import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { LottieIcon } from '@/components/ui/lottie-icon';
import { animations, LottieAnimationData } from '@/lib/utils/lottie-animations';
import { useTheme } from '@/lib/hooks/use-theme';
import { playClickSound } from '@/lib/utils/sound';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

type UseCase = {
  name: string;
  description?: string;
};

type Product = {
  id: string;
  name: string;
  icon: LottieAnimationData;
  description: string;
  useCases: UseCase[];
};

type NativeFeature = {
  name: string;
};

export function IntegrationsDropdown({
  onMouseLeave,
}: {
  onMouseLeave?: () => void;
}) {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const { theme } = useTheme();

  const products: Product[] = [
    {
      id: 'payments',
      name: 'Payments',
      icon: animations.creditCard,
      description:
        'Accept payments through our hosted checkout forms or via direct bank debits.',
      useCases: [
        {
          name: 'For e-commerce and marketplaces',
          description: '.',
        },
        {
          name: 'Send invoices and collect payments',
          description:
            'Let us handle the invoicing and collection of one-time and recurring payments for you.',
        },
      ],
    },
    {
      id: 'refund-api',
      name: 'Refunds',
      icon: animations.refresh,
      description: 'Process refunds programmatically.',
      useCases: [
        {
          name: 'Handle returns and cancellations',
          description: 'Process refunds and cancellations instantly.',
        },
        {
          name: 'Manage your customers subscriptions',
          description:
            'Send prorated refunds when customers cancel subscriptions.',
        },
      ],
    },
    {
      id: 'payout-transfer-api',
      name: 'Payouts',
      icon: animations.mail,
      description: 'Send money to third parties.',
      useCases: [
        {
          name: 'Pay your vendors and providers',
          description: 'Automatically pay your vendors and service providers.',
        },
        {
          name: 'Pay yourself, your staff and your partners',
          description:
            'Send payments to any mobile wallet in UEMOA and to any bank account globally.',
        },
      ],
    },
    {
      id: 'fraud-api',
      name: 'Fraud',
      icon: animations.flag,
      description: 'Detect and prevent fraudulent transactions in real-time.',
      useCases: [
        {
          name: 'Eliminate risk with built-in fraud detection tools',
          description:
            'We score transactions based on multiple risk factors and flag suspicious customer behavior.',
        },
        {
          name: 'Prevent chargebacks',
          description:
            'Reduce chargeback rates with proactive fraud monitoring.',
        },
      ],
    },
  ];

  const nativeFeatures: NativeFeature[] = [
    {
      name: 'Sell online globally',
    },
    {
      name: 'Build complex payment workflows',
    },
    {
      name: 'Manage your business finances',
    },
    {
      name: 'Manage your customers billing and subscriptions',
    },
  ];

  const nativeFeatureIcons = [
    {
      animation: animations.globe,
      color: [0.13, 0.45, 0.85] as [number, number, number],
    }, // Blue
    {
      animation: animations.swap,
      color: [0.1, 0.64, 0.25] as [number, number, number],
    }, // Green
    {
      animation: animations.search,
      color: [0.9, 0.45, 0.1] as [number, number, number],
    }, // Orange
    {
      animation: animations.settings,
      color: [0.5, 0.2, 0.8] as [number, number, number],
    }, // Purple
  ];

  const toggleSection = (id: string) => {
    playClickSound();

    // Define row groups
    const rows = [
      ['payments', 'refund-api'], // Row 1
      ['payout-transfer-api', 'fraud-api'], // Row 2
    ];

    // Find which row the clicked card belongs to
    const currentRowIndex = rows.findIndex((row) => row.includes(id));

    if (currentRowIndex === -1) return;

    const currentRow = rows[currentRowIndex];

    // If clicking the same section that's already open, close the entire row
    if (expandedSections.includes(id)) {
      // Close all cards in the current row
      setExpandedSections((prev) =>
        prev.filter((cardId) => !currentRow.includes(cardId)),
      );
      return;
    }

    // Check if any card from the current row is already open
    const isCurrentRowOpen = currentRow.some((cardId) =>
      expandedSections.includes(cardId),
    );

    if (isCurrentRowOpen) {
      // If current row is already open, just ensure all cards in row are open
      setExpandedSections((prev) => {
        const newExpanded = prev.filter(
          (cardId) => !currentRow.includes(cardId),
        ); // Remove current row
        return [...newExpanded, ...currentRow]; // Add all cards in current row
      });
    } else {
      // Close any open cards from other rows and open all cards in current row
      const otherRows = rows
        .filter((_, index) => index !== currentRowIndex)
        .flat();
      setExpandedSections((prev) => {
        const withoutOtherRows = prev.filter(
          (cardId) => !otherRows.includes(cardId),
        );
        return [...withoutOtherRows, ...currentRow];
      });
    }
  };

  return (
    <div
      className="w-full max-w-7xl max-h-[480px] overflow-y-auto -translate-y-2"
      onMouseLeave={onMouseLeave}
    >
      <div className="flex flex-col">
        {/* Core Features Section */}
        <div className="px-2">
          <h3 className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 mb-2 px-0">
            Features
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {nativeFeatures.map((feature, index) => (
              <Card
                key={index}
                className="group relative flex flex-col h-[57px] rounded-sm transition-all cursor-pointer hover:shadow-sm overflow-hidden"
                onMouseEnter={() => setHoveredIcon(`feature-${index}`)}
                onMouseLeave={() => setHoveredIcon(null)}
                onClick={playClickSound}
              >
                <CardContent className="p-3 text-sm">
                  <div className="flex items-center gap-3 pt-1">
                    <div className="shrink-0">
                      <div className="flex items-center justify-center w-6 h-6 rounded-md hover:bg-[#2a2f3d]/3 dark:hover:bg-[#2a2f3d]/10 transition-colors">
                        <LottieIcon
                          animationData={
                            nativeFeatureIcons[index]?.animation ||
                            animations.globe
                          }
                          size={18}
                          loop={false}
                          autoplay={false}
                          initialFrame={0}
                          isHovered={hoveredIcon === `feature-${index}`}
                          customColor={
                            hoveredIcon === `feature-${index}`
                              ? theme === 'dark'
                                ? [0.922, 0.922, 0.941] // Very light in dark mode (zinc-200)
                                : [0.145, 0.145, 0.169] // Very dark in light mode (zinc-800)
                              : theme === 'dark'
                                ? [0.631, 0.631, 0.667] // zinc-400 in dark mode
                                : [0.322, 0.322, 0.357] // zinc-600 in light mode
                          }
                        />
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 leading-tight flex-1">
                      {feature.name}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="px-2 mt-4">
        <h3 className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 mb-2 px-0">
          Integrate
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group relative flex flex-col rounded-sm transition-all cursor-pointer hover:shadow-sm overflow-hidden"
            >
              <CardHeader
                className="p-3 pb-2 cursor-pointer transition-all"
                onClick={() => toggleSection(product.id)}
                onMouseEnter={() => setHoveredIcon(product.id)}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <div className="flex items-center gap-2">
                  <div className="shrink-0">
                    <div className="flex items-center justify-center w-6 h-6 rounded-md hover:bg-[#2a2f3d]/3 dark:hover:bg-[#2a2f3d]/10 transition-colors">
                      <LottieIcon
                        animationData={product.icon}
                        size={18}
                        loop={false}
                        autoplay={false}
                        initialFrame={0}
                        isHovered={hoveredIcon === product.id}
                        customColor={
                          hoveredIcon === product.id
                            ? theme === 'dark'
                              ? [0.922, 0.922, 0.941] // Very light in dark mode (zinc-200)
                              : [0.145, 0.145, 0.169] // Very dark in light mode (zinc-800)
                            : theme === 'dark'
                              ? [0.631, 0.631, 0.667] // zinc-400 in dark mode
                              : [0.322, 0.322, 0.357] // zinc-600 in light mode
                        }
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 pl-1.5">
                    <p className="text-sm font-semibold leading-tight text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
                      {product.name}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1 leading-tight">
                      {product.description}
                    </p>
                  </div>
                  <ChevronDown
                    className={`h-3 w-3 text-muted-foreground transition-transform shrink-0 ${
                      expandedSections.includes(product.id) ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </CardHeader>

              {expandedSections.includes(product.id) && (
                <CardContent className="px-3 py-2 pt-0">
                  <div className="grid grid-cols-1 gap-2">
                    {product.useCases.map((useCase, index) => (
                      <Card
                        key={index}
                        className="rounded-sm transition-all cursor-pointer hover:shadow-sm"
                        onClick={playClickSound}
                      >
                        <CardContent className="p-3 text-sm">
                          <p className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 leading-tight">
                            {useCase.name}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1 line-clamp-2 leading-tight">
                            {useCase.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
