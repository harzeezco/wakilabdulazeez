'use client';

import {
  MotionValue,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const products = [
  {
    title: 'Pulse',
    link: 'https://gomoonbeam.com',
    thumbnail:
      'pulse.webp',
  },
  {
    title: 'Pixelpro',
    link: 'https://cursor.so',
    thumbnail:
      'pixelpro.webp',
  },
    {
    title: 'Foodie Foods',
    link: 'https://editorially.org',
    thumbnail:
      'foodie.webp',
  },
  {
    title: 'Tsr Academics',
    link: 'https://userogue.com',
    thumbnail:
      'tsr.webp',
  },
  {
    title: 'Portfolio',
    link: 'https://app.pixelperfect.quest',
    thumbnail:
      'portfolio.webp',
  },
  {
    title: 'Gericht',
    link: 'https://ui.aceternity.com',
    thumbnail:
      'gritcht.webp',
  },
  {
    title: 'Sparkr Agency',
    link: 'https://editrix.ai',
    thumbnail:
      'sparkr.webp',
  },
  {
    title: 'Redact',
    link: 'https://algochurn.com',
    thumbnail:
      'redact.webp',
  },

  {
    title: 'Softsas',
    link: 'https://tailwindmasterkit.com',
    thumbnail:
      'sofsas.webp',
  }
];

export function Header() {
  return (
    <div className='mt-10 flex h-dvh flex-col items-center justify-center px-4'>
      <p className='relative z-[9999] mx-auto max-w-[800px] text-balance text-center text-xl font-medium md:text-3xl dark:text-neutral-200'>
        Hey,
        <span className='ml-1 inline-block animate-waving-hand'>
          👋
        </span>{' '}
        I’m Wakil -   A Web Developer (React.js & Next.js & Node.js) with a focus on
        creating (and occasionally designing) exceptional digital
        experiences that are fast, accessible, visually appealing, and
        responsive.
      </p>
      <div className='mt-12' />
    </div>
  );
}

export function ProductCard({
  product,
  translate,
}: {
  product: {
    link: string;
    thumbnail: string;
    title: string;
  };
  translate: MotionValue<number>;
}) {
  return (
    <motion.div
      key={product.title}
      className='group/product relative h-96 w-[30rem] shrink-0'
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
    >
      <Link
        className='pointer-events-auto block group-hover/product:shadow-2xl'
        href={product.link}
      >
        <Image
          alt={product.title}
          className='absolute inset-0 size-full object-left-top'
          height='600'
          src={`/images/projects/${product.thumbnail}`}
          width='600'
        />
      </Link>
      <div className='pointer-events-none absolute inset-0 size-full bg-black opacity-0 group-hover/product:opacity-80' />
      <h2 className='absolute bottom-4 left-4 text-white opacity-0 group-hover/product:opacity-100'>
        {product.title}
      </h2>
    </motion.div>
  );
}

export function HeroParallax({
  products,
}: {
  products: {
    link: string;
    thumbnail: string;
    title: string;
  }[];
}) {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 9);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig,
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig,
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig,
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig,
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig,
  );

  return (
    <div
      ref={ref}
      className='relative flex flex-col self-auto overflow-hidden antialiased [perspective:1000px] [transform-style:preserve-3d]'
    >
      <Header />
      <motion.div
        className='max-lg:hidden'
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className='mb-20 flex flex-row-reverse space-x-20 space-x-reverse'>
          {firstRow.map((product) => (
            <ProductCard
              key={product.title}
              product={product}
              translate={translateX}
            />
          ))}
        </motion.div>
        <motion.div className='mb-20 flex flex-row space-x-20 '>
          {secondRow.map((product) => (
            <ProductCard
              key={product.title}
              product={product}
              translate={translateXReverse}
            />
          ))}
        </motion.div>
        <motion.div className='flex flex-row-reverse space-x-20 space-x-reverse'>
          {secondRow.map((product) => (
            <ProductCard
              key={product.title}
              product={product}
              translate={translateX}
            />
          ))}
        </motion.div>
      </motion.div>

      <div className='absolute inset-x-0 bottom-0 -z-10 w-full'>
        <Image
          alt='header-blur'
          className='w-full opacity-45'
          height={610}
          src='/images/grid.png'
          width={1200}
        />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <div>
      <HeroParallax products={products} />
      <div className='relative z-50'>

        <div className='absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm' />
        <div className='absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent' />
        <div className='absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm' />
        <div className='absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent' />

        <div className='absolute inset-0 size-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]' />
      </div>
    </div>
  );
}
