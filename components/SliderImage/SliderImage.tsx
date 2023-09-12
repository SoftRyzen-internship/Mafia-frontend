import React from 'react';
import Image from 'next/image';

import { SliderImageProps } from '@/types';

export const SliderImage: React.FC<SliderImageProps> = ({
  src,
  alt,
  className = '',
  imageClassName = '',
}: SliderImageProps) => {
  return (
    <div
      className={`mb-7 aspect-[0.8] w-full overflow-hidden rounded-normal md:aspect-[0.69] md:w-[184px]
    xl:aspect-[0.71] xl:w-auto xxl:relative xxl:h-[440px] xxl:w-[420px] ${className}`}
    >
      <Image
        className={`h-full w-full object-cover xxl:absolute xxl:-top-14 xxl:h-auto xxl:object-top ${imageClassName}`}
        src={src}
        width={272}
        height={290}
        alt={alt}
        quality={90}
        priority
      />
    </div>
  );
};
