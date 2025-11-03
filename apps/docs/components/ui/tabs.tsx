"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/actions/utils";

const tabsTriggerVariants = cva(
  "inline-flex flex-1 items-center justify-center gap-2.5 rounded-sm px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "data-[state=active]:bg-[#56A5F9] data-[state=active]:text-white hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-muted-foreground border border-transparent dark:data-[state=active]:bg-sky-100 dark:data-[state=active]:text-sky-600 dark:data-[state=active]:bg-sky-900 dark:data-[state=active]:text-sky-300",
        outline:
          "border border-border bg-background hover:bg-sidebar-accent hover:text-sidebar-accent-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.06),inset_0_-1px_1px_rgba(0,0,0,0.03)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] data-[state=active]:bg-sidebar-accent data-[state=active]:text-sidebar-accent-foreground",
        secondary:
          "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_2px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:brightness-101 active:brightness-99 data-[state=active]:bg-gray-50 data-[state=active]:text-gray-900",
      },
      size: {
        default: "h-[calc(100%-1px)]",
        header: "h-7 px-4 py-2",
        header2: "h-8 px-4 py-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface TabsTriggerProps
  extends React.ComponentProps<typeof TabsPrimitive.Trigger>,
    VariantProps<typeof tabsTriggerVariants> {}

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-background text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-sm p-[3px] gap-2 border border-border",
        className,
      )}
      {...props}
    />
  );
}

function TabsTrigger({ className, variant, size, ...props }: TabsTriggerProps) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(tabsTriggerVariants({ variant, size }), className)}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsTriggerVariants };
