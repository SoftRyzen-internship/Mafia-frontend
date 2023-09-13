'use client';

import Image from 'next/image';

import { useState, useEffect } from 'react';
import { useWindowWidth } from '@/hooks';

export const HomeHeroImage = ({ images, alt }) => {
  const [image, setImage] = useState();
  const {
    width,
    isScreenMobile,
    isScreenTablet,
    isScreenDesktop,
    isLargeScreenDesktop,
  } = useWindowWidth();

  useEffect(() => {
    const getImageLink = () => {
      if (!width || width < 376) {
        return;
      }

      if (isScreenMobile) {
        return images.mobile;
      }

      if (isScreenTablet) {
        return images.tablet;
      }

      if (isScreenDesktop) {
        return images.desktop;
      }

      if (isLargeScreenDesktop) {
        return images.desktopLg;
      }
    };

    const imageLink = getImageLink();

    setImage(imageLink);
  }, [
    width,
    isScreenMobile,
    isScreenTablet,
    isScreenDesktop,
    isLargeScreenDesktop,
    images,
  ]);

  return (
    <>
      {image && (
        <div
          className="mb-5 w-full rounded-normal 
            md:mb-9 md:h-[272px] md:w-[600px]
            xl:absolute xl:right-8 xl:top-[80px] xl:mb-0 xl:h-[644px] xl:w-[493px]
            xxl:bottom-[120px] xxl:top-auto xxl:h-[778px] xxl:w-[716px]"
        >
          <Image
            src={image}
            alt={alt}
            width={716}
            height={778}
            loading="lazy"
            sizes="(max-width: 767px) 328px, (max-width: 1279px) 600px, (max-width: 1751px) 493px, 716px"
            className="h-auto w-full rounded-normal object-cover
              md:h-[272px] md:w-[600px]
              xl:h-[644px] xl:w-[493px]
              xxl:h-[778px] xxl:w-[716px]"
          />
        </div>
      )}
    </>
  );
};
