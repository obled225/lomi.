import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-[#374151] text-white hover:bg-[#4B5563] shadow-[inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(0,0,0,0.1)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] hover:brightness-101 active:brightness-99 dark:bg-gray-100 dark:text-gray-600 dark:hover:bg-gray-100 dark:hover:text-gray-900 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-200',
        destructive:
          'bg-[#E94441] text-white hover:bg-[#D32F2F] shadow-[inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(0,0,0,0.1)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] hover:brightness-101 active:brightness-99 dark:bg-red-100 dark:text-red-600 dark:bg-red-900 dark:text-red-300 dark:hover:bg-red-900 dark:hover:text-red-200',
        outline:
          'bg-slate-50 text-sm font-normal hover:bg-slate-100 dark:bg-zinc-800 dark:hover:bg-zinc-700 border border-gray-200 dark:border-[0.15px] dark:border-gray-700/20',
        secondary:
          'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_2px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:brightness-101 active:brightness-99',
        pointille:
          'bg-white text-gray-900 border border-dashed border-gray-400 hover:bg-gray-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_2px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:brightness-101 active:brightness-99 dark:border-gray-500',
        dashed:
          'hover:bg-[#2a2f3d]/[0.03] dark:hover:bg-[#2a2f3d]/10 hover:text-accent-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]',
        ghost:
          'hover:bg-[#2a2f3d]/3 dark:hover:bg-[#2a2f3d]/10 hover:text-accent-foreground',
        transparent: 'bg-transparent border-0 shadow-none',
        link: 'text-primary underline-offset-4 hover:underline',
        blue: 'bg-[#56A5F9] text-white hover:bg-[#52A1F8] shadow-[inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(0,0,0,0.1)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] active:brightness-99 dark:bg-sky-100 dark:text-sky-600 dark:hover:bg-sky-100 dark:hover:text-sky-900 dark:bg-sky-900 dark:text-sky-300 dark:hover:bg-sky-900 dark:hover:text-sky-200',
        green:
          'bg-[#22C55E] text-white hover:bg-[#16A34A] shadow-[inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(0,0,0,0.1)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] active:brightness-99 dark:bg-green-100 dark:text-green-600 dark:hover:bg-green-100 dark:hover:text-green-900 dark:bg-green-900 dark:text-green-300 dark:hover:bg-green-900 dark:hover:text-green-200',
        pink: 'bg-[#E91E63] text-white hover:bg-[#C2185B] shadow-[inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(0,0,0,0.1)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] hover:brightness-101 active:brightness-99 dark:bg-pink-100 dark:text-pink-600 dark:hover:bg-pink-100 dark:hover:text-pink-900 dark:bg-pink-900 dark:text-pink-300 dark:hover:bg-pink-900 dark:hover:text-pink-200',
        cancel:
          'bg-[#6B7280] text-white hover:bg-[#5A6370] shadow-[inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(0,0,0,0.1)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] hover:brightness-101 active:brightness-99 dark:bg-gray-100 dark:text-gray-600 dark:hover:bg-gray-100 dark:hover:text-gray-900 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-gray-200',
        teal: 'bg-[#14B8A6] text-white hover:bg-[#0F9A8A] shadow-[inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(0,0,0,0.1)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] hover:brightness-101 active:brightness-99 dark:bg-teal-100 dark:text-teal-600 dark:hover:bg-teal-100 dark:hover:text-teal-900 dark:bg-teal-900 dark:text-teal-300 dark:hover:bg-teal-900 dark:hover:text-teal-200',
        workspace:
          'bg-white text-[#56A5F9] border border-gray-200 hover:bg-gray-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_2px_rgba(0,0,0,0.05)] hover:brightness-101 active:brightness-99 dark:bg-sky-900 dark:text-sky-300 dark:hover:bg-sky-900 dark:hover:text-sky-200 dark:border-transparent dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-1px_2px_rgba(0,0,0,0.04)]',
        auth: 'bg-slate-50 text-sm font-normal hover:bg-slate-100 dark:bg-zinc-800 dark:hover:bg-zinc-700',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-7 rounded-sm px-3',
        lg: 'h-11 rounded-sm px-8',
        icon: 'h-10 w-10',
        header: 'h-8 px-4 py-2',
        small: 'h-7 w-7 p-0',
        sidebar: 'h-7 py-2 w-56',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
