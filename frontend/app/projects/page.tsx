import { Header } from '@/user/layout/header';
import { Footer } from '@/user/pages/home/footer';

import Image from 'next/image';
import { Tabs } from '@/user/elements/tabs';
import { CardStackDemo } from './testimonial';

export function TabsDemo() {
  const tabs = [
    {
      title: 'Product',
      value: 'product',
      content: (
        <div className='border-dark-400/20 relative size-full overflow-hidden rounded-2xl border border-solid bg-[#14142B] p-10 text-xl font-bold text-white md:text-4xl'>
          <p>Product Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: 'Services',
      value: 'services',
      content: (
        <div className='border-dark-400/20 relative size-full overflow-hidden rounded-2xl border border-solid bg-[#14142B] p-10 text-xl font-bold text-white md:text-4xl'>
          <p>Services tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: 'Playground',
      value: 'playground',
      content: (
        <div className='border-dark-400/20 relative size-full overflow-hidden rounded-2xl border border-solid bg-[#14142B] p-10 text-xl font-bold text-white md:text-4xl'>
          <p>Playground tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: 'Content',
      value: 'content',
      content: (
        <div className='border-dark-400/20 relative size-full overflow-hidden rounded-2xl border border-solid bg-[#14142B] p-10 text-xl font-bold text-white md:text-4xl'>
          <p>Content tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: 'Random',
      value: 'random',
      content: (
        <div className='border-dark-400/20 relative size-full overflow-hidden rounded-2xl border border-solid bg-[#14142B] p-10 text-xl font-bold text-white md:text-4xl'>
          <p>Random tab</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className='b relative mx-auto my-20 flex h-80 w-full max-w-5xl flex-col items-start  justify-start [perspective:1000px] md:h-[40rem]'>
      <Tabs tabs={tabs} />
    </div>
  );
}

function DummyContent() {
  return (
    <Image
      alt='dummy image'
      className='absolute inset-x-0 -bottom-10  mx-auto h-3/5 w-[90%] rounded-xl object-cover object-left-top md:h-[90%]'
      height='900'
      src='/images/spark.png'
      width='1000'
    />
  );
}

function ProjectsPage() {
  return (
    <div className=''>
      <div className="bg-grid-white/[0.05] after:bg-grid-white/[0.02] relative pb-10 after:absolute after:inset-0 after:z-[-2] after:content-['']">
        <Header />
        <header className='pt-32'>
          <h1 className='bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-center text-lg font-bold uppercase tracking-[0.2em] text-transparent md:text-6xl lg:text-9xl'>My Projects</h1>
        </header>
      </div>

      <div className='relative'>
        <TabsDemo />

        <div className='absolute inset-x-0 -bottom-10 -z-10 w-full'>
          <Image
              alt='grid'
            className='w-full opacity-45'
            height={610}
            src='/images/grid.png'
            width={1200}
          />
        </div>
      </div>

      <div className="bg-grid-white/[0.05] after:bg-grid-white/[0.02] relative pt-5 after:absolute after:inset-0 after:z-[-2] after:content-['']">
        <div className='mx-auto flex max-w-5xl items-center justify-center gap-10 pb-10'>
          <CardStackDemo />
          <CardStackDemo />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default ProjectsPage;
