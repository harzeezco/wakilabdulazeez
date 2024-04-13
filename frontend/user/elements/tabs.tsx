'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

type Tab = {
  content?: string | React.ReactNode | any;
  title: string;
  value: string;
};

export function FadeInDiv({
  className,
  hovering,
  tabs,
}: {
  active: Tab;
  className?: string;
  hovering?: boolean;
  tabs: Tab[];
}) {
  const isActive = (tab: Tab) => tab.value === tabs[0].value;

  return (
    <div className='relative size-full'>
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn('w-full h-full absolute top-0 left-0', className)}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
}

export function Tabs({
  activeTabClassName,
  containerClassName,
  contentClassName,
  tabClassName,
  tabs: propTabs,
}: {
  activeTabClassName?: string;
  containerClassName?: string;
  contentClassName?: string;
  tabClassName?: string;
  tabs: Tab[];
}) {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);

    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className={cn(
          'flex flex-row gap-4 items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full',
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            className={cn('relative px-4 py-2 rounded-[100px] border border-dark-400/20 border-solid hover:bg-dark-400 active:bg-dark-400 transition-all bg-dark-600/20', tabClassName)}
            style={{
              transformStyle: 'preserve-3d',
            }}
            type='button'
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            {active.value === tab.value && (
              <motion.div
                className={cn(
                  'absolute inset-0 bg-dark-400 rounded-full ',
                  activeTabClassName
                )}
                layoutId='clickedbutton'
                transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
              />
            )}

            <span className='relative block text-black dark:text-white'>
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <FadeInDiv
        key={active.value}
        active={active}
        className={cn('mt-12', contentClassName)}
        hovering={hovering}
        tabs={tabs}
      />
    </>
  );
}
