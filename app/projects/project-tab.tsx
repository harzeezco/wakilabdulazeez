import { Button } from '@/user/elements/button';
import { HoverBorderGradient } from '@/user/elements/moving-button';
import { Tabs } from '@/user/elements/tabs';
import Image from 'next/image';
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
        <div className='relative overflow-hidden rounded-2xl border border-solid border-dark-400/20 bg-[#14142B] font-bold text-white lg:p-10'>
          <HtmlTab />
        </div>
      ),
    },
  ];

  return (
    <div className='relative mx-auto my-20 flex w-full max-w-5xl flex-col items-center justify-center [perspective:1000px] max-sm:h-[1850px] max-sm:py-7  sm:h-[2100px] lg:h-[1300px]'>
      <Tabs tabs={tabs} />
    </div>
  );
}

export const CLIENTPROJECTS = [
  {
    name: 'PixelPro',
    description:
      'AI platform for removing image background with high quality and customization. The images can also be download in HD quality and can be used in any application. Images can also be downloaded in different format e.g jpg, png, jpeg.',
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
      'A SaSS platform made for developers who want to improve User Experience of their applications. It also helps developers to build and maintain their applications faster by providing a well tested and use templates.',
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
      'A Educational platform for learning tech skills e.g devops, cloud computing, and more. It also has some interesting features like admin panel, live chat, and many more.',
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
      'Jest',
    ],
  },
];

export const NEXTJSPROJECTS = [
  {
    name: 'Portfolio',
    description:
      'This is my portfolio. A website I build and design for myself using the latest technologies and frameworks. This was to showcase my skills and projects.',
    url: 'https://wakilabdulazeez.vercel.app/',
    githubUrl: 'https://github.com/harzeezco/wakilabdulazeez',
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
      'A SaSS platform made for developers who want to improve User Experience of their applications. It also helps developers to build and maintain their applications faster by providing a well tested and use templates.',
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
      'A Educational platform for learning tech skills e.g devops, cloud computing, and more. It also has some interesting features like admin panel, live chat, and many more.',
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
      'Jest',
    ],
  },
];

export const REACTPROJECTS = [
  {
    name: 'Redact',
    description:
      'A Landing page build to learn how React works and grasp the underlying work-force of React. Learn a ton of skills like state management, routing, and code splitting, Streaming with Suspense, and much more.',
    url: 'https://redact-tour.vercel.app/',
    githubUrl: 'https://github.com/harzeezco/Redact-Landing-page',
    previewImage: 'redact.png',
    technologies: [
      'React',
      'Typescript',
      'TailwindCSS',
      'ShadCN',
    ],
  },
  {
    name: 'Sparkr Agency',
    description:
      'This platform is build for Sparkr Digital Agency to showcase their services using 3d, framer-motion animations and more.',
    url: 'https://sparkr-digitals.vercel.app/',
    githubUrl: 'https://github.com/harzeezco/sparkr-digital',
    previewImage: 'sparkr.png',
    technologies: [
      'React',
      'Typescript',
      'Express.js',
      'MongoDB',
      'TailwindCSS',
      'framer motion',
      'Threejs',
      'Gsap'
    ],
  },
  {
    name: 'Quiz Grad',
    description:
      'A platform for accessing real-time open banking and energy data to help you grow your business, backed with scalable back-end infrastructure.',
    url: 'https://quizgraad.vercel.app/',
    githubUrl: 'https://github.com/harzeezco/quizgraad',
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
      'A Landing Page for a food made stuff. ',
    url: 'https://geritch-foods.vercel.app/',
    githubUrl: 'https://github.com/harzeezco/Geritch-Foods',
    previewImage: 'geritch.png',
    technologies: [
      'Html',
      'CSS',
    ],
  },
  {
    name: 'Foodie',
    description:
      'A Landing Page for a foods business which is based on HtMl.',
    url: 'https://foodie-foods.vercel.app/',
    githubUrl: 'https://github.com/harzeezco/foodie',
    previewImage: 'foodie.png',
    technologies: [
     'Html',
      'CSS',
    ],
  },
  {
    name: 'Softsas',
    description:
      'A SaSS landing page for a software solutions company.',
    url: 'https://softsas.vercel.app/',
    githubUrl: 'https://github.com/harzeezco/Softsas',
    previewImage: 'softsas.png',
    technologies: [
       'Html',
      'CSS',
    ],
  },
    {
    name: 'Softsas',
    description:
      'A SaSS landing page for a software solutions company.',
    url: 'https://sollutry.vercel.app/',
    githubUrl: 'https://github.com/harzeezco/sollutry',
    previewImage: 'softsas.png',
    technologies: [
       'Html',
      'CSS',
    ],
  },
];

export function ClientTab() {
  return (
    <div className='flex flex-col gap-y-10 max-lg:mt-10 md:gap-y-16'>
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
    <div className='flex flex-col gap-y-10 max-lg:mt-10 md:gap-y-16'>
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
    <div className='flex flex-col gap-y-10 max-lg:mt-10 md:gap-y-16'>
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
    <div className='flex flex-col gap-y-10 max-lg:mt-10 md:gap-y-16'>
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
  githubUrl,
  layoutType = 'default',
  name,
  previewImage,
  technologies,
  url,
}: any) {
  return (
    <div className='mx-auto flex w-full max-w-7xl flex-col items-center gap-y-10 lg:flex-row'>
      <div
        className={`flex items-center px-8 max-md:rounded-t-xl ${
          layoutType === 'default'
            ? 'lg:rounded-l-xl'
            : 'lg:order-last lg:rounded-r-xl'
        }`}
      >
        <Link href={url} rel='noopener noreferrer' target='_blank'>
          <Image
            alt={`${name} preview`}
            className='scale-110 rounded-xl bg-transparent shadow-lg transition-transform duration-500 lg:hover:scale-[1.14]'
            height={700}
            src={`/images/${previewImage}`}
            width={500}
          />
        </Link>
      </div>

      <div
        className={`flex flex-col gap-4 max-sm:px-6 sm:w-4/5 lg:w-1/2 lg:p-6 ${
          layoutType === 'default' ? '' : 'lg:order-first'
        }`}
      >
        <h2 className='font-semibold'>{name}</h2>
        <p className='text-sm'>{description}</p>
        <div className='flex flex-wrap gap-2'>
          {technologies?.map((technology: string, index: number) => (
            <div
              key={index}
              className='flex items-center justify-center rounded-xl bg-dark-400/10 px-5 py-1 text-sm'
            >
              {technology}
            </div>
          ))}
        </div>
        <div className='flex items-center gap-4'>
          <Link
            className='self-start rounded-lg p-1.5 [&_svg]:stroke-gray-500'
            href={url}
            rel='noopener noreferrer'
            target='_blank'
          >
            <HoverBorderGradient
              as='button'
              className='flex items-center space-x-2 px-5 py-3 text-xs uppercase'
              containerClassName='rounded-full'
            >
              View Site
            </HoverBorderGradient>
          </Link>

          {githubUrl && (
            <Link href={githubUrl}>
              <Button className='rounded-3xl bg-dark-400 px-5 py-4 text-xs uppercase text-white transition-all duration-200 hover:bg-dark-400/40 active:bg-dark-400/40'>View Code</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
