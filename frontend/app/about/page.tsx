import { HoverBorderGradient } from '@/user/elements/moving-button';
import { Header } from '@/user/layout/header';
import { Footer } from '@/user/pages/home/footer';
import Image from 'next/image';
import Link from 'next/link';

const SKILLS = [
  'Frontend Development', 'Backend Development', 'Database Management', 'Motion Design', 'App Development',
  'Project Management', 'Communication', 'Teamwork', 'Collaboration',
];

function AboutPage() {
  return (
    <div className=''>
      <div className="bg-grid-white/[0.05] after:bg-grid-white/[0.02] relative pb-10 after:absolute after:inset-0 after:z-[-2] after:content-['']">
        <Header />
        <header className='pt-32'>
          <h1 className='bg-gradient-to-b from-neutral-200  to-neutral-600 bg-clip-text text-center text-lg font-bold uppercase tracking-[0.2em] text-transparent md:text-6xl lg:text-9xl'>About Me</h1>
        </header>
      </div>

      <div className='mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-x-[5vw] p-4'>
        <div className='div-block-32'>
          <p className='mb-0 text-lg leading-[42px]'>I craft digital products & delightful experiences, build my ideas & nerd out over things I like. Curiosity led me to become a generalist, meaning I can do lots of things well from ideation to launch. I find joy in building things and pushing my creative boundaries. I’m guided by the thought that each of us can contribute to shaping the world of tomorrow. This means challenging the status quo, striving for excellence, working together.
            <br />
            <br />
            I craft digital products & delightful experiences, build my ideas & nerd out over things I like. Curiosity led me to become a generalist, meaning I can do lots of things well from ideation to launch. I find joy in building things and pushing my creative boundaries. I’m guided by the thought that each of us can contribute to shaping the world of tomorrow. This means challenging the status quo, striving for excellence, working together.
          </p>
        </div>

        <div className='div-block-32'>
          <p className='mb-0 text-lg leading-[42px]'>I craft digital products & delightful experiences, build my ideas & nerd out over things I like. Curiosity led me to become a generalist, meaning I can do lots of things well from ideation to launch. I find joy in building things and pushing my creative boundaries. I’m guided by the thought that each of us can contribute to shaping the world of tomorrow. This means challenging the status quo, striving for excellence, working together.
            <br />
            <br />
            I craft digital products & delightful experiences, build my ideas & nerd out over things I like. Curiosity led me to become a generalist, meaning I can do lots of things well from ideation to launch. I find joy in building things and pushing my creative boundaries. I’m guided by the thought that each of us can contribute to shaping the world of tomorrow. This means challenging the status quo, striving for excellence, working together.
          </p>
        </div>
      </div>

      <div className="bg-grid-white/[0.05] after:bg-grid-white/[0.02] relative mt-[7vw] after:absolute after:inset-0 after:z-[-2] after:content-['']">
        <div className='mx-auto grid max-w-5xl grid-cols-[1.2fr_0.8fr] gap-x-[4vw] p-4 pt-[4vw]'>
          <div>
            <p className='mb-2 text-2xl font-semibold text-[#9ca7c2]'>Skills:</p>

            <div className='mb-10 flex shrink flex-wrap gap-4'>
              {
            SKILLS.map((skill, idx) => (
              <button key={idx} className='bg-dark-400/30 cursor-text rounded-[22px] px-6 py-2' type='button'>{skill}</button>
            ))
          }
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

          <div className=''>
            <Image alt='wakil' height={400} src='/images/avatar.png' width={400} />
          </div>
        </div>
        <Footer />
      </div>

    </div>
  );
}

export default AboutPage;
