import {
  CardBody,
  CardContainer,
  CardItem,
} from '@/user/elements/3d-card';
import Copied from '@/user/elements/copied';
import { InfiniteMovingCards } from '@/user/elements/infinite-moving-cards';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import { FaBookOpen } from 'react-icons/fa';
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaSquareXTwitter,
} from 'react-icons/fa6';

const ABOUT = [
  {
    year: '25 jan',
    title: 'Started a new mobile design project.',
  },
  {
    year: '25 jan',
    title:
      'Received a certification in advanced UX design techniques.',
  },
  {
    year: '25 jan',
    title:
      'Completed a user research phase for an ongoing web design project.',
  },
  {
    year: '25 jan',
    title:
      'Attended a workshop on the latest trends in UI animation.',
  },
  {
    year: '25 jan',
    title: 'Launched a redesigned website for a major client.',
  },
];

export const socialMediaLinks = [
  {
    id: 1,
    icon: <FaLinkedin size={24} />,
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/',
    brand: 'linkedin',
  },
  {
    id: 2,
    icon: <FaInstagram size={24} />,
    label: 'Instagram',
    url: 'https://www.instagram.com/',
    brand: 'instagram',
  },
  {
    id: 3,
    icon: <FaSquareXTwitter size={24} />,
    label: 'Twitter',
    url: 'https://twitter.com/Wkhayzed',
    brand: 'twitter',
  },
  {
    id: 4,
    icon: <FaGithub size={24} />,
    label: 'GitHub',
    url: 'https://github.com/harzeezco/',
    brand: 'github',
  },
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

const email = 'wakilabdulazeez@gmail.com';

export function Main() {
  return (
    <section className='mx-auto max-w-5xl pt-20 max-sm:px-4'>
      <div className='relative grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-7'>
        <div className='grid_1 max-sm:order-1'>
          <CardContainer className='relative bg-dot-black/[0.2] '>
            <CardBody>
              <div className='space-card scale-110 transition-all duration-300 ease-linear hover:scale-[1.14]'>
                <CardBody className='group/card space-card-wrapper relative '>
                  <CardItem
                    as='div'
                    className='text-gradient space-card-content-wrapper text-center text-2xl font-bold  tracking-[0.2em] text-white'
                    translateZ='50'
                  >
                    <h3>About me</h3>

                    <CardItem className='mt-4 w-full' translateZ='100'>
                      <div className='div-block-26'>
                        <div className='div-block-28' />
                      </div>
                    </CardItem>

                  </CardItem>
                </CardBody>
              </div>
            </CardBody>

          </CardContainer>
        </div>

        <div className='grid_2 max-sm:order-2'>
          <CardContainer className='relative bg-dot-black/[0.2] '>
            <CardBody>
              <div className='space-card scale-110 transition-all duration-300 ease-linear hover:scale-[1.14]'>
                <CardBody className='group/card space-card-wrapper relative '>
                  <CardItem
                    as='div'
                    className='text-gradient space-card-content-wrapper text-center text-2xl font-bold tracking-[0.2em] text-white'
                    translateZ='50'
                  >
                    <h3>My projects</h3>

                    <CardItem className='mt-4 w-full' translateZ='100'>
                      <div className='div-block-26'>
                        <div className='div-block-28' />
                      </div>
                    </CardItem>

                  </CardItem>
                </CardBody>
              </div>
            </CardBody>

          </CardContainer>
        </div>

        <div className='grid_5 max-sm:order-5'>
          <div className='mb-5 rounded-[2vw] border border-solid border-dark-400/20 bg-dark-600'>
            <div className='mb-5 mt-7 flex justify-between px-4'>
              <div>
                <h1 className='text-lg font-medium text-gray-200'>
                  My adventure lasting 3+ years
                </h1>
                <p className='text-gray-600'>
                  21 projects realized🎉
                </p>
              </div>

              <span>
                <FaLocationArrow />
              </span>
            </div>

            <InfiniteMovingCards
              className='[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]'
              speed='normal'
            >
              {TECHNOLOGIES.map(({ label, logo }) => (
                <div className='' title={label}>
                  <Image
                    alt={`${label} logo`}
                    className='size-[50px] transition-transform duration-300 md:hover:scale-110'
                    height={70}
                    src={`/icons/${logo}`}
                    width={70}
                  />
                </div>
              ))}
            </InfiniteMovingCards>
          </div>

          <div className='grid grid-cols-[auto_1fr] gap-4 max-sm:order-6'>
            <ul className='grid grid-cols-2 gap-3'>
              {socialMediaLinks.map(
                ({ brand, icon, id, label, url }, idx) => (
                  <Link
                    key={url}
                    className={cn(
                      'border-dark-400/20 border flex size-[70px] flex-col items-center justify-center gap-3 rounded-[2vw] border-solid bg-dark-600 p-2 transition-all duration-200',
                      brand
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

            <div className='rounded-[22px] border border-solid border-dark-400/20 bg-dark-600 p-5 max-sm:order-6'>
              <h1 className='mb-3 text-lg uppercase tracking-widest text-gray-600'>
                Resources
              </h1>
              <p className='max-w-56 text-xl text-gray-200'>
                Resources to speed your workflow
              </p>
            </div>
          </div>
        </div>

        <div className='grid_3 max-sm:order-3'>
          <CardContainer className='relative bg-dot-black/[0.2] '>
            <CardBody>
              <div className='space-card scale-110 transition-all duration-300 ease-linear hover:scale-[1.14]'>
                <CardBody className='group/card space-card-wrapper relative '>
                  <CardItem
                    as='div'
                    className='text-gradient space-card-content-wrapper text-center text-2xl font-bold  tracking-[0.2em] text-white'
                    translateZ='50'
                  >
                    <h3>Contact me</h3>

                    <CardItem className='mt-4 w-full' translateZ='100'>
                      <div className='div-block-26'>
                        <div className='div-block-28' />
                      </div>
                    </CardItem>

                  </CardItem>
                </CardBody>
              </div>
            </CardBody>

          </CardContainer>
        </div>

        <div className='grid_4 max-sm:order-3'>
          <CardContainer className='relative bg-dot-black/[0.2] '>
            <CardBody>
              <div className='space-card scale-110 transition-all duration-300 ease-linear hover:scale-[1.14]'>
                <CardBody className='group/card space-card-wrapper relative '>
                  <CardItem
                    as='div'
                    className='text-gradient space-card-content-wrapper text-center text-2xl font-bold capitalize tracking-[0.2em] text-white'
                    translateZ='50'
                  >
                    <h3>about me</h3>

                    <CardItem className='mt-4 w-full' translateZ='100'>
                      <div className='div-block-26'>
                        <div className='div-block-28' />
                      </div>
                    </CardItem>

                  </CardItem>
                </CardBody>
              </div>
            </CardBody>

          </CardContainer>
        </div>

        <div className='grid_5 max-sm:order-7'>
          <div className='space-y-5'>
            <div className='flex size-full flex-col items-center justify-center rounded-[2vw] border border-solid border-dark-400/20 bg-dark-600 p-5 py-10 text-center'>
              <h1 className='mb-2 flex items-center gap-2 text-xl font-medium text-gray-600'>
                My Blog{' '}
                <span>
                  <FaBookOpen />
                </span>
              </h1>

              <p className='text-2xl text-gray-200'>Coming soon</p>
            </div>
            <div className='flex w-full flex-col items-center justify-center rounded-[2vw] border border-solid border-dark-400/20 bg-dark-600 p-6 py-8'>
              <h1 className='mx-auto mb-2 max-w-[200px] text-center text-2xl font-medium text-gray-200'>
                Have any project in mind?
              </h1>

              <Copied className='flex items-center gap-2 rounded-lg bg-dark-400/40 px-6 py-3 !text-white hover:bg-dark-400 active:bg-dark-400' email={email} />
            </div>
          </div>
        </div>
      </div>

      <div
        className='mt-7 rounded-[4vw] p-10'
        style={{
          background: 'url(/images/bg.jpg), rgb(20, 20, 20)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='mx-auto max-w-3xl'>
          <h3 className='text-center text-xl font-bold uppercase text-gray-200'>
            Foundation of my work
          </h3>
          <div className='mt-7 grid grid-cols-[1fr_1fr_1fr] gap-3'>
            <div className='space-y-5'>
              <div>
                <h1 className='text-gradient font-semibold'>
                  Functionality
                </h1>
                <p className='text-sm text-gray-200'>
                  Designs that serve a purpose
                </p>
              </div>
              <div className='mt-4'>
                <h1 className='text-gradient font-semibold'>
                  Simplicity
                </h1>
                <p className='text-sm text-gray-200'>
                  Complexity surfaced only when necessary
                </p>
              </div>
            </div>

            <Image
              alt='bubble'
              height={300}
              src='/images/bubble.png'
              width={300}
            />

            <div>
              <div>
                <h1 className='text-gradient font-semibold'>
                  Emotion
                </h1>
                <p className='text-sm text-gray-200'>
                  Products with a character & solutions optimized for
                  emotion
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
