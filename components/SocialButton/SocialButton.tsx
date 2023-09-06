import classNames from 'classnames';

import SocialIcon from '../SocialIcon/SocialIcon';

import { SocialButtonProps } from '@/types';

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
      aria-label="social media"
    >
      <SocialIcon icon={social.icon} styles={socialIconStyles} />
    </a>
  );
};

export default SocialButton;
