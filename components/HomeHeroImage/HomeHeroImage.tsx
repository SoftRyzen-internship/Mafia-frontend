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
        <div>
          <Image src={image} alt={alt} width={400} height={600} />
        </div>
      )}
    </>
  );
};
