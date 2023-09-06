import Facebook from '@/public/icons/icon_facebook.svg';
import Instagram from '@/public/icons/icon_instagram.svg';
import Telegram from '@/public/icons/icon_telegram.svg';

import { SocialIconProps } from '@/types';

const SocialIcon: React.FC<SocialIconProps> = ({ icon, styles }) => {
  switch (icon) {
    case 'Facebook':
      return (
        <Facebook className={styles} width={32} height={32} ariaLabel={icon} />
      );
    case 'Instagram':
      return (
        <Instagram className={styles} width={32} height={32} ariaLabel={icon} />
      );
    case 'Telegram':
      return (
        <Telegram className={styles} width={32} height={32} ariaLabel={icon} />
      );
    default:
      return <></>;
  }
};

export default SocialIcon;
