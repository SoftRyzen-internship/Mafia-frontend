'use client';

import React, { FC } from 'react';
import Image from 'next/image';

interface CorporateHeroSlideProps {
  //   id: string;
  imageUrl: any;
  altText: string;
}

export const CorporateHeroSlide: FC<CorporateHeroSlideProps> = ({
  imageUrl,
  altText,
  //   id,
}) => {
  return (
    <div
      className=" h-[402px] w-full overflow-hidden rounded-normal md:aspect-[0.69]
    xl:aspect-[0.71] xxl:relative  "
    >
      <Image
        width={270}
        height={402}
        src={imageUrl}
        alt={altText}
        priority
        quality={90}
        className="h-full w-full object-cover xxl:object-top"
      />
    </div>
  );
};
