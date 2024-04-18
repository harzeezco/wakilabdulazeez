/* eslint-disable react/button-has-type */
import { cn } from '@/utils/cn';
import React, { ReactNode } from 'react';

const Variants = {
 primary: ''
};

const sizes = {
  sm: 'px-7 py-3 rounded-[100px]',
  md: 'px-7 py-3 font-medium w-fit',
  lg: 'px-16 py-2 font-medium rounded-[100px]',
  full: 'w-full py-3 font-medium',
  slate: 'rounded-[10px] px-10 py-2 font-medium transition-all',
};

type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string | ReactNode;
  className?: string;
  size?: keyof typeof sizes;
  type?: string;
  variant?: keyof typeof Variants;
};

export function Button({
  children = null,
  className = '',
  size,
  type = 'button',
  variant = 'primary',
  ...otherProps
}: ButtonType) {
  return (
    <button
      className={cn(
        'disabled:opacity-70 transition-all duration-500 ease-out disabled:cursor-not-allowed focus:outline-none',
        Variants[variant],
        sizes[size as keyof typeof sizes],
        className,
      )}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
}
