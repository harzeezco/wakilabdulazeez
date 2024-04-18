import { Tabs } from '@/user/elements/tabs';
import Image from 'next/image';

export function ProjectTab() {
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
    <div className='relative mx-auto my-20 flex h-80 w-full max-w-5xl flex-col items-start  justify-start [perspective:1000px] md:h-[40rem]'>
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
