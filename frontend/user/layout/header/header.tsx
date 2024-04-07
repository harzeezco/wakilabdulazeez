'use client';

import { FaHamburger } from 'react-icons/fa';

import Image from 'next/image';
import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/utils/cn';
import { HoverBorderGradient } from '@/user/elements/moving-button';
import useLenisScroll from '@/user/hooks/use-lenis-scroll';
import { RxAvatar } from 'react-icons/rx';
import { FaRegFolderOpen, FaPhoneVolume } from 'react-icons/fa6';
import { IoHome } from 'react-icons/io5';

const menu = {
    open: {
        width: '350px',
        height: '350px',
        top: '40px',
        right: '-25px',
        transition: { duration: 0.75, type: 'tween', ease: [0.76, 0, 0.24, 1] }
    },
    closed: {
        width: '100px',
        height: '0px',
        top: '40px',
        right: '0px',
        transition: { duration: 0.75, delay: 0.35, type: 'tween', ease: [0.76, 0, 0.24, 1] }
    }
};

export const links = [
    {
        title: 'Projects',
        href: '/'
    },
    {
        title: 'Agency',
        href: '/'
    },
    {
        title: 'Expertise',
        href: '/'
    },
    {
        title: 'Careers',
        href: '/'
    },
];

export const perspective = {
    initial: {
        opacity: 0,
        rotateX: 90,
        translateY: 80,
        translateX: -20,
    },
    enter: (i: number) => ({
        opacity: 1,
        rotateX: 0,
        translateY: 0,
        translateX: 0,
        transition: {
            duration: 0.65,
            delay: 0.5 + (i * 0.1),
            ease: [0.215, 0.61, 0.355, 1],
            opacity: { duration: 0.35 }
        }
    }),
    exit: {
        opacity: 0,
        transition: { duration: 0.5, type: 'linear', ease: [0.76, 0, 0.24, 1] }
    }
};

export type CardType = {
  href: string;
  icon: React.ReactNode;
  title: string;
};

const Courses: CardType[] = [
      {
          icon: <IoHome color='#191930' size={25} />,
        title: 'Home',
        href: '/devops',
      },
      {
        icon: <RxAvatar color='#191930' size={25} />,
        title: 'About',
        href: '/cloud-computing',
  },
 {
        icon: <FaRegFolderOpen color='#191930' size={25} />,
        title: 'Projects',
        href: '/devops',
      },
      {
        icon: <FaPhoneVolume color='#191930' size={25} />,
        title: 'Contact',
        href: '/cloud-computing',
      },
];

function Card({ href, icon, idx, title }: CardType & { idx: number }) {
  return (
    <motion.div
      animate='enter'
      custom={idx}
      exit='exit'
      initial='initial'
      variants={perspective}
    >
      <Link className='shadow-in flex h-[120px] w-[150px] flex-col items-center justify-center gap-3 rounded-2xl border-solid bg-[#171717] p-4 transition-all duration-200 hover:bg-black/45' href={href}>
        <div
          className='size-10 rounded-full p-2'
          style={{ backgroundImage: 'linear-gradient(#dce6ff, #848faa)' }}
        >
          {icon}
        </div>
        <h4
          className='text-sm font-semibold uppercase'
          title={title}
        >
          {title}
        </h4>

      </Link>
    </motion.div>
  );
}

export function Nav() {
  return (
    <div className='mx-auto mt-16 grid grid-cols-2 gap-4 p-4'>
      {Courses.map(({ href, icon, title }, idx) => (
        <Card key={href} href={href} icon={icon} idx={idx} title={title} />
        ))}
    </div>
  );
}

export function Header() {
    useLenisScroll();
  const [isActive, setIsActive] = React.useState(false);

  return (
    <header>
      <div>
        <motion.div
          animate={isActive ? 'open' : 'closed'}
          className='shadow-out fixed left-1/2 top-20 z-50 flex -translate-x-1/2  rounded-2xl bg-black'
          initial='closed'
          variants={menu}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
        >
          <AnimatePresence>
            {isActive && <Nav />}
          </AnimatePresence>
        </motion.div>
      </div>
      <div
        className='group fixed left-1/2 top-10 z-50 flex -translate-x-1/2 cursor-pointer items-center gap-2'
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
      >
        <Image
          alt='wakil'
          height={60}
          src='/images/Me.png'
          width={60}
        />
        <h1 className='pr-1 text-lg font-semibold'>Wakil</h1>

        <span className={cn('pointer-events-none', isActive && 'invisible opacity-0 transition-all')}>
          <FaHamburger size={20} />
        </span>
      </div>

      <Link className='fixed bottom-5 left-1/2 z-[9999] -translate-x-1/2 ' href='/contact'>

        <HoverBorderGradient
          as='button'
          className='flex items-center space-x-2 bg-white text-black dark:bg-black dark:text-white'
          containerClassName='rounded-full'
        >
          Say Hello
        </HoverBorderGradient>
      </Link>
    </header>

  );
}
