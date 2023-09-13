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
    <div>
      <Image
        width={624}
        height={402}
        src={imageUrl}
        alt={altText}
        className="object-cover"
      />
    </div>
  );
};
