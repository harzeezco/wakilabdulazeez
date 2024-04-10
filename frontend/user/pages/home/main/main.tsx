import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from '@/user/elements/3d-card';
import Link from 'next/link';
import { InfiniteMovingCards } from '@/user/elements/infinite-moving-cards';
import { FaLocationArrow, FaLinkedin, FaInstagram, FaSquareXTwitter, FaGithub } from 'react-icons/fa6';
import { cn } from '@/utils/cn';

const ABOUT = [
  {
    year: '25 jan',
    title: 'Started a new mobile design project.',
  },
    {
    year: '25 jan',
    title: 'Received a certification in advanced UX design techniques.',
  },
      {
    year: '25 jan',
    title: 'Completed a user research phase for an ongoing web design project.',
  },
        {
    year: '25 jan',
    title: 'Attended a workshop on the latest trends in UI animation.',
  },
        {
    year: '25 jan',
    title: 'Launched a redesigned website for a major client.',
  },
];

const socialMediaLinks = [
  {
    id: 1,
    icon: <FaLinkedin size={24} />,
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/',
    brand: '#0077B5'
  },
  {
    id: 2,
    icon: <FaInstagram size={24} />,
    label: 'Instagram',
    url: 'https://www.instagram.com/',
    brand: '#C13584'
  },
  {
    id: 3,
    icon: <FaSquareXTwitter size={24} />,
    label: 'Twitter',
    url: 'https://twitter.com/',
    brand: '#1DA1F2'
  },
  {
    id: 4,
    icon: <FaGithub size={24} />,
    label: 'GitHub',
    url: 'https://github.com/',
    brand: '#181717'
  }
];

export const TECHNOLOGIES = [
  {
    label: 'Javascript',
    logo: 'icon-javascript.svg',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Typescript',
    logo: 'icon-typescript.svg',
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'React',
    logo: 'icon-react.svg',
    url: 'https://react.dev/',
  },
  {
    label: 'Next.js',
    logo: 'icon-nextjs.svg',
    url: 'https://nextjs.org/',
  },
  {
    label: 'Node.js',
    logo: 'icon-nodejs.svg',
    url: 'https://nodejs.org/en',
  },
  {
    label: 'Express.js',
    logo: 'icon-express-light.svg',
    url: 'https://expressjs.com/',
  },
  {
    label: 'Socket.io',
    logo: 'icon-socket.svg',
    url: 'https://socket.io/',
  },
 {
    label: 'PostgreSQL',
    logo: 'icon-postgresql.svg',
    url: 'https://www.postgresql.org/',
  },
  {
    label: 'MongoDB',
    logo: 'icon-mongodb.svg',
    url: 'https://www.mongodb.com/',
  },
  {
    label: 'Sass/Scss',
    logo: 'icon-sass.svg',
    url: 'https://sass-lang.com/',
  },
  {
    label: 'Tailwindcss',
    logo: 'icon-tailwindcss.svg',
    url: 'https://tailwindcss.com/',
  },
  {
    label: 'Figma',
    logo: 'icon-figma.svg',
    url: 'https://www.figma.com/',
  },
  {
    label: 'Cypress',
    logo: 'icon-cypress-light.svg',
    url: 'https://www.cypress.io/',
  },
  {
    label: 'Storybook',
    logo: 'icon-storybook.svg',
    url: 'https://storybook.js.org/',
  },
  {
    label: 'Git',
    logo: 'icon-git.svg',
    url: 'https://git-scm.com/',
  },
];

export function Main() {
  return (
    <section className='bg-grid-white/[0.05]'>
      <div className='relative mx-auto grid max-w-5xl grid-cols-7 gap-7'>
        <div
          className='grid_1'
        >
          <CardContainer className='bg-dot-white/[0.2] bg-dot-black/[0.2] relative'>

            <CardBody className='group/card relative size-full rounded-[22px] border border-black/[0.1] p-6 hover:shadow-2xl dark:border-white/[0.2] dark:hover:shadow-emerald-500/[0.1]'>
              <CardItem
                as='h1'
                className='text-gradient text-center text-3xl font-bold uppercase'
                translateZ='50'
              >
                About Me
              </CardItem>

              <CardItem className='mt-4 w-full' translateZ='100'>
                <Image
                  alt='thumbnail'
                  className='h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl'
                  height='1000'
                  src='/images/about.png'
                  width='1000'
                />
              </CardItem>
              <div className='mt-5 flex items-center justify-between'>
                <CardItem
                  as={Link}
                  className='rounded-xl px-4 py-2 text-xs font-normal dark:text-white'
                  href='https://twitter.com/mannupaaji'
                  target='__blank'
                  translateZ={20}
                >
                  Try now <span className='duration-200 group-hover/card:translate-x-3 group-hover/card:transition-all'>→</span>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

        </div>
        <div
          className='grid_2'
        >
          <CardContainer className='bg-dot-white/[0.2] bg-dot-black/[0.2] relative'>

            <CardBody className='group/card relative size-full rounded-[22px] border border-black/[0.1] p-6 hover:shadow-2xl dark:border-white/[0.2] dark:hover:shadow-emerald-500/[0.1]'>
              <CardItem
                as='h1'
                className='text-gradient text-center text-3xl font-bold uppercase'
                translateZ='50'
              >
                About Me
              </CardItem>

              <CardItem className='mt-4 w-full' translateZ='100'>
                <Image
                  alt='thumbnail'
                  className='h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl'
                  height='1000'
                  src='/images/about.png'
                  width='1000'
                />
              </CardItem>
              <div className='mt-5 flex items-center justify-between'>
                <CardItem
                  as={Link}
                  className='rounded-xl px-4 py-2 text-xs font-normal dark:text-white'
                  href='https://twitter.com/mannupaaji'
                  target='__blank'
                  translateZ={20}
                >
                  Try now <span className='duration-200 group-hover/card:translate-x-3 group-hover/card:transition-all'>→</span>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

        </div>

        <div className='grid_5'>
          <div className='shadow-in bg-dark-600 mb-5 rounded-[22px] p-5'>
            <div className='mb-5 mt-7 flex justify-between px-4'>
              <div>
                <h1 className='text-lg font-medium text-gray-200'>My adventure lasting 3+ years</h1>
                <p className='text-gray-600'>21 projects realized🎉</p>
              </div>

              <span><FaLocationArrow /></span>
            </div>

            <InfiniteMovingCards className='[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]' speed='normal'>
              {
        TECHNOLOGIES.map(({ label, logo }) => (
          <div className='' title={label}>
            <Image alt={`${label} logo`} className='size-[50px] transition-transform duration-300 md:hover:scale-110' height={70} src={`/icons/${logo}`} width={70} />
          </div>
        ))
          }
            </InfiniteMovingCards>

          </div>

          <div className='grid grid-cols-[auto_1fr] gap-4'>
            <ul className='grid grid-cols-2 gap-3'>
              {
              socialMediaLinks.map(({ brand, icon, id, label, url }, idx) => (
                <Link key={url} className={cn('shadow-in flex size-[70px] flex-col items-center justify-center gap-3 rounded-[22px] border-solid bg-dark-600 p-2 transition-all duration-200 hover:bg-black/45')} href={url} style={{ backgroundColor: idx === id ? brand : '' }} target='_blank' title={label}>
                  {icon}
                </Link>
              ))
            }
            </ul>

            <div className='bg-dark-600 rounded-[22px] p-5'>
              <h1 className='mb-3 text-lg uppercase tracking-widest text-gray-600'>Resources</h1>
              <p className='max-w-56 text-xl text-gray-200'>Resources to speed your workflow</p>
            </div>
          </div>
        </div>

        <div
          className='grid_3'
        >
          <CardContainer className='bg-dot-white/[0.2] bg-dot-black/[0.2] relative'>

            <CardBody className='group/card relative size-full rounded-[22px] border border-black/[0.1] p-6 hover:shadow-2xl dark:border-white/[0.2] dark:hover:shadow-emerald-500/[0.1]'>
              <CardItem
                as='h1'
                className='text-gradient text-center text-3xl font-bold uppercase'
                translateZ='50'
              >
                About Me
              </CardItem>

              <CardItem className='mt-4 w-full' translateZ='100'>
                <Image
                  alt='thumbnail'
                  className='h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl'
                  height='1000'
                  src='/images/about.png'
                  width='1000'
                />
              </CardItem>
              <div className='mt-5 flex items-center justify-between'>
                <CardItem
                  as={Link}
                  className='rounded-xl px-4 py-2 text-xs font-normal dark:text-white'
                  href='https://twitter.com/mannupaaji'
                  target='__blank'
                  translateZ={20}
                >
                  Try now <span className='duration-200 group-hover/card:translate-x-3 group-hover/card:transition-all'>→</span>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

        </div>

        <div
          className='grid_4'
        >
          <CardContainer className='bg-dot-white/[0.2] bg-dot-black/[0.2] relative'>

            <CardBody className='group/card relative size-full rounded-[22px] border border-black/[0.1] p-6 hover:shadow-2xl dark:border-white/[0.2] dark:hover:shadow-emerald-500/[0.1]'>
              <CardItem
                as='h1'
                className='text-gradient text-center text-3xl font-bold uppercase'
                translateZ='50'
              >
                About Me
              </CardItem>

              <CardItem className='mt-4 w-full' translateZ='100'>
                <Image
                  alt='thumbnail'
                  className='h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl'
                  height='1000'
                  src='/images/about.png'
                  width='1000'
                />
              </CardItem>
              <div className='mt-5 flex items-center justify-between'>
                <CardItem
                  as={Link}
                  className='rounded-xl px-4 py-2 text-xs font-normal dark:text-white'
                  href='https://twitter.com/mannupaaji'
                  target='__blank'
                  translateZ={20}
                >
                  Try now <span className='duration-200 group-hover/card:translate-x-3 group-hover/card:transition-all'>→</span>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

        </div>
      </div>
    </section>
  );
}
