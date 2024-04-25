import { HoverBorderGradient } from '@/user/elements/moving-button';
import { Footer } from '@/user/layout/footer';
import PageProvider from '@/user/provider/page-provider';
import Image from 'next/image';
import Link from 'next/link';

import Experience from './experience';

const SKILLS = [
  'Frontend Development',
  'Backend Development',
  'Database Management',
  'Motion Design',
  'App Development',
  'Project Management',
  'Communication',
  'Teamwork',
  'Collaboration',
];

function AboutPage() {
  return (
    <PageProvider>
      <div className=''>
        <div className="relative pb-10 bg-grid-white/[0.05] after:absolute after:inset-0 after:z-[-2] after:content-[''] after:bg-grid-white/[0.02]">
          <header className='pt-32'>
            <h1 className='bg-gradient-to-b from-neutral-200  to-neutral-600 bg-clip-text text-center text-3xl font-bold uppercase tracking-[0.2em] text-transparent md:text-6xl lg:text-9xl'>
              About Me
            </h1>
          </header>
        </div>

        <div className='mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-x-[5vw] p-4 md:grid-cols-2'>
          <div className='div-block-32'>
            <p className='mb-0 text-lg leading-[42px]'>
              I&apos;m a passionate,{' '}
              <Link
                className='underline decoration-2 underline-offset-2 transition-all duration-200 hover:text-dark-400 hover:no-underline active:text-dark-400'
                href='/projects'
              >
                self-proclaimed designer
              </Link>{' '}
              who specializes in full stack development (React.js &
              Next.js & Node.js). I am enthusiastic about bringing the
              technical and visual aspects of digital products to
              life. User experience, pixel perfect design, and writing
              clear, readable, highly performant code matters to me.
              <br />
              <br />I began my journey as a web developer in 2015, and
              since then, I&apos;ve continued to grow and evolve as a
              developer, taking on new challenges and learning the
              latest technologies along the way. Now, in my early
              thirties, 7 years after starting my web development
              journey, I&apos;m building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript,
              Nestjs, Tailwindcss, Supabase and much more.
            </p>
          </div>

          <div className='div-block-32'>
            <p className='mb-0 text-lg leading-[42px]'>
              I am very much a progressive thinker and enjoy working
              on products end to end, from ideation all the way to
              development.
              <br />
              <br /> When I&apos;m not in full-on developer mode, you
              can find me hovering around on twitter or on indie
              hacker, witnessing the journey of early startups or
              enjoying some free time. You can follow me on{' '}
              <Link
                className='underline decoration-2 underline-offset-2 transition-all duration-200 hover:text-dark-400 hover:no-underline active:text-dark-400'
                href='https://twitter.com/Wkhayzed'
              >
                Twitter
              </Link>{' '}
              where I share tech-related bites and build in public, or
              you can follow me on{' '}
              <Link
                className='underline decoration-2 underline-offset-2 transition-all duration-200 hover:text-dark-400 hover:no-underline active:text-dark-400'
                href='https://github.com/harzeezco/'
              >
                GitHub
              </Link>
              .
              <br />
              <br />
              One last thing, I&apos;m available for freelance work
              and open to full time opportunities, so feel free to{' '}
              <Link
                className='underline decoration-2 underline-offset-2 transition-all duration-200 hover:text-dark-400 hover:no-underline active:text-dark-400'
                href='/contact'
              >
                reach out
              </Link>{' '}
              and say hello! I promise I don&apos;t bite 😉
            </p>
          </div>
        </div>

        <div className="relative mt-[7vw] bg-grid-white/[0.05] after:absolute after:inset-0 after:z-[-2] after:content-[''] after:bg-grid-white/[0.02]">
          <div className='mx-auto grid max-w-5xl grid-cols-1 gap-x-[4vw] gap-y-10 p-4 pt-[4vw] sm:grid-cols-[1.2fr_0.8fr]'>
            <div>
              <p className='mb-2 text-2xl font-semibold text-[#9ca7c2]'>
                Skills:
              </p>

              <div className='mb-10 flex shrink flex-wrap gap-4'>
                {SKILLS.map((skill, idx) => (
                  <button
                    key={idx}
                    className='cursor-text rounded-[22px] bg-dark-400/10 px-6 py-2 max-sm:px-3 max-sm:text-sm'
                    type='button'
                  >
                    {skill}
                  </button>
                ))}
              </div>

              <Link href='/contact'>
                <HoverBorderGradient
                  as='button'
                  className='flex items-center space-x-2 uppercase'
                  containerClassName='rounded-full'
                >
                  Download CV
                </HoverBorderGradient>
              </Link>
            </div>

            <div className='max-sm:order-first'>
              <Image
                alt='wakil'
                height={400}
                src='/images/avatar.png'
                width={400}
              />
            </div>
          </div>

          <Experience />

          <Footer />
        </div>
      </div>
    </PageProvider>
  );
}

export default AboutPage;
