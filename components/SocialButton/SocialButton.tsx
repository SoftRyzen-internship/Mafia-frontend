import classNames from 'classnames';

import { SocialButtonProps } from '@/types';

export const SocialButton: React.FC<SocialButtonProps> = ({
  link,
  aria_label,
  variant = 'basic',
  children,
  className,
}) => {
  const socialButtonStyles = classNames(
    {
      'w-[72px] h-[72px] text-white-light bg-primary-light-100 first-of-type:rounded-tl-normal last-of-type:rounded-bl-normal':
        variant === 'fixed',
      'w-8 h-8 text-body bg-primary-light-1000 rounded-normal':
        variant !== 'fixed',
    },
    'flex items-center justify-center',
    'hover:text-primary-light-900 active:text-primary-light-600',
    'focus:text-primary-light-500 focus:outline-none',
    className,
  );

  return (
    <a
      href={link}
      rel="noopener noreferrer"
      target="_blank"
      className={socialButtonStyles}
      aria-label={aria_label}
    >
      {children}
    </a>
  );
};
