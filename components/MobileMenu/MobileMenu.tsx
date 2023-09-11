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
        <div
          className="absolute left-0 top-0 z-50 h-[100vh] w-[calc(100vw-24px)] 
                    bg-body sm:min-w-fit md:h-fit md:w-[calc(100vw*0.5)]"
        >
          <div
            className="flex items-center justify-between 
            border-b border-gray-light px-[24px] py-[6px] 
            sm:pl-[10vw] md:py-[16px] "
          >
            <Logo position="mobile-menu" href="/" />
            <IconBtn icon="cross" onClick={handleMenuToggle} />
          </div>
          <div className="bg-orange-300 px-[24px] py-[40px] sm:ml-[10vw] sm:w-fit sm:py-[60px] md:ml-[10vw] md:mr-[auto]">
            <NavigationRow position="mobile-menu" />
            <Contacts variant="mobile-menu" className="mt-[54px]" />
            <SocialsMenu variant="mobile-menu" className="mt-[36px]" />
          </div>
        </div>
      ) : null}
    </div>
  );
};
