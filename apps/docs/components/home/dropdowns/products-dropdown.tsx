import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { LottieIcon } from '@/components/ui/lottie-icon';
import { animations, LottieAnimationData } from '@/lib/utils/lottie-animations';
import { useTheme } from '@/lib/hooks/use-theme';
import { playClickSound } from '@/lib/utils/sound';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

type UseCase = {
  name: string;
  description: string;
};

type Product = {
  id: string;
  name: string;
  icon: LottieAnimationData;
  description: string;
  useCases: UseCase[];
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
      id: 'checkout-sessions-api',
      name: 'Checkout Sessions API',
      icon: animations.creditCard,
      description:
        'Create and manage secure payment sessions to accept payments',
      useCases: [
        {
          name: 'E-commerce Integration',
          description:
            'Accept payments directly on your website with hosted checkout pages.',
        },
        {
          name: 'Marketplace Payments',
          description:
            'Handle payments for multiple vendors in a marketplace environment.',
        },
        {
          name: 'Subscription Setup',
          description:
            'Create recurring payment sessions for subscription services.',
        },
      ],
    },
    {
      id: 'lomi-cli',
      name: 'lomi. CLI',
      icon: animations.code,
      description:
        'A powerful command-line interface to help you get started in minutes',
      useCases: [
        {
          name: 'Development workflow',
          description:
            'Test payment flows and manage everything from your terminal.',
        },
        {
          name: 'CI/CD Integration',
          description: 'Automate payment testing in your deployment pipelines.',
        },
        {
          name: 'Data export',
          description: 'Export transaction data and reports via command line.',
        },
      ],
    },
    {
      id: 'refund-api',
      name: 'Refund API',
      icon: animations.refresh,
      description: 'Process refunds programmatically',
      useCases: [
        {
          name: 'Customer service automation',
          description:
            'Automatically process refunds based on customer support requests.',
        },
        {
          name: 'Order management',
          description:
            'Handle returns and cancellations with instant refund processing.',
        },
        {
          name: 'Subscription management',
          description:
            'Process prorated refunds when customers cancel subscriptions.',
        },
      ],
    },
    {
      id: 'payout-transfer-api',
      name: 'Payout API',
      icon: animations.mail,
      description:
        'Transfer funds to your bank accounts or your mobile money wallets anywhere in UEMOA, instantly',
      useCases: [
        {
          name: 'Vendors and providers payments',
          description: 'Automatically pay your vendors and service providers.',
        },
        {
          name: 'Affiliate commissions',
          description:
            'Distribute earnings to affiliate marketers and partners.',
        },
        {
          name: 'Pay your staff',
          description: 'Send payments to your employees and contractors.',
        },
      ],
    },
    {
      id: 'fraud-api',
      name: 'Fraud API',
      icon: animations.flag,
      description: 'Detect and prevent fraudulent transactions in real-time',
      useCases: [
        {
          name: 'Real-time fraud detection',
          description:
            'Analyze transactions for suspicious patterns and block fraudulent activity.',
        },
        {
          name: 'Risk assessment',
          description:
            'Our algorithm score transactions based on multiple risk factors and suspect customer behavior.',
        },
        {
          name: 'Chargeback Prevention',
          description:
            'Reduce chargeback rates with proactive fraud monitoring.',
        },
      ],
    },
  ];

  const nativeFeatures: UseCase[] = [
    {
      name: 'Sell online globally',
      description:
        'Accept cards, mobile money and cryptocurrencies payments anywhere in francophone West Africa and beyond.',
    },
    {
      name: 'Build complex payment workflows',
      description:
        'Be notified when a customers pays and develop APIs and webhooks services.',
    },
    {
      name: 'Recurring billing',
      description:
        'Accept mobile money payments anywhere in francophone West Africa.',
    },
    {
      name: 'Direct Debit',
      description:
        'Invoice your customers with direct bank transfers to accounts across West African banking systems.',
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
      ['checkout-sessions-api', 'lomi-cli'], // Row 1
      ['refund-api', 'payout-transfer-api'], // Row 2
      ['fraud-api'] // Row 3
    ];

    // Find which row the clicked card belongs to
    const currentRowIndex = rows.findIndex(row => row.includes(id));

    if (currentRowIndex === -1) return;

    const currentRow = rows[currentRowIndex];

    // If clicking the same section that's already open, close the entire row
    if (expandedSections.includes(id)) {
      // Close all cards in the current row
      setExpandedSections(prev => prev.filter(cardId => !currentRow.includes(cardId)));
      return;
    }

    // Check if any card from the current row is already open
    const isCurrentRowOpen = currentRow.some(cardId => expandedSections.includes(cardId));

    if (isCurrentRowOpen) {
      // If current row is already open, just ensure all cards in row are open
      setExpandedSections(prev => {
        const newExpanded = prev.filter(cardId => !currentRow.includes(cardId)); // Remove current row
        return [...newExpanded, ...currentRow]; // Add all cards in current row
      });
    } else {
      // Close any open cards from other rows and open all cards in current row
      const otherRows = rows.filter((_, index) => index !== currentRowIndex).flat();
      setExpandedSections(prev => {
        const withoutOtherRows = prev.filter(cardId => !otherRows.includes(cardId));
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
        <div className="px-1">
          <h3 className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 mb-1.5 px-0">
            Features
          </h3>
          <div className="grid grid-cols-4 gap-2">
            {nativeFeatures.map((feature, index) => (
              <Card
                key={index}
                className="group rounded-sm transition-all cursor-pointer hover:shadow-sm"
                onMouseEnter={() => setHoveredIcon(`feature-${index}`)}
                onMouseLeave={() => setHoveredIcon(null)}
                onClick={playClickSound}
              >
                <CardContent className="p-3 text-sm">
                  <div className="flex items-start gap-2.5">
                    <div className="shrink-0 w-3 h-3 mt-1">
                      <LottieIcon
                        animationData={
                          nativeFeatureIcons[index]?.animation || animations.globe
                        }
                        size={15}
                        loop={false}
                        autoplay={false}
                        initialFrame={0}
                        isHovered={hoveredIcon === `feature-${index}`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 leading-tight">
                        {feature.name}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2 leading-tight">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Products Section */}
        <div className="px-1 py-1.5">
          <h3 className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 mb-1.5 px-0">
            Integrate
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {products.map((product) => (
              <Card key={product.id} className="rounded-sm overflow-hidden">
                <CardHeader
                  className="p-3 pb-2 cursor-pointer transition-all hover:bg-muted/50"
                  onClick={() => toggleSection(product.id)}
                  onMouseEnter={() => setHoveredIcon(product.id)}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  <div className="flex items-center gap-2">
                    <div className="shrink-0">
                      <LottieIcon
                        animationData={product.icon}
                        size={16}
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
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold leading-tight text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
                        {product.name}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1 leading-tight">
                        {product.description}
                      </p>
                    </div>
                    <ChevronDown
                      className={`h-3 w-3 text-muted-foreground transition-transform shrink-0 ${expandedSections.includes(product.id) ? 'rotate-180' : ''
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
    </div>
  );
}
