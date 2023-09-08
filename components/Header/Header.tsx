import { ButtonPrimary } from '../Buttons';
import { Logo } from '../Logo';
import { NavigationRow } from '../NavigationRow';

import data from '@/data/common.json';

export const Header = () => {
  const header = data.header;

  return (
    <header className="fixed z-[2] w-full py-[6px] backdrop-blur-[100px] md:py-[14px] xl:py-[12px]">
      <div className="container flex items-center justify-between">
        <nav className="flex items-center gap-[24px] md:gap-[64px] xl:gap-[240px] xxl:gap-[342px]">
          <div className="xl:hidden">Mob</div>
          <Logo href="/" position="header" />
          <NavigationRow position="header" className="notXl:hidden" />
        </nav>
        <ButtonPrimary buttonsize="small">{header.button}</ButtonPrimary>
      </div>
    </header>
  );
};
