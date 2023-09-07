import crossIcon from '@/public/icons/cross.svg';
import arrowIcon from '@/public/icons/nav-right.svg';
import upIcon from '@/public/icons/scroll-up.svg';

import { IconBtnName } from '@/types';

function getIconByName(icon: IconBtnName): any | null {
  let iconRef = null;

  switch (icon.toLowerCase()) {
    case 'cross':
      iconRef = crossIcon;
      break;

    case 'arrow':
      iconRef = arrowIcon;
      break;

    case 'scroll':
      iconRef = upIcon;
      break;

    default:
      break;
  }

  return { iconRef };
}

export default getIconByName;
