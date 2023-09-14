import Image from 'next/image';
import classNames from 'classnames';

import { SectionImageProps } from '@/types';

import css from './MafiaSchoolImage.module.css';

export const MafiaSchoolImage: React.FC<SectionImageProps> = ({
  image,
  alt,
}) => {
  const sizes = classNames(
    'h-[315px] w-full',
    'md:h-[630px] md:w-[288px]',
    'xl:h-[412px] xl:w-[493px]',
    'xxl:h-[412px] xxl:w-[716px]',
  );

  const containerStyles = classNames(
    sizes,
    'mb-[76px] relative rounded-normal shadow-sm',
    'md:mb-[96px]',
  );

  const imageStyles = classNames(
    sizes,
    'z-1 rounded-normal object-cover object-center',
    'md:object-left',
    css.image,
  );

  return (
    <div className={containerStyles}>
      <Image
        src={image}
        alt={alt}
        width={493}
        height={630}
        sizes="(max-width: 767px) 328px, (max-width: 1279px) 288px, (max-width: 1751px) 493px, 716px"
        className={imageStyles}
      />
    </div>
  );
};
