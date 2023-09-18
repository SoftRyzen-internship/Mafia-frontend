import MenuIcon from '@/public/icons/mob-menu-icon.svg';
import { MobileMenuBtnProps } from '@/types';

import common from '@/data/common.json';

export const MobileMenuBtn: React.FC<MobileMenuBtnProps> = ({
  className,
  onClick,
}) => {
  return (
    <button
      className={className}
      type="button"
      onClick={onClick}
      aria-label={common.mobileMenuBtnAriaText}
    >
      <MenuIcon width={24} height={14} />
    </button>
  );
};
