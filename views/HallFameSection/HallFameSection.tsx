import React from 'react';
import { HallFameList } from '@/components/HallFameList';
import { Heading } from '@/components/Heading/Heading';
import { Fallback } from '@/components/Fallback';
import hallFameHeading from '@/data/hallFameHeading.json';
import customCardData from '@/data/customCardData.json';
import { getHallFameCards } from '@/utils/getHallFameCards';
import { HallFameCardProps, HallFameCustomCardProps } from '@/types/index';

import s from '@/views/HallFameSection/HallFameSection.module.css';

const shuffleArray = (
  array: (HallFameCardProps | HallFameCustomCardProps | undefined)[],
) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const HallFameSection: React.FC = async () => {
  try {
    const hallFameData: (HallFameCardProps | undefined)[] =
      await getHallFameCards();

    const shuffledData = shuffleArray([...hallFameData, customCardData]);

    return (
      <section className={s.hallFameListContainer}>
        <div className="container py-[80px]">
          <Heading
            tag="h1"
            variant="main"
            className="mb-[60px] text-[28px] font-semibold leading-9 md:text-[32px] xl:text-[42px] xl:leading-[52px]"
            shadow_prop={hallFameHeading.heading.main}
          >
            {hallFameHeading.heading.main}
          </Heading>
          <HallFameList shuffledData={shuffledData} />
        </div>
      </section>
    );
  } catch (error) {
    console.error(error.message);
    return <Fallback variant="default" className={s.bgfallback} />;
  }
};
