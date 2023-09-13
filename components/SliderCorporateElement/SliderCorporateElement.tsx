'use client';

import React from 'react';

import { SliderCorporateElementProps } from '@/types';
import { SliderImage } from '../SliderImage';

export const SliderCorporateElement: React.FC<
  SliderCorporateElementProps
> = cardInfo => {
  return <SliderImage src={cardInfo.imageUrl} alt={cardInfo.altText} />;
};
