'use client';

import { usePathname } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useTranslation } from '@/lib/contexts/translation-context';
import { t } from '@/lib/i18n/translations';

// Only display on the root and documents pages

export default function MobileWarning() {
  const pathname = usePathname();
  const { currentLanguage } = useTranslation();

  const shouldShow = ['/documents'].some(
    (p) => pathname === p || pathname.startsWith(`${p}/`),
  );
  if (!shouldShow) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 dark:bg-background/80 md:hidden">
      <Card className="w-11/12 max-w-sm">
        <CardHeader>
          <CardTitle>
            {t('mobile_warning.title', currentLanguage) as string}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            {t('mobile_warning.description', currentLanguage) as string}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
