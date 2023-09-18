import Image from 'next/image';
import classNames from 'classnames';

import { SectionImageProps } from '@/types';

import css from './HomeHeroImage.module.css';

export const HomeHeroImage: React.FC<SectionImageProps> = ({ image, alt }) => {
  const sizes = classNames(
    'w-full h-[214px]',
    'md:h-[272px] md:w-[600px]',
    'xl:h-[644px] xl:w-[493px]',
    'xxl:h-[778px] xxl:w-[716px]',
  );

  const containerStyles = classNames(
    sizes,
    css.heroImgContainer,
    'mb-5 rounded-normal',
    'mdOnly:mb-9',
    'xl:absolute xl:right-8 xl:top-0',
    'xxl:bottom-[-20px] xxl:top-auto',
  );

  const imageStyles = classNames(
    sizes,
    css.heroImg,
    'rounded-normal object-cover object-top',
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
