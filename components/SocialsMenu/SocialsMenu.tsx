import classNames from 'classnames';

import { SocialButton } from '@/components/SocialButton';

import { SocialsMenuProps, SocialContact } from '@/types';

import data from '@/data/common.json';

export const SocialsMenu: React.FC<SocialsMenuProps> = ({ variant }) => {
  const socialData = data.socials;

  const menuStyles = classNames({
    'fixed bottom-[80px] right-0 z-10 rounded-l-normal shadow-xs smOnly:hidden':
      variant === 'fixedSocials',
    'flex gap-5': variant === 'contactSocialBasic',
    'flex gap-7': variant === 'contactSocialsmOnly',
  });

  const buttonStyles = classNames({
    'w-[72px] h-[72px] text-white-light bg-primary-light-100 first-of-type:rounded-tl-normal last-of-type:rounded-bl-normal':
      variant === 'fixedSocials',
    'w-8 h-8 text-body bg-primary-light-1000 rounded-normal':
      variant !== 'fixedSocials',
  });

  const iconStyles = classNames({
    'w-[26px] h-[26px]': variant !== 'fixedSocials',
  });

  return (
    <ul className={menuStyles}>
      {socialData.map((social: SocialContact) => (
        <SocialButton
          key={social.name}
          social={social}
          btnClassName={buttonStyles}
          iconClassName={iconStyles}
        />
      ))}
    </ul>
  );
};
