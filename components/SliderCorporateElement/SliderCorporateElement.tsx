'use client';

import React, { FC } from 'react';
import Image from 'next/image';

import { SliderCorporateElementProps } from '@/types';
import common from '@/data/common.json';

export const SliderCorporateElement: FC<SliderCorporateElementProps> = ({
  imageUrl,
  altText,
}) => {
  return (
    <div className=" h-[402px] overflow-hidden rounded-normal">
      <Image
        width={270}
        height={402}
        src={imageUrl}
        alt={altText}
        placeholder="blur"
        blurDataURL={common.placeholderBlur}
        className="h-full object-cover md:w-auto smOnly:w-full"
      />
    </div>
  );
};
