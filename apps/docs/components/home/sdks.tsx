import { Section, SectionHeader } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useTranslation } from '@/lib/contexts/translation-context';
import { t } from '@/lib/i18n/translations';
import Image from 'next/image';
import { useTheme } from '@/lib/hooks/use-theme';

// Simple framework data structure for SDKs
interface Framework {
  name: string;
  logoSrc: string;
  descriptionKey: string;
  slug: string;
}

const frameworks: Framework[] = [
  {
    name: 'TypeScript',
    logoSrc: '/sdks/ts.webp',
    descriptionKey: 'sdks.frameworks.typescript',
    slug: 'typescript',
  },
  {
    name: 'JavaScript',
    logoSrc: '/sdks/js.webp',
    descriptionKey: 'sdks.frameworks.javascript',
    slug: 'javascript',
  },
  {
    name: 'Python',
    logoSrc: '/sdks/python.webp',
    descriptionKey: 'sdks.frameworks.python',
    slug: 'python',
  },
  {
    name: 'Laravel',
    logoSrc: '/sdks/laravel.webp',
    descriptionKey: 'sdks.frameworks.laravel',
    slug: 'laravel',
  },
  {
    name: 'PHP',
    logoSrc: '/sdks/php.webp',
    descriptionKey: 'sdks.frameworks.php',
    slug: 'php',
  },
  {
    name: 'Go',
    logoSrc: '/sdks/go.webp',
    descriptionKey: 'sdks.frameworks.go',
    slug: 'go',
  },
  {
    name: 'Node.js',
    logoSrc: '/sdks/node.webp',
    descriptionKey: 'sdks.frameworks.nodejs',
    slug: 'nodejs',
  },
  {
    name: 'cURL',
    logoSrc: '/sdks/curl_l.webp',
    descriptionKey: 'sdks.frameworks.curl',
    slug: 'curl',
  },
];

export function Sdks() {
  const { currentLanguage } = useTranslation();
  const { mounted } = useTheme();
  return (
    <Section className="mb-8 lg:mb-28">
      <div className="max-w-7xl mx-auto pl-2 pr-4 py-2">
        <SectionHeader
          title={String(t('sdks.title', currentLanguage))}
          className="mb-6 md:mb-8"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {frameworks.map((sdk, index) => (
            <motion.div
              key={sdk.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="size-full"
            >
              <SdkCard sdk={sdk} mounted={mounted} />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function SdkCard({ sdk, mounted }: { sdk: Framework; mounted: boolean }) {
  return (
    <a
      href={`/docs/reference/${sdk.slug}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <Card className="flex flex-col h-[280px] rounded-sm hover:shadow-sm transition-all duration-300 group cursor-pointer">
        <CardContent className="p-6 text-center flex flex-col items-center justify-center gap-4 grow">
          {/* Logo/Icon Container */}
          <div className="w-16 h-16 bg-card rounded-sm flex items-center justify-center group-hover:bg-[#2a2f3d]/5 dark:group-hover:bg-[#2a2f3d]/20 transition-colors">
            {sdk.slug === 'curl' && mounted ? (
              <>
                <Image
                  src="/sdks/curl_d.webp"
                  alt={`${sdk.name} logo`}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain block dark:hidden"
                  onError={(e) => {
                    // Fallback to a colored div if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="w-12 h-12 rounded bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">${sdk.name.charAt(0)}</div>`;
                    }
                  }}
                />
                <Image
                  src="/sdks/curl_l.webp"
                  alt={`${sdk.name} logo`}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain hidden dark:block"
                  onError={(e) => {
                    // Fallback to a colored div if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="w-12 h-12 rounded bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">${sdk.name.charAt(0)}</div>`;
                    }
                  }}
                />
              </>
            ) : (
              <Image
                src={sdk.logoSrc}
                alt={`${sdk.name} logo`}
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
                onError={(e) => {
                  // Fallback to a colored div if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<div class="w-12 h-12 rounded bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">${sdk.name.charAt(0)}</div>`;
                  }
                }}
              />
            )}
          </div>

          {/* Content */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {sdk.name}
            </h3>
          </div>
        </CardContent>
      </Card>
    </a>
  );
}
