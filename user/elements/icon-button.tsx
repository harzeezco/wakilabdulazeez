import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const iconButtonVariants = cva(
  'flex items-center justify-center rounded-lg p-1.5 transition-colors duration-200 hover:bg-gray-100 active:bg-gray-200 [&_svg]:stroke-gray-600 [&_svg]:hover:stroke-gray-700',
  {
    variants: {
      size: {
        md: '[&_svg]:size-6',
        lg: '[&_svg]:size-8',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export interface IconButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'>,
    VariantProps<typeof iconButtonVariants> {
  asChild?: boolean;
  showTooltip?: boolean;
  tooltipText?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      asChild = false,
      children,
      className,
      showTooltip = false,
      size,
      tooltipText = '',
      type = 'button',
      ...props
    },
    ref,
  ) => (
    <button
      ref={ref}
      className={cn(
        'relative',
        iconButtonVariants({ size }),
        className,
      )}
      {...props}
      type={type}
    >
      {children}
      {showTooltip && tooltipText.length > 0 && (
        <span className='absolute -top-8 rounded-lg bg-dark-400 px-2 py-1 text-sm'>
          {tooltipText}
        </span>
      )}
    </button>
  ),
);

IconButton.displayName = 'IconButton';

export default IconButton;
