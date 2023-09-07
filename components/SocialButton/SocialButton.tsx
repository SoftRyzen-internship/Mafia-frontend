import classNames from 'classnames';

import { SocialIcon } from '@/components/SocialIcon';

import { SocialButtonProps } from '@/types';

export const SocialButton: React.FC<SocialButtonProps> = ({
  social,
  btnClassName,
  iconClassName,
}) => {
  const socialButtonStyles = classNames(
    'flex items-center justify-center',
    'hover:text-primary-light-900 active:text-primary-light-600',
    'focus:text-primary-light-500 focus:outline-none',
    btnClassName,
  );

  const socialIconStyles = classNames(iconClassName);

  return (
    <a
      href={social.link}
      rel="noopener noreferrer"
      target="_blank"
      className={socialButtonStyles}
      aria-label="social media"
    >
      <SocialIcon icon={social.icon} styles={socialIconStyles} />
    </a>
  );
};
