'use client';

import React, { FC, useState } from 'react';
import { HallFameCard } from '@/components/HallFameCard';
import { HallFameCustomCard } from '@/components/HallFameCustomCard';
import { Fallback } from '@/components/Fallback';
import customCardData from '@/data/customCardData.json';
import {
  HallFameCardProps,
  HallFameCustomCardProps,
  HallFameListProps,
} from '@/types/index';
import s from './HallFameList.module.css';

const isHallFameCardProps = (
  data: HallFameCardProps | HallFameCustomCardProps | undefined,
): data is HallFameCardProps =>
  data != null && 'attributes' in data && data.attributes?.cups !== undefined;

export const HallFameList: FC<HallFameListProps> = ({ shuffledData }) => {
  const [idActive, setIdActive] = useState<string | null>(null);

  return (
    <ul className="grid h-full w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4">
      {shuffledData.map((data, id) => {
        if (data?.id === customCardData.id) {
          return <HallFameCustomCard key={id} />;
        }
        if (isHallFameCardProps(data)) {
          return (
            <HallFameCard
              key={id}
              id={data?.id}
              attributes={data?.attributes}
              cups={data?.attributes?.cups}
              idActive={idActive}
              setIdActive={setIdActive}
            />
          );
        }

        return (
          <li key={id} className={`relative h-[460px] w-full`}>
            <Fallback variant="default" className={s.bgfallback} />
          </li>
        );
      })}
    </ul>
  );
};
