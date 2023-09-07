import classNames from 'classnames';

import { SocialButton } from '@/components/SocialButton';

import { SocialsListProps, SocialContact } from '@/types';

import data from '@/data/socials.json';

export const SocialsList: React.FC<SocialsListProps> = ({
  className = 'gap-5',
}) => {
  const listStyles = classNames('flex', className);

  return (
    <ul className={listStyles}>
      {data.map((social: SocialContact) => (
        <SocialButton
          key={social.name}
          social={social}
          btnClassName="w-8 h-8 text-body bg-primary-light-1000 rounded-normal 
            hover:text-primary-light-900 focus:text-primary-light-500 focus:outline-none
            active:text-primary-light-600"
          iconClassName="w-[26px] h-[26px]"
        />
      ))}
    </ul>
  );
};
