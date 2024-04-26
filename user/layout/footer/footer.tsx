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
              <li className='transition-all duration-200 ease-in   hover:text-neutral-100 hover:underline hover:decoration-2  hover:underline-offset-4'>
                <Link key={href} className={cn(idx === NAVLINKS.length - 1 ? ' ' : 'border-r-2 pr-7  border-solid text-neutral-200 border-gray-600', 'px-4 text-gradient font-semibold')} href={href}>{title}</Link>
              </li>
            ))
          }
        </ul>
      </nav>

      <p className='text-slate-500'>All rights reserved • 2023</p>
    </footer>
  );
}
