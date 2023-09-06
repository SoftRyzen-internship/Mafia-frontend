import classNames from 'classnames';

import { SocialButtonProps } from '@/types';

import Facebook from '@/public/icons/icon_facebook.svg';
import Instagram from '@/public/icons/icon_instagram.svg';
import Telegram from '@/public/icons/icon_telegram.svg';

const SocialButton: React.FC<SocialButtonProps> = ({
  social,
  btnClassName,
  iconClassName,
}) => {
  const socialButtonStyles = classNames(
    {
      'flex items-center justify-center': true,
    },
    btnClassName,
  );

  const socialIconStyles = classNames(iconClassName);

  return (
    <a
      href={social.link}
      rel="noopener noreferrer"
      target="_blank"
      className={socialButtonStyles}
      aria-label="посилання на соцмережу"
    >
      {social.icon === 'Facebook' && (
        <Facebook
          className={socialIconStyles}
          width={32}
          height={32}
          aria-label="іконка фейсбук"
        />
      )}

      {social.icon === 'Instagram' && (
        <Instagram
          className={socialIconStyles}
          width={32}
          height={32}
          aria-label="іконка інстаграм"
        />
      )}

      {social.icon === 'Telegram' && (
        <Telegram
          className={socialIconStyles}
          width={32}
          height={32}
          aria-label="іконка телеграм"
        />
      )}
    </a>
  );
};

export default SocialButton;
