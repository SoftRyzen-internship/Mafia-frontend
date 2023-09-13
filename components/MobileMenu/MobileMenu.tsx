'use client';

import { useState, useEffect, MouseEvent } from 'react';
import classNames from 'classnames';

import { IconBtn } from '../IconBtn';
import { Logo } from '../Logo';
import { NavigationRow } from '../NavigationRow';
import { Contacts } from '../Contacts';
import { MobileMenuBtn } from '../MobileMenuBtn';
import { SocialsMenu } from '../SocialsMenu';

import css from './MobileMenu.module.css';

export const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        setShowMenu(false);
        document.body.classList.remove('overflow-hidden');
      }
    };
    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleMenuToggle = () => {
    setShowMenu(prev => !prev);
    document.body.classList.toggle('overflow-hidden');
  };

  const handleOverlayClick = ({ currentTarget, target }: MouseEvent) => {
    if (currentTarget !== target) return;
    handleMenuToggle();
  };

  const menuClasses = classNames(
    [css.bg_image],
    { 'overflow-auto': showMenu },
    'absolute left-0 top-0 h-[100vh] w-[calc(100vw-24px)] bg-body sm:min-w-fit md:w-[calc(100vw*0.5)]',
  );

  return (
    <div className="xl:hidden">
      <MobileMenuBtn onClick={handleMenuToggle} />

      {showMenu ? (
        <div
          onClick={handleOverlayClick}
          className="fixed bottom-0 left-0 h-[100vh] w-[100vw] bg-[#171718C4]"
        >
          <nav className={menuClasses}>
            <div
              className="flex items-center justify-between 
            border-b border-gray-light px-[24px] pb-[6px] pt-[5px] 
            sm:pl-[16vw] md:pb-[16px] md:pl-[16vw] md:pt-[17px]"
            >
              <Logo
                position="mobile-menu"
                href="/"
                onClick={handleMenuToggle}
              />
              <IconBtn icon="cross" onClick={() => handleMenuToggle()} />
            </div>
            <div className="px-[24px] py-[40px] sm:py-[60px] sm:pl-[16vw] md:pl-[16vw]">
              <NavigationRow
                position="mobile-menu"
                onClick={handleMenuToggle}
              />
              <Contacts variant="mobile-menu" className="mt-[54px]" />
              <SocialsMenu
                variant="mobile-menu"
                className="mt-[36px]"
                onClick={handleMenuToggle}
              />
            </div>
          </nav>
        </div>
      ) : null}
    </div>
  );
};