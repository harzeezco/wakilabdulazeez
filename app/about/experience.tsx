'use client';

import * as React from 'react';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';

import cn from 'classnames';

const data = ['Upwork', 'Sparkr', 'Domtel'];

function Experience() {
  const [currentActive, setCurrentActive] = React.useState(0);

  return (
    <div className='m-auto w-full items-center px-6 pb-20 pt-14 lg:max-w-[1006px] lg:pt-32'>
      <h1 className='text-left text-2xl font-semibold text-[#9ca7c2]'>
        Experience:
      </h1>
      <div className='mx-auto flex items-center justify-between gap-x-20 sm:mt-4 '>
        <ul className='list max-sm:hidden'>
          {data.map((item, idx) => (
            <li
              key={item}
              className={`listItem ${cn({ active: idx === currentActive })}`}
              data-text={item}
              onFocus={() => setCurrentActive(idx)}
              onMouseOver={() => setCurrentActive(idx)}
            >
              {item}
            </li>
          ))}
        </ul>

        <div className='flex-1 max-sm:hidden sm:h-[400px]'>
          <AnimatePresence>
            <ExperienceDetails {...EXPERIENCES[currentActive]} />
          </AnimatePresence>
        </div>

        <div className='sm:hidden'>
          {
            EXPERIENCES.map((experience, idx) => (
              <ExperienceDetails key={idx} {...experience} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

function ExperienceDetails({
  currentlyWorkHere,
  endDate,
  logo,
  logoAlt,
  position,
  startDate,
  summary,
}: ExperienceProp) {
  const dateFormatOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
  };

  return (
    <div className='mx-auto flex w-full max-w-4xl flex-col justify-between gap-4 p-8 md:gap-8'>
      <div className='max-md:order-1 md:w-1/4'>
        <Image
          alt={logoAlt}
          height={60}
          src={`/icons/${logo}`}
          width={120}
        />
      </div>
      <div className='flex flex-col gap-4 max-md:order-3'>
        <h2 className='text-xl font-semibold text-white'>
          {position}
        </h2>
        <ul className='flex list-disc flex-col gap-2 md:gap-2'>
          {summary &&
            summary.map((sentence, index) => (
              <li key={index}>{sentence}</li>
            ))}
        </ul>
      </div>
      <div className='max-md:order-2 md:w-1/4'>
        <p className='whitespace-nowrap md:text-right'>
          {new Intl.DateTimeFormat('en-US', dateFormatOptions).format(
            startDate,
          )}{' '}
          -{' '}
          {currentlyWorkHere
            ? 'Present'
            : endDate
              ? new Intl.DateTimeFormat(
                  'en-US',
                  dateFormatOptions,
                ).format(endDate)
              : 'NA'}
        </p>
      </div>
    </div>
  );
}

type ExperienceProp = {
    currentlyWorkHere?: boolean;
    endDate?: Date;
    logo: string;
    logoAlt: string;
    position: string;
    startDate: Date;
  summary: string[];

  };

export const EXPERIENCES: ExperienceProp[] = [
  {
    logo: 'logo-upwork.svg',
    logoAlt: 'Upwork logo',
    position: 'Independent Freelancer',
    startDate: new Date(2021, 10),
    currentlyWorkHere: true,
    summary: [
      'Worked for various clients like pixelpro, Shosho, Crowe MacKay LLP.',
      'Worked with a variety of technologies, including React, Next.js, Typescript, Express.js, PostgreSQL, Tailwindcss, Mui, Firebase, Storybook, Cypress, and others.',
    ],
  },
  {
    logo: 'logo.svg',
    logoAlt: 'Greenapex logo',
    position: 'Team Lead',
    startDate: new Date(2022, 6),
    endDate: new Date(2023, 9),
    summary: [
      'Acted as team lead in different projects.',
      'Brainstormed new ideas & gathered requirements for internal projects.',
      'Designed architecture of different projects (frontend + backend).',
      'Worked on enterprise-level projects for a variety of clients.',
    ],
  },
  {
    logo: 'tsr-logo-white.svg',
    logoAlt: 'Tsr logo',
    position: 'Full Stack Developer',
    startDate: new Date(2023, 11),
    endDate: new Date(2024, 4),
    summary: [
      'Worked as a full stack developer (React / Next.js / Node.js / Typescript, Express.js, PostgreSQL, Tailwindcss).',
      'Implement Design patterns',
      'Scale the platform to 10,000+ users',
      'Collaborate with UI/UX designers',
      'Get multiple feedback from peers',
    ],
  },
];

export default Experience;
