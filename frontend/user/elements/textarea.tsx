import * as React from 'react';

import { cn } from '@/lib/utils';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
            `flex w-full border-none bg-dark-600/20 text-white rounded-2xl px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600 placeholder:font-medium font-medium
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:bg-dark-400/20 dark:focus-visible:bg-dark-400/20
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400
           `,
            className
      )}
      cols={10}
      rows={8}
      {...props}
    />
    )
);

Textarea.displayName = 'Textarea';

export { Textarea };
