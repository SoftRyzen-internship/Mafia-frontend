'use client';

import React, { FC } from 'react';
import Image from 'next/image';

import { shimmer } from '@/utils/helpers/shimmer';
import { getBase64 } from '@/utils/helpers/getBase64';
import { SliderCorporateElementProps } from '@/types';

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
        blurDataURL={`data:image/svg+xml;base64,${getBase64(
          shimmer(700, 475),
        )}`}
        className="h-full object-cover md:w-auto smOnly:w-full"
      />
    </div>
  );
};
