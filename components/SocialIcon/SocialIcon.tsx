import Facebook from '@/public/icons/icon_facebook.svg';
import Instagram from '@/public/icons/icon_instagram.svg';
import Telegram from '@/public/icons/icon_telegram.svg';

import { SocialIconProps } from '@/types';

const icons = {
  Facebook,
  Instagram,
  Telegram,
};

export const SocialIcon: React.FC<SocialIconProps> = ({ icon, styles }) => {
  const Icon = icons[icon];

  return <Icon className={styles} width={32} height={32} aria-label={icon} />;
};
