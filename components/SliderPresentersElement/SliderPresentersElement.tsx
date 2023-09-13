'use client';

import React from 'react';

import { SliderPresentersElementItemProps } from '@/types';
import { SliderImage } from '../SliderImage';

export const SliderPresentersElement: React.FC<
  SliderPresentersElementItemProps
> = cardInfo => {
  return (
    <SliderImage
      src={cardInfo.attributes.img.data.attributes.url}
      alt={cardInfo.attributes.name}
    />
  );
};
