'use client';

import { InfiniteMovingCards } from '@/user/elements/infinite-moving-cards';

type TestimonialProp = {
    job: string;
    name: string;
    testimony: string;
  }[];

const testimonials: TestimonialProp = [
  {
    name: 'Ismail Quadri',
    job: 'Sparkr Agency CEO',
    testimony: 'Hiring Wakil was a game-changer for our project. His exceptional communication skills kept us updated at every step, ensuring alignment between our vision and the final product. He delivered top-notch quality website within tight deadlines, demonstrating professionalism and dedication throughout. I highly recommend Wakil for any web development project.'
  },
  {
    name: 'David Martinez',
    job: 'Product Designer',
    testimony: 'Working with Wakil was a breeze from start to finish. His clear communication and proactive approach made collaboration effortless. His attention to detail and creative problem-solving skills were instrumental in enhancing our platform\'s user experience. He consistently went above and beyond to deliver results that surpassed our expectations. Without a doubt, Wakil is a valuable asset to any development team.'
  },
  {
    name: 'Isreal Agaku',
    job: 'Upwork Client',
    testimony: 'Wakil professionalism and expertise were evident from our first interaction. He took the time to understand our unique needs and delivered a tailored solution that exceeded our expectations. His clear communication and timely updates throughout the project made the entire process seamless. His dedication to customer satisfaction and technical proficiency make him a standout choice for web development projects.'
  },
  {
    name: 'Michael Turner',
    job: 'Web Developer',
    testimony: "Collaborating with Wakil was a pleasure from start to finish. His problem solving skills and ability to translate complex technical concepts into layman's terms were invaluable. His proactive approach to problem-solving and attention to detail ensured that our project stayed on track and exceeded our objectives. I would highly recommend Wakil to anyone seeking a reliable and talented web developer."
  },
  {
    name: 'Sophia Reynolds',
    job: 'Upwork Client',
    testimony: "Wakil professionalism and commitment to our cause were evident throughout our collaboration. He took the time to understand our organization's mission and goals, delivering a website that effectively communicated our message to our audience. His clear communication and responsiveness made it easy to collaborate remotely, despite the challenges of distance. I wholeheartedly endorse wakil for his exceptional skills and dedication."
  }
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
            className='relative h-[300px] w-[450px] max-w-full shrink-0 rounded-2xl border border-b-0 border-slate-700 bg-dark-600 px-8 py-6 max-sm:h-[350px] md:w-[550px]'
          >
            <blockquote>
              <div
                aria-hidden='true'
                className='pointer-events-none absolute -left-0.5 -top-0.5 size-[calc(100%_+_4px)]'
              />
              <span className=' relative z-20 text-sm font-normal leading-[1.6]'>
                {item.testimony}
              </span>
              <div className='relative z-20 mt-6 flex flex-row items-center'>
                <span className='flex flex-col gap-1'>
                  <span className=' text-sm font-normal leading-[1.6] text-gray-400'>
                    {item.name}
                  </span>
                  <span className=' text-sm font-normal leading-[1.6] text-gray-400'>
                    {item.job}
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
