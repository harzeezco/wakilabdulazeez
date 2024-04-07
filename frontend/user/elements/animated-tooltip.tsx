'use client';

import React, { useState } from 'react';
import {
  motion,
  useTransform,
  useMotionValue,
  useSpring,
} from 'framer-motion';

export function AnimatedTooltip({
  items,
}: {
  items: {
    id: number;
    image: React.ReactNode;
    name: string;
  }[];
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;

    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <>
      {items.map((item) => (
        <div
          key={item.name}
          className='group  relative -mr-4'
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {hoveredIndex === item.id && (
            <motion.div
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: 'spring',
                  stiffness: 260,
                  damping: 10,
                },
              }}
              className='absolute -left-1/2 bottom-16 z-50 flex translate-x-1/2  flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl'
              exit={{ opacity: 0, y: 20, scale: 0.6 }}
              initial={{ opacity: 0, y: 20, scale: 0.6 }}
              style={{
                translateX,
                rotate,
                whiteSpace: 'nowrap',
              }}
            >
              <div className='absolute inset-x-10 -bottom-px z-30 h-px w-1/5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent ' />
              <div className='absolute -bottom-px left-10 z-30 h-px w-2/5 bg-gradient-to-r from-transparent via-sky-500 to-transparent ' />
              <div className='relative z-30 text-base font-bold text-white'>
                {item.name}
              </div>
            </motion.div>
          )}
          <span
            className='relative !m-0 size-14 rounded-full border-2 border-white object-cover object-top !p-0 text-white transition  duration-500 group-hover:z-30 group-hover:scale-105'
            onMouseMove={handleMouseMove}
          >
            {item.image}
          </span>
        </div>
      ))}
    </>
  );
}
