'use client';

import React, { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

type Direction = 'TOP' | 'LEFT' | 'BOTTOM' | 'RIGHT';

export function HoverBorderGradient({
  as: Tag = 'button',
  children,
  className,
  clockwise = true,
  containerClassName,
  duration = 1,
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType;
    className?: string;
    clockwise?: boolean;
    containerClassName?: string;
    duration?: number;
  } & React.HTMLAttributes<HTMLElement>
>) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>('TOP');

  const rotateDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ['TOP', 'LEFT', 'BOTTOM', 'RIGHT'];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;

    return directions[nextIndex];
  };

  const movingMap: Record<Direction, string> = {
    TOP: 'radial-gradient(20.7% 50% at 50% 0%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)',
    LEFT: 'radial-gradient(16.6% 43.1% at 0% 50%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)',
    BOTTOM:
      'radial-gradient(20.7% 50% at 50% 100%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)',
    RIGHT:
      'radial-gradient(16.2% 41.199999999999996% at 100% 50%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)',
  };

  const highlight =
    'radial-gradient(75% 181.15942028985506% at 50% 50%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)';

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);

      return () => clearInterval(interval);
    }
  }, [hovered]);

  return (
    <Tag
      className={cn(
        'relative flex rounded-full border  content-center bg-black/20 hover:bg-black/10 transition duration-500 dark:bg-white/20 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit',
        containerClassName
      )}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >
      <div
        className={cn(
          'w-auto text-[#191930] z-10 bg-black px-12 text-sm py-4 rounded-[inherit] font-semibold',
          className
        )}
        style={{ backgroundImage: 'linear-gradient(#dce6ff, #848faa)' }}
      >
        {children}
      </div>
      <motion.div
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        className={cn(
          'flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]'
        )}
        initial={{ background: movingMap[direction] }}
        style={{
          filter: 'blur(2px)',
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
        transition={{ ease: 'linear', duration: duration ?? 1 }}
      />
      <div className='absolute inset-[2px] flex-none rounded-[100px] bg-black' />
    </Tag>
  );
}
