import PageProvider from '@/user/provider/page-provider';
import { Footer } from '@/user/layout/footer';
import Image from 'next/image';

import { CardStackDemo } from './testimonial';
import { ProjectTab } from './project-tab';

function ProjectsPage() {
  return (
    <PageProvider>
      <div className=''>
        <div className="relative pb-10 bg-grid-white/[0.05] after:absolute after:inset-0 after:z-[-2] after:content-[''] after:bg-grid-white/[0.02]">
          <header className='pt-32'>
            <h1 className='bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-center text-3xl font-bold uppercase tracking-[0.2em] text-transparent md:text-6xl lg:text-9xl'>
              My Projects
            </h1>
          </header>
        </div>

        <div className='relative'>
          <ProjectTab />

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

        <div className="relative pt-5 bg-grid-white/[0.05] after:absolute after:inset-0 after:z-[-2] after:content-[''] after:bg-grid-white/[0.02]">
          <div className='mx-auto flex max-w-5xl items-center justify-center gap-x-10 gap-y-4 pb-10 max-sm:flex-col'>
            <CardStackDemo />
            <CardStackDemo />
          </div>
          <Footer />
        </div>
      </div>
    </PageProvider>

  );
}

export default ProjectsPage;
