import { Tabs } from '@/user/elements/tabs';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

export function ProjectTab() {
  const tabs = [
    {
      title: 'Product',
      value: 'product',
      content: (
        <div className='relative overflow-hidden rounded-2xl border border-solid border-dark-400/20 bg-[#14142B] font-bold  text-white lg:p-10'>
          <ClientTab />
        </div>
      ),
    },
    {
      title: 'Nextjs',
      value: 'nextjs',
      content: (
        <div className='relative overflow-hidden rounded-2xl border border-solid border-dark-400/20 bg-[#14142B] font-bold  text-white lg:p-10'>
          <NextJsTab />
        </div>
      ),
    },
    {
      title: 'Reactjs',
      value: 'reactjs',
      content: (
        <div className='relative overflow-hidden rounded-2xl border border-solid border-dark-400/20 bg-[#14142B] font-bold  text-white lg:p-10'>
          <ReactTab />
        </div>
      ),
    },
    {
      title: 'Html',
      value: 'html',
      content: (
        <div className='relative overflow-hidden rounded-2xl border border-solid border-dark-400/20 bg-[#14142B] font-bold  text-white lg:p-10'>
          <HtmlTab />
        </div>
      ),
    },
  ];

  return (
    <div className='relative mx-auto my-20 flex h-[1300px] w-full max-w-5xl flex-col items-start justify-start [perspective:1000px]  max-sm:h-[1800px] max-sm:py-7'>
      <Tabs tabs={tabs} />
    </div>
  );
}

export const CLIENTPROJECTS = [
  {
    name: 'PixelPro',
    description:
      'A platform for comparing and finding affordable flights, as well as booking and purchasing tickets safely and easily in a few simple clicks.',
    url: 'https://pixelproai.vercel.app/',
    previewImage: 'pixelpro.png',
    technologies: [
      'React',
      'Typescript',
      'Next.js',
      'Express.js',
      'MongoDB',
      'TailwindCSS',
      'Zustand',
    ],
  },
  {
    name: 'Pulse',
    description:
      'A platform for accessing real-time open banking and energy data to help you grow your business, backed with scalable back-end infrastructure.',
    url: 'https://pulse-rose.vercel.app/',
    previewImage: 'pulse.png',
    technologies: [
      'React',
      'Next.js',
      'Typescript',
      'TailwindCSS',
      'ShadCN',
      'Express.js',
      'MongoDB',
    ],
  },
  {
    name: 'Tsr Academics',
    description:
      'A platform for renting a flat or room in Poland. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.',
    url: 'https://tsr-academy.vercel.app/',
    previewImage: 'tsr.png',
    technologies: [
      'React',
      'Next.js',
      'Typescript',
      'TailwindCSS',
      'React Query',
      'Zustand',
      'MongoDB',
      'React Testing Library',
      'Jest'
    ],
  },
];

export const NEXTJSPROJECTS = [
  {
    name: 'Portfolio',
    description:
      'A platform for comparing and finding affordable flights, as well as booking and purchasing tickets safely and easily in a few simple clicks.',
    url: 'https://pixelproai.vercel.app/',
    previewImage: 'my-portfolio.png',
    technologies: [
      'React',
      'Typescript',
      'Next.js',
      'Express.js',
      'MongoDB',
      'TailwindCSS',
      'Zustand',
    ],
  },
  {
    name: 'Pulse',
    description:
      'A platform for accessing real-time open banking and energy data to help you grow your business, backed with scalable back-end infrastructure.',
    url: 'https://pulse-rose.vercel.app/',
    previewImage: 'pulse.png',
    technologies: [
      'React',
      'Next.js',
      'Typescript',
      'TailwindCSS',
      'ShadCN',
      'Express.js',
      'MongoDB',
    ],
  },
  {
    name: 'Tsr Academics',
    description:
      'A platform for renting a flat or room in Poland. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.',
    url: 'https://tsr-academy.vercel.app/',
    previewImage: 'tsr.png',
    technologies: [
      'React',
      'Next.js',
      'Typescript',
      'TailwindCSS',
      'React Query',
      'Zustand',
      'MongoDB',
      'React Testing Library',
      'Jest'
    ],
  },
];

export const REACTPROJECTS = [
   {
    name: 'Redact',
    description:
      'A platform for accessing real-time open banking and energy data to help you grow your business, backed with scalable back-end infrastructure.',
    url: 'https://redact-tour.vercel.app/',
    previewImage: 'redact.png',
    technologies: [
      'React',
      'Next.js',
      'Typescript',
      'TailwindCSS',
      'ShadCN',
      'Express.js',
      'MongoDB',
    ],
  },
  {
    name: 'Sparkr Agency',
    description:
      'A platform for comparing and finding affordable flights, as well as booking and purchasing tickets safely and easily in a few simple clicks.',
    url: 'https://sparkr-digitals.vercel.app/',
    previewImage: 'sparkr.png',
    technologies: [
      'React',
      'Typescript',
      'Express.js',
      'MongoDB',
      'TailwindCSS',
      'framer motion'
    ],
  },
  {
    name: 'Redact',
    description:
      'A platform for accessing real-time open banking and energy data to help you grow your business, backed with scalable back-end infrastructure.',
    url: 'https://pulse-rose.vercel.app/',
    previewImage: 'redact.png',
    technologies: [
      'React',
      'Next.js',
      'Typescript',
      'TailwindCSS',
      'ShadCN',
      'Express.js',
      'MongoDB',
    ],
  },
];

export const HTMLPROJECTS = [
   {
    name: 'Geritch Foods',
    description:
      'A platform for accessing real-time open banking and energy data to help you grow your business, backed with scalable back-end infrastructure.',
    url: 'https://geritch-foods.vercel.app/',
    previewImage: 'geritch.png',
    technologies: [
      'React',
      'Next.js',
      'Typescript',
      'TailwindCSS',
      'ShadCN',
      'Express.js',
      'MongoDB',
    ],
  },
  {
    name: 'Foodie',
    description:
      'A platform for comparing and finding affordable flights, as well as booking and purchasing tickets safely and easily in a few simple clicks.',
    url: 'https://foodie-foods.vercel.app/',
    previewImage: 'foodie.png',
    technologies: [
      'React',
      'Typescript',
      'Express.js',
      'MongoDB',
      'TailwindCSS',
      'framer motion'
    ],
  },
  {
    name: 'Softsas',
    description:
      'A platform for accessing real-time open banking and energy data to help you grow your business, backed with scalable back-end infrastructure.',
    url: 'https://softsas.vercel.app/',
    previewImage: 'softsas.png',
    technologies: [
      'React',
      'Next.js',
      'Typescript',
      'TailwindCSS',
      'ShadCN',
      'Express.js',
      'MongoDB',
    ],
  },
];

export function ClientTab() {
  return (
    <div className='flex flex-col gap-y-10 max-sm:mt-10 md:gap-y-16'>
      {CLIENTPROJECTS?.map((project, index) => (
        <ProjectDetails
          key={index}
          {...project}
          layoutType={index % 2 === 0 ? 'default' : 'reverse'}
        />
      ))}
    </div>
  );
}

export function NextJsTab() {
  return (
    <div className='flex flex-col gap-y-10 max-sm:mt-10 md:gap-y-16'>
      {NEXTJSPROJECTS?.map((project, index) => (
        <ProjectDetails
          key={index}
          {...project}
          layoutType={index % 2 === 0 ? 'default' : 'reverse'}
        />
      ))}
    </div>
  );
}

export function ReactTab() {
  return (
    <div className='flex flex-col gap-y-10 max-sm:mt-10 md:gap-y-16'>
      {REACTPROJECTS?.map((project, index) => (
        <ProjectDetails
          key={index}
          {...project}
          layoutType={index % 2 === 0 ? 'default' : 'reverse'}
        />
      ))}
    </div>
  );
}

export function HtmlTab() {
  return (
    <div className='flex flex-col gap-y-10 max-sm:mt-10 md:gap-y-16'>
      {HTMLPROJECTS?.map((project, index) => (
        <ProjectDetails
          key={index}
          {...project}
          layoutType={index % 2 === 0 ? 'default' : 'reverse'}
        />
      ))}
    </div>
  );
}

function ProjectDetails({
  description,
  layoutType = 'default',
  name,
  previewImage,
  technologies,
  url,
}) {
  return (
    <div className='mx-auto flex w-full max-w-7xl flex-col md:flex-row'>
      <div
        className={
          `flex items-center px-8 max-md:rounded-t-xl   ${
          layoutType === 'default'
            ? 'md:rounded-l-xl'
            : 'md:order-last md:rounded-r-xl'}`
        }
      >
        <Link href={url} rel='noopener noreferrer' target='_blank'>
          <Image
            alt={`${name} preview`}
            className='scale-110 rounded-xl bg-transparent shadow-lg transition-transform duration-500 md:hover:scale-[1.14]'
            height={700}
            src={`/images/${previewImage}`}
            width={500}
          />
        </Link>
      </div>

      <div
        className={
          `flex flex-col gap-4 p-8 md:w-1/2 lg:p-6 ${
          layoutType === 'default' ? '' : 'md:order-first'}`
        }
      >
        <h2 className='font-semibold'>{name}</h2>
        <p className='text-sm'>{description}</p>
        <div className='flex flex-wrap gap-2'>
          {technologies?.map((technology, index) => (
            <div
              key={index}
              className='flex items-center justify-center rounded-xl bg-dark-400/10 px-5 py-1 text-sm'
            >
              {technology}
            </div>
          ))}
        </div>
        <Link
          className='self-start rounded-lg p-1.5 [&_svg]:stroke-gray-500'
          href={url}
          rel='noopener noreferrer'
          target='_blank'
        >
          <ExternalLink />
        </Link>
      </div>
    </div>
  );
}
