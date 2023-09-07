import React from 'react';

import HallFameCard from '../HallFameCard/HallFameCard';
import HallFameCustomCard from '../HallFameCustomCard/HallFameCustomCard';
import hallFameHeading from '@/data/hallFameHeading.json';
import hallFameData from '@/data/hallFameData.json';
import customCardData from '@/data/customCardData.json';
import s from './HallFameList.module.css';
import { HallFameCardProps, HallFameCustomCardProps } from '@/types/index';
import Heading from '../Heading/Heading';

const isHallFameCardProps = (
  data: HallFameCardProps | HallFameCustomCardProps | undefined,
): data is HallFameCardProps => {
  if (!data) return false;

  return (
    'id' in data &&
    'name' in data &&
    'description' in data &&
    'cupstitle' in data &&
    'cups' in data &&
    'image' in data &&
    typeof data.id === 'string' &&
    typeof data.name === 'string' &&
    typeof data.description === 'string' &&
    typeof data.cupstitle === 'string' &&
    Array.isArray(data.cups) &&
    typeof data.image?.src === 'string' &&
    typeof data.image?.alt === 'string'
  );
};

const shuffleArray = (
  array: (HallFameCardProps | HallFameCustomCardProps | undefined)[],
) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const headerStyles =
  '-mb-[15px] text-[32px] font-extrabold text-black-dark md:-mb-[30px] md:px-[84px] md:text-[40px] md:leading-[56px] xl:-mb-[40px] xl:px-[112px] xl:text-[52px] xl:leading-[80px]';

const HallFameList: React.FC = () => {
  const shuffledData = shuffleArray([...hallFameData, customCardData]);

  return (
    <section
      className={`${s.hallFameListContainer} rounded-lg bg-cover bg-center bg-no-repeat p-5 shadow-sm`}
    >
      <Heading tag="h1" variant="main" className={headerStyles}>
        {hallFameHeading.heading.main}
      </Heading>
      <Heading
        tag="h2"
        variant="primary"
        className="pb-6 text-[28px] font-semibold leading-9 md:px-[84px] md:text-[32px] md:font-semibold md:leading-[36px] xl:px-[112px] xl:text-[42px] xl:font-semibold xl:leading-[52px]"
      >
        {hallFameHeading.heading.sub}
      </Heading>
      <ul className="grid h-full w-full grid-cols-1 gap-6 md:grid-cols-2 md:px-[84px] xl:grid-cols-3 xl:px-[112px] xxl:grid-cols-4">
        {shuffledData.map((data, id) => {
          if (data === customCardData) {
            return <HallFameCustomCard key={id} />;
          }
          if (isHallFameCardProps(data)) {
            return <HallFameCard key={id} {...data} />;
          }
          return null;
        })}
      </ul>
    </section>
  );
};

export default HallFameList;
