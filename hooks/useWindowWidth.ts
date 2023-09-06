'use client';

import { useState, useEffect } from 'react';

// const SCREEN_MOBILE = 320;
const LARGE_SCREEN_MOBILE = 480;
const SCREEN_TABLET = 768;
const SCREEN_DESKTOP = 1280;
const LARGE_SCREEN_DESKTOP = 1440;

export const useWindowWidth = () => {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    if (!width) {
      setWidth(window.innerWidth);
    }

    const handleResize = (event: Event): void => {
      if (event.target instanceof Window) {
        setWidth(event.target.innerWidth);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width]);

  const isScreenMobile = width! < SCREEN_TABLET;
  const isLargeScreenMobile =
    width! >= LARGE_SCREEN_MOBILE && width! < SCREEN_TABLET;
  const isScreenTablet = width! >= SCREEN_TABLET && width! < SCREEN_DESKTOP;
  const isScreenDesktop = width! >= SCREEN_DESKTOP;
  const isLargeScreenDesktop = width! >= LARGE_SCREEN_DESKTOP;

  return {
    width,
    isScreenMobile,
    isLargeScreenMobile,
    isScreenTablet,
    isScreenDesktop,
    isLargeScreenDesktop,
  };
};
