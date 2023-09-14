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
      className="mb-7 aspect-[0.8] w-full overflow-hidden rounded-normal md:aspect-[0.69]
    xl:aspect-[0.71] xxl:relative  "
    >
      <Image
        width={270}
        height={402}
        src={imageUrl}
        alt={altText}
        priority
        quality={90}
        className="h-full w-full object-cover xxl:absolute xxl:-top-14 xxl:h-auto xxl:object-top"
      />
    </div>
  );
};
