import classNames from 'classnames';

import { SocialButton } from '@/components/SocialButton';
import { SocialIcon } from '../SocialIcon';

import { SocialsMenuProps, SocialContact } from '@/types';

import data from '@/data/common.json';

export const SocialsMenu: React.FC<SocialsMenuProps> = ({
  variant = 'footer',
  className,
}) => {
  const socialData = data.socials;

  const menuStyles = classNames(
    {
      'fixed bottom-[80px] right-0 z-10 shadow-xs smOnly:hidden':
        variant === 'fixed',
      'flex smOnly:gap-7 gap-5': variant === 'footer',
      'flex gap-5': variant === 'mobile-menu',
    },
    className,
  );

  return (
    <ul className={menuStyles}>
      {socialData.map(({ icon, link, name }: SocialContact) => (
        <li key={name}>
          <SocialButton
            link={link}
            variant={variant}
            aria_label={`Зв'яжіться з нами у ${icon}`}
          >
            <SocialIcon icon={icon} variant={variant} />
          </SocialButton>
        </li>
      ))}
    </ul>
  );
};
