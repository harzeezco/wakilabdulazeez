'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

function TransitionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode='wait'>
      <div key={pathname} className=''>
        <motion.div animate={{ height: '0vh' }} className='fixed inset-0 z-50 h-screen w-screen rounded-b-[100px] border border-solid border-slate-700 bg-dark-600' exit={{ height: '140vh' }} transition={{ duration: 0.3, ease: 'easeInOut' }} />

        <motion.div animate={{ opacity: 0 }} className='fixed left-1/2 top-1/2 m-auto size-fit -translate-x-1/2 -translate-y-1/2 cursor-default bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-center  text-xl uppercase sm:text-2xl lg:text-8xl' exit={{ opacity: 0 }} initial={{ opacity: 1, zIndex: '9999' }} transition={{ duration: 1, ease: 'easeInOut' }}>
          {pathname === '/' ? 'Welcome' : pathname.replace('/', ' ')}
        </motion.div>

        <motion.div animate={{ height: '0vh', transition: { delay: 0.5, duration: 0.5 } }} className='fixed bottom-0 z-50 h-screen w-screen !rounded-t-[100px] border border-solid border-slate-700 bg-dark-600' initial={{ height: '140vh' }} />
        {children}
      </div>
    </AnimatePresence>
  );
}

export default TransitionProvider;
