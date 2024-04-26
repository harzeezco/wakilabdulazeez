'use client';

import PageProvider from '@/user/provider/page-provider';
import { Footer } from '@/user/layout/footer';
import Image from 'next/image';
import { ProfileForm } from './contact-form';
import IconButton from '@/user/elements/icon-button';
import { Copy, Mail } from 'lucide-react';
import useCopyText from '@/user/hooks/use-copy-text';

const email = 'wakilabdulazeez@gmail.com';

function ContactPage() {
  const { copiedValueType, handleCopyClick, isCopied } = useCopyText();

  return (
    <PageProvider>
      <div className=''>
        <div className="relative pb-10 bg-grid-white/[0.05] after:absolute after:inset-0 after:z-[-2] after:content-[''] after:bg-grid-white/[0.02]">
          <header className='pt-32'>
            <h1 className='bg-gradient-to-b from-neutral-200  to-neutral-600 bg-clip-text text-center text-3xl font-bold uppercase tracking-[0.2em] text-transparent md:text-6xl lg:text-9xl'>
              Contact Me
            </h1>
          </header>
        </div>

        <div className='relative z-[99999999] px-4'>
          <div className='mx-auto mt-16 w-full max-w-4xl rounded-3xl border border-solid border-dark-400/20 bg-[#14142B] p-4 shadow-input md:p-8'>
            <h2 className='mb-4 text-center text-sm font-bold text-neutral-200'>
              New message to Wakil
            </h2>

            <ProfileForm />

            <div className='my-8 h-px w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700' />

            <p className='text-center font-medium'>OR</p>

            <div className='my-8 h-px w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700' />

            <p className='mb-1 bg-gradient-to-b  from-neutral-200 to-neutral-600 bg-clip-text text-center'>Send me a direct email at</p>

            <div className='flex items-center justify-center gap-4'>
              <Mail className='size-6 md:size-8' />

              <h3 className='text-2xl font-bold text-neutral-200 md:text-3xl'>
                {email}
              </h3>

              <IconButton
                showTooltip={isCopied && copiedValueType === 'email'}
                tooltipText='Copied!'
                onClick={() => handleCopyClick(email, 'email')}
              >
                <Copy />
              </IconButton>
            </div>
          </div>

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

        <div className="relative mt-10 pt-[3vw] bg-grid-white/[0.05] after:absolute after:inset-0 after:z-[-2] after:content-[''] after:bg-grid-white/[0.02]">
          <Footer />
        </div>
      </div>
    </PageProvider>

  );
}

export default ContactPage;
