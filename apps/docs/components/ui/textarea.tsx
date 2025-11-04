import * as React from 'react';

import { cn } from '@/lib/actions/utils';

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<'textarea'> & {
    variant?: 'default' | 'editor' | 'neutral';
  }
>(({ className, variant = 'default', ...props }, ref) => {
  const baseClasses = {
    default:
      'flex min-h-[55px] w-full max-w-md max-h-64 overflow-auto rounded-sm border-[0.5px] border-[#4A94E8] bg-background px-2 py-2 text-xs font-normal ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-sky-300',
    editor:
      'flex-1 w-full bg-transparent resize px-1 py-0.5 text-xs font-normal outline-none rounded-sm overflow-auto',
    neutral:
      'flex min-h-[55px] w-full max-w-md max-h-64 overflow-auto rounded-sm border-[0.5px] border-border bg-background px-2 py-2 text-xs font-normal ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  };

  return (
    <textarea
      className={cn(baseClasses[variant], className)}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = 'Textarea';

export { Textarea };
