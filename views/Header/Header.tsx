import { ButtonPrimary } from '../../components/Buttons';
import { Logo } from '../../components/Logo';
import { MobileMenu } from '../../components/MobileMenu';
import { NavigationRow } from '../../components/NavigationRow';

import data from '@/data/common.json';

export const Header = () => {
  const header = data.header;

  return (
    // backdrop-blur-[100px]
    <header className="fixed z-[2] w-full border-b border-gray-light bg-body py-[6px] md:py-[14px] xl:py-[12px]">
      <div className="container flex items-center justify-between">
        <nav className="flex items-center gap-[24px] md:gap-[64px] xl:gap-[240px] xxl:gap-[342px]">
          <MobileMenu />
          <Logo href="/" position="header" />
          <NavigationRow position="header" className="notXl:hidden" />
        </nav>
        <ButtonPrimary buttonsize="small">{header.button}</ButtonPrimary>
      </div>
    </header>
  );
};
