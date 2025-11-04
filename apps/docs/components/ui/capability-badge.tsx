import { cn } from '@/lib/actions/utils';

interface CapabilityBadgeProps {
  capability: 'web';
  className?: string;
}

export function CapabilityBadge({ className }: CapabilityBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-sm text-xs font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-3 px-1.5 py-0.5',
        'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/40 hover:text-blue-800 dark:hover:text-blue-200',
        className,
      )}
    >
      Web
    </span>
  );
}
