import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/actions/utils';

const badgeVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'bg-[#2a2f3d]/80 text-primary-foreground hover:bg-[#2a2f3d]/30   dark:bg-[#2a2f3d]/12 dark:hover:bg-[#2a2f3d]/10',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-[#2a2f3d]/30 dark:hover:bg-[#2a2f3d]/10',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground hover:bg-[#2a2f3d]/30 dark:hover:bg-[#2a2f3d]/10',
        outline:
          'border border-input hover:bg-[#2a2f3d]/30 dark:hover:bg-[#2a2f3d]/10',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 px-3',
        lg: 'h-11 px-8',
        xs: 'h-7 px-3 py-1 text-xs',
        xxs: 'h-5 px-1 py-1 text-[7px]',
      },
    },
    defaultVariants: {
      variant: 'outline',
      size: 'xs',
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
