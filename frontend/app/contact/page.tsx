'use client';

import PageProvider from '@/provider/page-provider';
import { Footer } from '@/user/layout/footer';
import Image from 'next/image';
import { ContactForm } from './contact-form';

function ContactPage() {
  return (
    <PageProvider>
      <div className=''>
        <div className="bg-grid-white/[0.05] after:bg-grid-white/[0.02] relative pb-10 after:absolute after:inset-0 after:z-[-2] after:content-['']">
          <header className='pt-32'>
            <h1 className='bg-gradient-to-b from-neutral-200  to-neutral-600 bg-clip-text text-center text-3xl font-bold uppercase tracking-[0.2em] text-transparent md:text-6xl lg:text-9xl'>
              Contact Me
            </h1>
          </header>
        </div>

        <div className='relative px-4'>
          <ContactForm />

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

        <div className="bg-grid-white/[0.05] after:bg-grid-white/[0.02] relative mt-10 pt-[3vw] after:absolute after:inset-0 after:z-[-2] after:content-['']">
          <Footer />
        </div>
      </div>
    </PageProvider>

  );
}

export default ContactPage;
