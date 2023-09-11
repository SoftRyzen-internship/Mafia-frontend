import React from 'react';

import HallFameCard from '@/components/HallFameCard/HallFameCard';
import HallFameCustomCard from '@/components/HallFameCustomCard/HallFameCustomCard';
import hallFameHeading from '@/data/hallFameHeading.json';
import hallFameData from '@/data/hallFameData.json';
import customCardData from '@/data/customCardData.json';
import s from '@/components/HallFameList/HallFameList.module.css';
import { HallFameCardProps, HallFameCustomCardProps } from '@/types/index';
import { Heading } from '@/components/Heading/Heading';
import { Section } from '@/components/Section/Section';

const isHallFameCardProps = (
  data: HallFameCardProps | HallFameCustomCardProps | undefined,
): data is HallFameCardProps => {
  if (!data) return false;

  for (let key in data) {
    if (key === 'cups') {
      if (!Array.isArray(data[key])) {
        return false;
      }
    } else {
      if (typeof data[key] !== 'string' && typeof data[key] !== 'object') {
        return false;
      }
    }
  }

  return true;
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

const HallFameList: React.FC = () => {
  const shuffledData = shuffleArray([...hallFameData, customCardData]);

  return (
    <Section
      className={`${s.hallFameListContainer} container rounded-lg shadow-sm`}
    >
      <Heading
        tag="h1"
        variant="main"
        className="mb-[60px] text-[28px] font-semibold leading-9 md:text-[32px] md:font-semibold md:leading-[36px] xl:text-[42px] xl:font-semibold xl:leading-[52px]"
        shadow={hallFameHeading.heading.main}
      >
        {hallFameHeading.heading.main}
      </Heading>
      <ul className="grid h-full w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4">
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
    </Section>
  );
};

export default HallFameList;
