'use client';

import { useState } from 'react';
import classNames from 'classnames';

import { IconBtn } from '../IconBtn';
import { Logo } from '../Logo';
import { NavigationRow } from '../NavigationRow';

import css from './MobileMenu.module.css';
import MenuIcon from '@/public/icons/mob-menu-icon.svg';
import { Contacts } from '../Contacts';

export const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const menuClasses = classNames(
    css.menu_decor,
    'absolute left-0 top-0 bg-purple-600 px-[24px]',
    'w-[calc(100vw-24px)] max-w-[372px] smOnly:h-[100vh] md:pl-[84px] ',
  );

  const handleMenuToggle = () => {
    setShowMenu(prev => !prev);
  };

  return (
    <div className="xl:hidden">
      <button type="button" onClick={handleMenuToggle}>
        <MenuIcon className="" width={24} height={14} />
      </button>

      {showMenu ? (
        <div className={menuClasses}>
          <div className="flex items-center justify-between py-[6px] md:py-[16px]">
            <Logo position="mobile-menu" href="/" />
            <IconBtn icon="cross" onClick={handleMenuToggle} />
          </div>
          <NavigationRow
            position="mobile-menu"
            className="mt-[40px] md:mt-[60px]"
          />
          <Contacts variant="mobile-menu" />
        </div>
      ) : null}
    </div>
  );
};
