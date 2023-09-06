import classNames from 'classnames';

import SocialButton from '@/components/SocialButton/SocialButton';

import { SocialContact } from '@/types/commonData';

import data from '@/data/socials.json';

import styles from './SocialsMenu.module.css';

const SocialsMenu = () => {
  const listStyles = classNames(
    {
      'smOnly:hidden fixed right-0 bottom-[80px] z-10 rounded-l': true,
    },
    styles.socials,
  );

  // Sort the array with Telegram first
  const shuffleSocials = (arr: SocialContact[]): SocialContact[] => {
    const sortedArray = arr.slice(); // Create a new copy of the array
    const telegramIndex = sortedArray.findIndex(
      item => item.name === 'telegram',
    );

    if (telegramIndex !== -1) {
      const firstItem = sortedArray[telegramIndex];
      sortedArray.splice(telegramIndex, 1);
      sortedArray.unshift(firstItem);
    }

    return sortedArray;
  };

  const menuSocials = shuffleSocials(data);

  return (
    <ul className={listStyles}>
      {menuSocials.map(social => (
        <SocialButton
          key={social.name}
          social={social}
          btnClassName="w-[72px] h-[72px] text-white-light bg-primary-light-100 
                    first-of-type:rounded-tl last-of-type:rounded-bl"
        />
      ))}
    </ul>
  );
};

export default SocialsMenu;
