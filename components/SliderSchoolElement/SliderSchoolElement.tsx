'use client';

import React from 'react';

import { SliderSchoolElementProps } from '@/types';
import { SliderImage } from '../SliderImage';

export const SliderSchoolElement: React.FC<
  SliderSchoolElementProps
> = cardInfo => {
  return (
    <>
      <SliderImage src={cardInfo.imageUrl} alt={cardInfo.name} />
      <p className="mb-4 text-base font-normal text-gray">{cardInfo.name}</p>
      <p className="alias text-xl font-medium text-white-light transition duration-300 ease-out">
        {cardInfo.alias}
      </p>
    </>
  );
};
