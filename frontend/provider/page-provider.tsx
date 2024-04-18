'use client';

import { motion } from 'framer-motion';

function PageProvider({ children }: { children: React.ReactNode }) {
  return (
    <motion.div animate={{ opacity: 1, y: '0vh', transition: { duration: 0.5, delay: 0.7 } }} className='relative' initial={{ opacity: 0, y: '-100vh' }}>
      {children}
    </motion.div>

  );
}

export default PageProvider;
