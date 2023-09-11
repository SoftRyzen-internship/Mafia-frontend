'use client';

import { useState } from 'react';

import { IconBtn } from '../IconBtn';
import { Logo } from '../Logo';
import { NavigationRow } from '../NavigationRow';
import { Contacts } from '../Contacts';
import { MobileMenuBtn } from '../MobileMenuBtn/MobileMenuBtn';
import { SocialsMenu } from '../SocialsMenu';

// ширина
// backdrop
// portal
// stop scroll + open menu
// close menu toogle stop scroll

export const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(prev => !prev);
  };

  return (
    <div className="xl:hidden">
      <MobileMenuBtn onClick={handleMenuToggle} />

      {showMenu ? (
        <div className="absolute left-0 top-0 w-[calc(100vw-24px)] bg-body sm:max-w-[372px] smOnly:h-[100vh]">
          <div
            aria-label="icon-button"
            className="flex items-center justify-between 
            border-b border-gray-light 
            px-[24px] py-[6px] md:py-[16px] md:pl-[84px]"
          >
            <Logo position="mobile-menu" href="/" />
            <IconBtn icon="cross" onClick={handleMenuToggle} />
          </div>
          <div className="px-[24px] py-[40px] sm:py-[60px]">
            <NavigationRow position="mobile-menu" />
            <Contacts variant="mobile-menu" className="mt-[54px]" />
            <SocialsMenu variant="mobile-menu" className="mt-[36px]" />
          </div>
        </div>
      ) : null}
    </div>
  );
};
