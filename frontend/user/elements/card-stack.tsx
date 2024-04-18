'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

let interval: any;

type Card = {
  content: React.ReactNode;
  designation: string;
  id: number;
  name: string;
};

export function CardStack({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards];

        newArray.unshift(newArray.pop()!);

        return newArray;
      });
    }, 5000);
  };

  return (
    <div className='relative size-72 p-4 md:h-60 md:w-96'>
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
            }}
          className='absolute flex size-60 flex-col justify-between rounded-3xl border border-white/[0.1] bg-dark-600 p-4 shadow-xl shadow-white/[0.05] md:h-60 md:w-96'
          style={{
              transformOrigin: 'top center',
            }}
        >
          <div className='font-normal text-neutral-700 dark:text-neutral-200'>
            {card.content}
          </div>
          <div>
            <p className='font-medium text-neutral-500 dark:text-white'>
              {card.name}
            </p>
            <p className='font-normal text-neutral-400 dark:text-neutral-200'>
              {card.designation}
            </p>
          </div>
        </motion.div>
        ))}
    </div>
  );
}
