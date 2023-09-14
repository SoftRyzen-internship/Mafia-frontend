import Image from 'next/image';
import classNames from 'classnames';

import { HeroImageProps } from '@/types';

import css from './HomeHeroImage.module.css';

export const HomeHeroImage: React.FC<HeroImageProps> = ({ image, alt }) => {
  const containerStyles = classNames(
    css.heroImgContainer,
    'mb-5 w-full h-[214px] rounded-normal',
    'md:mb-9 md:h-[272px] md:w-[600px]',
    'xl:absolute xl:right-8 xl:top-[80px] xl:mb-0 xl:h-[644px] xl:w-[493px]',
    'xxl:bottom-[120px] xxl:top-auto xxl:h-[778px] xxl:w-[716px]',
  );

  const imageStyles = classNames(
    css.heroImg,
    'h-[214px] w-full rounded-normal object-cover object-top',
    'md:h-[272px] md:w-[600px]',
    'xl:h-[644px] xl:w-[493px]',
    'xxl:h-[778px] xxl:w-[716px]',
  );

  return (
    <div className={containerStyles}>
      <Image
        src={image}
        alt={alt}
        width={716}
        height={778}
        priority
        sizes="(max-width: 767px) 328px, (max-width: 1279px) 600px, (max-width: 1751px) 493px, 716px"
        className={imageStyles}
      />
    </div>
  );
};
