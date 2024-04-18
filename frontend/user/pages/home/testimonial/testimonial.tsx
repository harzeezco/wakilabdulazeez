'use client';

import { InfiniteMovingCards } from '@/user/elements/infinite-moving-cards';

type TestimonialProp = {
    name: string;
    quote: string;
    title: string;
  }[];

const testimonials: TestimonialProp = [
  {
    quote:
      'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.',
    name: 'Charles Dickens',
    title: 'A Tale of Two Cities',
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: 'William Shakespeare',
    title: 'Hamlet',
  },
  {
    quote: 'All that we see or seem is but a dream within a dream.',
    name: 'Edgar Allan Poe',
    title: 'A Dream Within a Dream',
  },
  {
    quote:
      'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.',
    name: 'Jane Austen',
    title: 'Pride and Prejudice',
  },
  {
    quote:
      'Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.',
    name: 'Herman Melville',
    title: 'Moby-Dick',
  },
];

export function Testimonial() {
  return (
    <div className='relative mt-10 flex flex-col items-center justify-center overflow-hidden rounded-md antialiased dark:bg-grid-white/[0.05]'>
      <InfiniteMovingCards
        direction='right'
        speed='slow'
      >
        {testimonials.map((item) => (
          <li
            key={item.name}
            className='relative h-[300px] w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-slate-700 bg-dark-600 px-8 py-6 md:w-[450px]'
          >
            <blockquote>
              <div
                aria-hidden='true'
                className='pointer-events-none absolute -left-0.5 -top-0.5 size-[calc(100%_+_4px)]'
              />1
              <span className=' relative z-20 text-sm font-normal leading-[1.6]'>
                {item.quote}
              </span>
              <div className='relative z-20 mt-6 flex flex-row items-center'>
                <span className='flex flex-col gap-1'>
                  <span className=' text-sm font-normal leading-[1.6] text-gray-400'>
                    {item.name}
                  </span>
                  <span className=' text-sm font-normal leading-[1.6] text-gray-400'>
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </InfiniteMovingCards>
    </div>
  );
}
