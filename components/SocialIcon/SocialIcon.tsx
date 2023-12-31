import classNames from 'classnames';

import Facebook from '@/public/icons/icon_facebook.svg';
import Instagram from '@/public/icons/icon_instagram.svg';
import Telegram from '@/public/icons/icon_telegram.svg';

import { SocialIconProps } from '@/types';

const icons = {
  Facebook,
  Instagram,
  Telegram,
};

export const SocialIcon: React.FC<SocialIconProps> = ({
  icon,
  variant = 'footer',
  className,
}) => {
  const Icon = icons[icon];

  const iconStyles = classNames(
    {
      'w-[28px] h-[28px]': variant !== 'fixed',
    },
    className,
  );

  return <Icon className={iconStyles} width={28} height={28} />;
};
