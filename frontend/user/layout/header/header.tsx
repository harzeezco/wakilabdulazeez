'use client';

import * as React from 'react';
import { HoverBorderGradient } from '@/user/elements/moving-button';
import useLenisScroll from '@/user/hooks/use-lenis-scroll';
import { cn } from '@/utils/cn';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaHamburger } from 'react-icons/fa';
import { FaPhoneVolume, FaRegFolderOpen } from 'react-icons/fa6';
import { IoHome } from 'react-icons/io5';
import { RxAvatar } from 'react-icons/rx';
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/user/elements/drawer';
import { Button } from '@/user/elements/button';
import { AlignRight, Minus, Plus } from 'lucide-react';
import { usePathname } from 'next/navigation';

const menu = {
  open: {
    width: '350px',
    height: '350px',
    top: '40px',
    opacity: 1,
    right: '-25px',
    transition: {
      duration: 0.75,
      type: 'tween',
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    width: '100px',
    opacity: 0,
    height: '0px',
    top: '40px',
    right: '0px',
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: 'tween',
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const links = [
  {
    title: 'Projects',
    href: '/',
  },
  {
    title: 'Agency',
    href: '/',
  },
  {
    title: 'Expertise',
    href: '/',
  },
  {
    title: 'Careers',
    href: '/',
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
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
      opacity: { duration: 0.35 },
    },
  }),
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      type: 'linear',
      ease: [0.76, 0, 0.24, 1],
    },
  },
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
    href: '/',
  },
  {
    icon: <RxAvatar color='#191930' size={25} />,
    title: 'About',
    href: '/about',
  },
  {
    icon: <FaRegFolderOpen color='#191930' size={25} />,
    title: 'Projects',
    href: '/projects',
  },
  {
    icon: <FaPhoneVolume color='#191930' size={25} />,
    title: 'Contact',
    href: '/contact',
  },
];

function Card({
  href,
  icon,
  idx,
  title,
}: CardType & { idx: number }) {
  return (
    <motion.div
      animate='enter'
      custom={idx}
      exit='exit'
      initial='initial'
      variants={perspective}
    >
      <Link
        className='flex h-[120px] w-[150px] flex-col items-center justify-center gap-3 rounded-2xl border border-solid border-dark-400/20 bg-dark-600 p-4 transition-all duration-200 hover:bg-[#14142B]/20'
        href={href}
      >
        <div
          className='size-10 rounded-full p-2'
          style={{
            backgroundImage: 'linear-gradient(#dce6ff, #848faa)',
          }}
        >
          {icon}
        </div>
        <h4 className='text-sm font-semibold uppercase' title={title}>
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
        <Card
          key={href}
          href={href}
          icon={icon}
          idx={idx}
          title={title}
        />
      ))}
    </div>
  );
}

export function DrawerBar({
  children,
}: {
  children: React.ReactNode;
}) {
  const [goal, setGoal] = React.useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <Drawer>
      <DrawerTrigger asChild className='cursor-pointer'>{children}</DrawerTrigger>
      <DrawerContent>
        <div className='mx-auto w-full max-w-sm'>
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>
              Set your daily activity goal.
            </DrawerDescription>
          </DrawerHeader>
          <div className='p-4 pb-0'>
            <div className='flex items-center justify-center space-x-2'>
              <Button
                className='size-8 shrink-0 rounded-full'
                disabled={goal <= 200}
                onClick={() => onClick(-10)}
              >
                <Minus className='size-4' />
                <span className='sr-only'>Decrease</span>
              </Button>
              <div className='flex-1 text-center'>
                <div className='text-7xl font-bold tracking-tighter'>
                  {goal}
                </div>
                <div className='text-[0.70rem] uppercase'>
                  Calories/day
                </div>
              </div>
              <Button
                className='size-8 shrink-0 rounded-full'
                disabled={goal >= 400}
                onClick={() => onClick(10)}
              >
                <Plus className='size-4' />
                <span className='sr-only'>Increase</span>
              </Button>
            </div>
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button>Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export function Header() {
  const pathname = usePathname();

  useLenisScroll();
  const [isActive, setIsActive] = React.useState(false);

  const [isFixed, setIsFixed] = React.useState(true);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;

        if (scrollPosition <= window.innerHeight - 400) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isFixed]);

  return (
    <motion.header
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
    >
      <div>
        <motion.div
          animate={isActive ? 'open' : 'closed'}
          className='fixed left-1/2 top-20 z-[99999] flex -translate-x-1/2 rounded-3xl border border-solid border-dark-400/20 bg-[#14142B] max-lg:hidden'
          initial='closed'
          variants={menu}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
        >
          <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
        </motion.div>
      </div>
      <div
        className='group fixed left-1/2 top-10 z-[999999] flex -translate-x-1/2 cursor-pointer items-center gap-2 max-lg:hidden'
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
      >
        <Image
          alt='wakil'
          height={60}
          src='/images/Me.png'
          width={60}
        />
        <h1 className='pr-1 text-lg font-semibold uppercase'>
          Wakil
        </h1>

        <span
          className={cn(
            'pointer-events-none',
            isActive && 'invisible opacity-0 transition-all',
          )}
        >
          <FaHamburger color='#FAFBFC' size={20} />
        </span>
      </div>

      {pathname === '/' && (
      <div className={cn(isFixed ? 'fixed bottom-[120px] lg:bottom-[105px] left-1/2 z-[999999] -translate-x-1/2' : '')}>
        <div className='flex items-center gap-3'>
          <div className='mouse mx-auto' />
          <p className='text-gradient'>SCROLL TO BEGIN</p>
        </div>
      </div>
)}

      <Link
        className='fixed bottom-5 left-1/2 z-[999999] -translate-x-1/2 '
        href='/contact'
      >
        <HoverBorderGradient
          as='button'
          className='flex items-center space-x-2 uppercase'
          containerClassName='rounded-full'
        >
          Say Hello
        </HoverBorderGradient>
      </Link>
      <div className='fixed inset-x-0 top-5 z-[99999] flex w-full items-center justify-between px-4 lg:hidden'>
        <div className='flex cursor-pointer items-center gap-2 '>
          <Image
            alt='wakil'
            height={60}
            src='/images/Me.png'
            width={60}
          />
          <h1 className='text-lg font-semibold uppercase'>
            Wakil
          </h1>
        </div>

        <div className='relative z-50 pr-3 lg:hidden'>
          <DrawerBar>
            <AlignRight size={35} />
          </DrawerBar>
        </div>
      </div>
    </motion.header>
  );
}
