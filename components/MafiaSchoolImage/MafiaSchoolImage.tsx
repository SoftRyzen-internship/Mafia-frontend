import Image from 'next/image';
import classNames from 'classnames';

import css from './MafiaSchoolImage.module.css';

export const MafiaSchoolImage = ({ image, alt }) => {
  const imageStyles = classNames(
    'h-[315px] w-full rounded-normal object-cover object-center',
    'md:h-[630px] md:w-[288px] md:object-left',
    'xl:h-[412px] xl:w-[493px] xxl:h-[412px] xxl:w-[716px]',
    css.image,
  );
  return (
    <div
      className="mb-[76px] h-[315px] w-full rounded-normal shadow-sm
            md:mb-[96px] md:h-[630px] md:w-[288px]
            xl:h-[412px] xl:w-[493px]
            xxl:bottom-[120px] xxl:top-auto xxl:h-[412px] xxl:w-[716px]"
    >
      <Image
        src={image}
        alt={alt}
        width={493}
        height={630}
        loading="lazy"
        sizes="(max-width: 767px) 328px, (max-width: 1279px) 288px, (max-width: 1751px) 493px, 716px"
        className={imageStyles}
      />
    </div>
  );
};
