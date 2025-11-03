import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/actions/utils";

const infoBoxVariants = cva("p-4 rounded-sm select-none", {
  variants: {
    variant: {
      default:
        "bg-sky-100 dark:bg-sky-900 border border-sky-200 dark:border-sky-800/50",
      blue: "bg-sky-100 dark:bg-sky-900 border border-sky-200 dark:border-sky-800/50",
      red: "bg-red-100 dark:bg-red-900 border border-red-200 dark:border-red-800/50",
      green:
        "bg-green-100 dark:bg-green-900 border border-green-200 dark:border-green-800/50",
      orange:
        "bg-orange-100 dark:bg-orange-900 border border-orange-200 dark:border-orange-800/50",
      pink: "bg-pink-100 dark:bg-pink-900 border border-pink-200 dark:border-pink-800/50",
      teal: "bg-teal-100 dark:bg-teal-900 border border-teal-200 dark:border-teal-800/50",
    },
    size: {
      default: "text-xs",
      sm: "text-xs",
      lg: "text-sm",
    },
    maxWidth: {
      none: "",
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      "2xl": "max-w-2xl",
      "3xl": "max-w-3xl",
      "4xl": "max-w-4xl",
      "5xl": "max-w-5xl",
      "6xl": "max-w-6xl",
      "7xl": "max-w-7xl",
      full: "max-w-full",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    maxWidth: "4xl",
  },
});

const infoBoxTextVariants = cva("leading-relaxed", {
  variants: {
    variant: {
      default: "text-sky-600 dark:text-sky-300",
      blue: "text-sky-600 dark:text-sky-300",
      green: "text-green-600 dark:text-green-300",
      red: "text-red-600 dark:text-red-300",
      orange: "text-orange-600 dark:text-orange-300",
      pink: "text-pink-600 dark:text-pink-300",
      teal: "text-teal-600 dark:text-teal-300",
    },
    size: {
      default: "text-xs",
      sm: "text-xs",
      lg: "text-sm",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface InfoBoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof infoBoxVariants> {
  children: React.ReactNode;
}

function InfoBox({
  className,
  variant,
  size,
  maxWidth,
  children,
  ...props
}: InfoBoxProps) {
  return (
    <div
      data-slot="info-box"
      className={cn(infoBoxVariants({ variant, size, maxWidth }), className)}
      {...props}
    >
      <div className={cn(infoBoxTextVariants({ variant, size }))}>
        {children}
      </div>
    </div>
  );
}

export { InfoBox, infoBoxVariants, infoBoxTextVariants };
