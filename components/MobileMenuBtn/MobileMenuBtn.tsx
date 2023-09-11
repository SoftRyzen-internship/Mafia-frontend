import MenuIcon from '@/public/icons/mob-menu-icon.svg';
import { MobileMenuBtnProps } from '@/types';

export const MobileMenuBtn: React.FC<MobileMenuBtnProps> = ({
  className,
  onClick,
}) => {
  return (
    <button
      className={className}
      type="button"
      onClick={onClick}
      aria-label="mobile menu icon"
    >
      <MenuIcon width={24} height={14} />
    </button>
  );
};
