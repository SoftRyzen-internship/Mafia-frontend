import React from 'react';
import Image from 'next/image';

import {
  SliderCardSchool,
  SliderCardCorporate,
  SliderImageProps,
  PresenterItemProps,
} from '@/types';

export const SliderImage: React.FC<SliderImageProps> = ({
  card,
  section,
}: SliderImageProps) => {
  const getValues = (section: string): { alt: string; src: string } => {
    if (section === 'school') {
      return {
        alt: (card as SliderCardSchool).name,
        src: (card as SliderCardSchool).imageUrl,
      };
    }
    if (section === 'corporate') {
      return {
        alt: (card as SliderCardCorporate).altText,
        src: (card as SliderCardCorporate).imageUrl,
      };
    }

    return {
      alt: (card as PresenterItemProps).attributes.name,
      src: (card as PresenterItemProps).attributes.img.data.attributes.url,
    };
  };

  const alt = getValues(section).alt;
  const src = getValues(section).src;

  return section !== 'presenters' ? (
    <div
      className="mb-7 aspect-[0.8] w-full overflow-hidden rounded-normal md:aspect-[0.69] md:w-[184px]
    xl:aspect-[0.71] xl:w-auto xxl:relative xxl:h-[440px] xxl:w-[420px]"
    >
      <Image
        className="h-full w-full object-cover xxl:absolute xxl:-top-14 xxl:h-auto xxl:object-top"
        src={src}
        width={272}
        height={290}
        alt={alt}
        quality={90}
        priority
      />
    </div>
  ) : (
    <div
      className="mb-7 aspect-[0.8] w-full overflow-hidden rounded-normal md:aspect-[0.69] md:w-[184px]
    xl:aspect-[0.71] xl:w-auto xxl:relative xxl:h-[440px] xxl:w-[420px]"
    >
      <Image
        className="h-full w-full object-cover xxl:absolute xxl:-top-14 xxl:h-auto xxl:object-top"
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
