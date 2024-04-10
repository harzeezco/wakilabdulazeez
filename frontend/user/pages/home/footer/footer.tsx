import Link from 'next/link';

const NAVLINKS = [
      {
        title: 'Home',
        href: '/devops',
      },
      {
        title: 'About',
        href: '/cloud-computing',
  },
 {
        title: 'Projects',
        href: '/devops',
      },
      {
        title: 'Contact',
        href: '/cloud-computing',
      },
];

export function Footer() {
  return (
    <footer className='mx-auto mt-10 pb-28 text-center'>
      <h1 className='text-gradient text-8xl font-bold uppercase'>Wakil Abdul Azeez</h1>

      <nav>
        <ul>
          {
            NAVLINKS.map(({ href, title }) => (
              <Link key={href} className='border-r border-solid border-slate-200' href={href}>{title}</Link>
      ))
          }
        </ul>
      </nav>

      <p>All rights reserved • 2023</p>
    </footer>
  );
}
