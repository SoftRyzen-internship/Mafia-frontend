import { BtnWithFormModal } from '@/components/BtnWithFormModal';
import { Logo } from '@/components/Logo';
import { MobileMenu } from '@/components/MobileMenu';
import { NavigationRow } from '@/components/NavigationRow';

import data from '@/data/common.json';

const { button } = data.header;

export const Header = () => (
  <header className="fixed z-[2] w-full border-b border-gray-light py-[6px] backdrop-blur-[100px] md:py-[14px] xl:py-[12px]">
    <div className="container flex items-center justify-between">
      <nav className="flex items-center gap-[24px] md:gap-[32px] xl:gap-[230px] xxl:gap-[342px]">
        <MobileMenu />
        <Logo href="/" position="header" />
        <NavigationRow position="header" />
      </nav>
      <BtnWithFormModal buttonsize="small" text={button} />
    </div>
  </header>
);
