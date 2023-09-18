import React from 'react';

import hallFameHeading from '@/data/hallFameHeading.json';
import customCardData from '@/data/customCardData.json';

import { getHallFameCards } from '@/utils/getHallFameCards';

import { HallFameCardProps, HallFameCustomCardProps } from '@/types/index';
import { HallFameCard } from '@/components/HallFameCard';
import { HallFameCustomCard } from '@/components/HallFameCustomCard';
import { Heading } from '@/components/Heading/Heading';

import s from '@/views/HallFameSection/HallFameSection.module.css';

const isHallFameCardProps = (
  data: HallFameCardProps | HallFameCustomCardProps | undefined,
): data is HallFameCardProps => {
  return data
    ? 'id' in data && 'attributes' in data && 'cups' in data.attributes
    : false;
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

export const HallFameSection: React.FC = async () => {
  try {
    const hallFameData = await getHallFameCards();
    const shuffledData = shuffleArray([...hallFameData, customCardData]);

    return (
      <section className={s.hallFameListContainer}>
        <div className="container py-[80px]">
          <Heading
            tag="h1"
            variant="main"
            className="mb-[60px] text-[28px] font-semibold leading-9 md:text-[32px] xl:text-[42px] xl:leading-[52px]"
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
                return (
                  <HallFameCard
                    key={id}
                    id={data.id}
                    attributes={data.attributes}
                    cups={data.attributes.cups}
                  />
                );
              }

              return null;
            })}
          </ul>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Error fetching data in component:', error);
    // TO-DO обробити помилку коли зявиться картинка-заглушка
    // Наприклад, повернути запасний компонент або повідомлення про помилку тут
    return null;
  }
};
