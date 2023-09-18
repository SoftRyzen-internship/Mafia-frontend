'use client';

import React, { FC } from 'react';
import Image from 'next/image';

import { SliderCorporateElementProps } from '@/types';

export const SliderCorporateElement: FC<SliderCorporateElementProps> = ({
  imageUrl,
  altText,
  priority = false,
}) => {
  return (
    <div
      className=" h-[402px] overflow-hidden rounded-normal 
   "
    >
      <Image
        width={270}
        height={402}
        src={imageUrl}
        alt={altText}
        priority={priority}
        quality={90}
        className="h-full object-cover md:w-auto smOnly:w-full"
      />
    </div>
  );
};
