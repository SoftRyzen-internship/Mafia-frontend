import SocialButton from '@/components/SocialButton/SocialButton';

import { SocialContact } from '@/types';

import data from '@/data/socials.json';

const SocialsMenu = () => {
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
    <ul className="shadow-xs fixed bottom-[80px] right-0 z-10 rounded-l-normal smOnly:hidden">
      {menuSocials.map(social => (
        <SocialButton
          key={social.name}
          social={social}
          btnClassName="w-[72px] h-[72px] text-white-light bg-primary-light-100
                    first-of-type:rounded-tl-normal last-of-type:rounded-bl-normal
                    hover:bg-grad_600"
        />
      ))}
    </ul>
  );
};

export default SocialsMenu;
