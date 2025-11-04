import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { LottieIcon } from "@/components/ui/lottie-icon";
import { animations, LottieAnimationData } from "@/lib/utils/lottie-animations";
import { useTheme } from "@/lib/hooks/use-theme";
import { playClickSound } from "@/lib/utils/sound";

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
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const { theme } = useTheme();

  const products: Product[] = [
    {
      id: "checkout-sessions-api",
      name: "Checkout Sessions API",
      icon: animations.creditCard,
      description: "Create and manage secure payment sessions for e-commerce",
      useCases: [
        {
          name: "E-commerce Integration",
          description: "Accept payments directly on your website with hosted checkout pages.",
        },
        {
          name: "Marketplace Payments",
          description: "Handle payments for multiple vendors in a marketplace environment.",
        },
        {
          name: "Subscription Setup",
          description: "Create recurring payment sessions for subscription services.",
        },
      ],
    },
    {
      id: "lomi-cli",
      name: "lomi. CLI",
      icon: animations.code,
      description: "Command-line interface for managing payments and transactions",
      useCases: [
        {
          name: "Development Workflow",
          description: "Test payment flows and manage API keys from your terminal.",
        },
        {
          name: "CI/CD Integration",
          description: "Automate payment testing in your deployment pipelines.",
        },
        {
          name: "Data Export",
          description: "Export transaction data and reports via command line.",
        },
      ],
    },
    {
      id: "refund-api",
      name: "Refund API",
      icon: animations.refresh,
      description: "Process refunds and handle chargebacks programmatically",
      useCases: [
        {
          name: "Customer Service Automation",
          description: "Automatically process refunds based on customer support requests.",
        },
        {
          name: "Order Management",
          description: "Handle returns and cancellations with instant refund processing.",
        },
        {
          name: "Subscription Management",
          description: "Process prorated refunds when customers cancel subscriptions.",
        },
      ],
    },
    {
      id: "payout-transfer-api",
      name: "Payout Transfer API",
      icon: animations.mail,
      description: "Transfer funds to bank accounts and mobile money wallets",
      useCases: [
        {
          name: "Vendor Payments",
          description: "Automatically pay marketplace vendors and service providers.",
        },
        {
          name: "Affiliate Commissions",
          description: "Distribute earnings to affiliate marketers and partners.",
        },
        {
          name: "Freelancer Payments",
          description: "Send payments to freelancers and contractors instantly.",
        },
      ],
    },
    {
      id: "fraud-api",
      name: "Fraud API",
      icon: animations.flag,
      description: "Detect and prevent fraudulent transactions in real-time",
      useCases: [
        {
          name: "Real-time Fraud Detection",
          description: "Analyze transactions for suspicious patterns and block fraudulent activity.",
        },
        {
          name: "Risk Assessment",
          description: "Score transactions based on multiple risk factors and customer behavior.",
        },
        {
          name: "Chargeback Prevention",
          description: "Reduce chargeback rates with proactive fraud monitoring.",
        },
      ],
    },
  ];

  const nativeFeatures: UseCase[] = [
    {
      name: "Multi-Currency Support",
      description: "Accept payments in multiple currencies including West African CFA, USD, EUR, and crypto.",
    },
    {
      name: "Webhook Notifications",
      description: "Real-time notifications for payment events, refunds, and transfer statuses.",
    },
    {
      name: "Mobile Money Integration",
      description: "Seamless integration with MTN Mobile Money, Orange Money, and Wave.",
    },
    {
      name: "Bank Transfer Support",
      description: "Direct bank transfers to accounts across West African banking systems.",
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
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <div
      className="w-full max-w-7xl max-h-[480px] overflow-y-auto py-1"
      onMouseLeave={onMouseLeave}
    >
      <div className="flex flex-col">
        {/* Core Features Section */}
        <div className="px-2 py-1.5 border-b border-border">
          <h3 className="text-xs font-semibold text-foreground mb-1.5 px-1">
            Core Features
          </h3>
          <div className="grid grid-cols-4 gap-2">
            {nativeFeatures.map((feature, index) => (
              <div
                key={index}
                className="group px-1.5 py-1 hover:bg-[#2a2f3d]/3 dark:hover:bg-[#2a2f3d]/10 rounded-sm transition-colors cursor-pointer"
                onMouseEnter={() => setHoveredIcon(`feature-${index}`)}
                onMouseLeave={() => setHoveredIcon(null)}
                onClick={playClickSound}
              >
                <div className="flex items-start gap-2.5">
                  <div className="shrink-0 w-3 h-3">
                    <LottieIcon
                      animationData={nativeFeatureIcons[index]?.animation || animations.globe}
                      size={15}
                      loop={false}
                      autoplay={false}
                      initialFrame={0}
                      isHovered={hoveredIcon === `feature-${index}`}
                      customColor={
                        hoveredIcon === `feature-${index}`
                          ? nativeFeatureIcons[index]?.color || [0.13, 0.45, 0.85]
                          : theme === "dark"
                            ? [0.631, 0.631, 0.667] // zinc-400 in dark mode
                            : [0.322, 0.322, 0.357] // zinc-600 in light mode
                      }
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-foreground leading-tight">
                      {feature.name}
                    </p>
                    <p className="text-[10px] text-muted-foreground mt-0.5 line-clamp-2 leading-tight">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Products Section */}
        <div className="px-2 py-1.5">
          <h3 className="text-xs font-semibold text-foreground mb-1.5 px-1">
            APIs & Products
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {products.map((product) => (
              <div key={product.id} className="rounded-sm overflow-hidden">
                <div
                  className="flex items-center gap-2 px-1.5 py-1 cursor-pointer transition-colors hover:bg-[#2a2f3d]/3 dark:hover:bg-[#2a2f3d]/10 rounded-sm"
                  onClick={() => toggleSection(product.id)}
                  onMouseEnter={() => setHoveredIcon(product.id)}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
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
                          ? theme === "dark"
                            ? [0.922, 0.922, 0.941] // Very light in dark mode (zinc-200)
                            : [0.145, 0.145, 0.169] // Very dark in light mode (zinc-800)
                          : theme === "dark"
                            ? [0.631, 0.631, 0.667] // zinc-400 in dark mode
                            : [0.322, 0.322, 0.357] // zinc-600 in light mode
                      }
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold leading-tight text-foreground">
                      {product.name}
                    </p>
                    <p className="text-[10px] text-muted-foreground mt-0.5 line-clamp-1 leading-tight">
                      {product.description}
                    </p>
                  </div>
                  <ChevronDown
                    className={`h-3 w-3 text-muted-foreground transition-transform shrink-0 ${expandedSection === product.id ? "rotate-180" : ""
                      }`}
                  />
                </div>

                {expandedSection === product.id && (
                  <div className="px-1.5 py-1 bg-[#2a2f3d]/3 dark:bg-[#2a2f3d]/10 border-t border-border">
                    <div className="grid grid-cols-1 gap-2">
                      {product.useCases.map((useCase, index) => (
                        <div
                          key={index}
                          className="px-1.5 py-1 bg-background hover:bg-[#2a2f3d]/3 dark:hover:bg-[#2a2f3d]/10 rounded-sm transition-colors cursor-pointer"
                          onClick={playClickSound}
                        >
                          <p className="text-[10px] font-medium text-foreground leading-tight">
                            {useCase.name}
                          </p>
                          <p className="text-[9px] text-muted-foreground mt-0.5 line-clamp-2 leading-tight">
                            {useCase.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
