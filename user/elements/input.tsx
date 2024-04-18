// Input component extends from shadcnui - https://ui.shadcn.com/docs/components/input

'use client';

import * as React from 'react';
import { cn } from '@/utils/cn';
import { useMotionTemplate, useMotionValue, motion } from 'framer-motion';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const radius = 100; // change this to increase the rdaius of the hover effect
    const [visible, setVisible] = React.useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ clientX, clientY, currentTarget }: any) {
      const { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    return (
      <motion.div
        className='group/input rounded-lg p-[2px] transition duration-300'
        style={{
          background: useMotionTemplate`
        radial-gradient(
          ${visible ? `${radius}px` : '0px'} circle at ${mouseX}px ${mouseY}px,
          var(--blue-500),
          transparent 80%
        )
      `,
        }}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onMouseMove={handleMouseMove}
      >
        <input
          ref={ref}
          className={cn(
            `flex h-10 w-full border-none bg-dark-600/20 text-white shadow-input rounded-2xl px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 placeholder-text-neutral-600 placeholder:font-medium font-medium
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:bg-dark-400/20 dark:focus-visible:bg-dark-400/20
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400
           `,
            className
          )}
          type={type}
          {...props}
        />
      </motion.div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
