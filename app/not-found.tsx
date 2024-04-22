import { Button } from '@/user/elements/button';
import Image from 'next/image';
import Link from 'next/link';

function NotFound() {
  return (
    <section className='flex h-screen flex-col items-center justify-center gap-4'>
      <Image alt='not found' height={300} src='/images/error.png' width={300} />

      <p className='mx-auto max-w-md text-center'>
        Sorry, the page you’re looking for doesn’t exist.
        If you think something is broken, report a problem
      </p>

      <Link href='/'>
        <Button className='group/btn relative block h-12 rounded-2xl bg-dark-400 px-12 font-medium !text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] transition-all duration-300 hover:bg-[#327ff3] dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'>Go Home</Button>
      </Link>
    </section>
  );
}

export default NotFound;
