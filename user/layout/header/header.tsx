'use client';

import * as React from 'react';
import { Button } from '@/user/elements/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from '@/user/elements/drawer';
import { HoverBorderGradient } from '@/user/elements/moving-button';
import useLenisScroll from '@/user/hooks/use-lenis-scroll';
import { socialMediaLinks } from '@/user/pages/home/main';
import { cn } from '@/utils/cn';
import { AnimatePresence, motion } from 'framer-motion';
import { AlignRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHamburger } from 'react-icons/fa';
import {
  FaGithub,
  FaPhoneVolume,
  FaRegFolderOpen,
  FaSquareXTwitter,
} from 'react-icons/fa6';
import { IoHome } from 'react-icons/io5';
import { RxAvatar } from 'react-icons/rx';

const menu = {
  open: {
    width: '510px',
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
  externalLink: boolean;
  href: string;
  icon: React.ReactNode;
  title: string;
};

const NavLinks = [
  {
    icon: <IoHome color='#191930' size={25} />,
    title: 'Home',
    href: '/',
    externalLink: false,
    isMobile: false,
  },
  {
    icon: <RxAvatar color='#191930' size={25} />,
    title: 'About',
    href: '/about',
    externalLink: false,
    isMobile: false,
  },
  {
    icon: <FaRegFolderOpen color='#191930' size={25} />,
    title: 'Projects',
    href: '/projects',
    externalLink: false,
    isMobile: false,
  },
  {
    icon: <FaPhoneVolume color='#191930' size={25} />,
    title: 'Contact',
    href: '/contact',
    externalLink: false,
    isMobile: false,
  },
  {
    icon: <FaGithub color='#191930' size={25} />,
    href: 'https://github.com/harzeezco/',
    title: 'Github',
    externalLink: true,
    isMobile: true,
  },
  {
    icon: <FaSquareXTwitter color='#191930' size={25} />,
    href: 'https://twitter.com/Wkhayzed',
    title: 'Twitter',
    externalLink: true,
    isMobile: true,
  },
];

function Card({
  externalLink = false,
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
        className='flex h-[120px] w-[150px] flex-col items-center justify-center gap-3 rounded-2xl border border-solid border-dark-400/20 bg-dark-600 p-4 transition-all duration-200 hover:-translate-y-px hover:border-b-8 hover:bg-[#14142B]/20 active:translate-y-[2px] active:border-b-2 active:brightness-90'
        href={href}
        rel='noopener noreferrer'
        target={externalLink ? '_blank' : '_self'}
        title={title}
      >
        <div
          className='size-10 rounded-full p-2'
          style={{
            backgroundImage: 'linear-gradient(#dce6ff, #848faa)',
          }}
        >
          {icon}
        </div>
        <h4 className='text-sm font-semibold uppercase'>
          {title}
        </h4>
      </Link>
    </motion.div>
  );
}

export function Nav() {
  return (
    <div className='mx-auto mt-16 grid grid-cols-3 gap-4 p-4'>
      {NavLinks.map(({ externalLink, href, icon, title }, idx) => (
        <Card
          key={href}
          externalLink={externalLink}
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
  const pathname = usePathname();

  return (
    <Drawer>
      <DrawerTrigger asChild className='cursor-pointer'>
        {children}
      </DrawerTrigger>
      <DrawerContent>
        <div className='px-6'>
          <div className='flex flex-col gap-4'>
            {NavLinks.map(({ href, isMobile, title }, idx) => {
              const isActive = href === pathname;

              return (
                <div key={idx}>
                  {!isMobile && (
                    <Link key={href} href={href}>
                      <div
                        className={cn(
                          isActive
                            ? 'bg-dark-400 font-semibold'
                            : 'bg-transparent font-medium',
                          'text-lg transition-all p-4 py-3 duration-200 hover:bg-dark-400 active:bg-dark-400 w-full rounded-2xl',
                        )}
                      >
                        {title}
                      </div>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          <ul className='mb-11 mt-3 flex gap-3'>
            {socialMediaLinks.map(
              ({ brand, icon, id, label, url }, idx) => (
                <Link
                  key={url}
                  className={cn(
                    'border-dark-400/20 border flex size-[70px] flex-col items-center justify-center gap-3 rounded-[2vw] border-solid bg-dark-600 p-2 transition-all duration-200',
                    brand,
                  )}
                  href={url}
                  style={{
                    backgroundColor: idx === id ? brand : '',
                  }}
                  target='_blank'
                  title={label}
                >
                  {icon}
                </Link>
              ),
            )}
          </ul>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button>Close</Button>
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
        <div
          className={cn(
            isFixed
              ? 'fixed bottom-[120px] lg:bottom-[105px] left-1/2 z-[999999] -translate-x-1/2'
              : '',
          )}
        >
          <div className='flex items-center gap-3'>
            <div className='mouse mx-auto' />
            <p className='text-gradient'>SCROLL TO BEGIN</p>
          </div>
        </div>
      )}

      {pathname !== '/contact' && (
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
      )}

      <div className='fixed inset-x-0 top-5 z-[99999] flex w-full items-center justify-between px-4 lg:hidden'>
        <div className='flex cursor-pointer items-center gap-2 '>
          <Image
            alt='wakil'
            height={60}
            src='/images/Me.png'
            width={60}
          />
          <h1 className='text-lg font-semibold uppercase'>Wakil</h1>
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
