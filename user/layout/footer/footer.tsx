import { cn } from '@/utils/cn';
import Link from 'next/link';

const NAVLINKS = [
      {
        title: 'Home',
        href: '/',
      },
      {
        title: 'About',
        href: '/about',
  },
 {
        title: 'Projects',
        href: '/projects',
      },
      {
        title: 'Contact',
        href: '/contact',
      },
];

export function Footer() {
  return (
    <footer className='mx-auto mt-10 pb-28 text-center'>
      <h1 className='text-gradient text-3xl font-bold uppercase sm:text-5xl lg:text-8xl'>Wakil Abdul Azeez</h1>

      <nav>
        <ul className='mb-3 mt-7 flex items-center justify-center md:gap-4'>
          {
            NAVLINKS.map(({ href, title }, idx) => (
              <Link key={href} className={cn(idx === NAVLINKS.length - 1 ? ' ' : 'border-r-2 pr-4 border-solid border-gray-600', 'hover:bg-[#363636] px-4 active:bg-[#3a3a3a] transition-all text-gradient font-semibold')} href={href}>{title}</Link>
            ))
          }
        </ul>
      </nav>

      <p className='text-slate-500'>All rights reserved • 2023</p>
    </footer>
  );
}
