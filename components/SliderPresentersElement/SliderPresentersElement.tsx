'use client';

import React from 'react';

import { SliderPresentersElementItemProps } from '@/types';
import { SliderImage } from '../SliderImage';

export const SliderPresentersElement: React.FC<
  SliderPresentersElementItemProps
> = cardInfo => {
  return (
    <div className="rounded-normal border-[2px] border-primary-light-600 bg-green-100 p-5">
      <SliderImage
        src={cardInfo.attributes.img.data.attributes.url}
        alt={cardInfo.attributes.name}
      />
    </div>
  );
};
