import crossIcon from '@/public/icons/cross.svg';
import arrowIcon from '@/public/icons/nav-right.svg';
import upIcon from '@/public/icons/scroll-up.svg';

import { IconBtnName } from '@/types';

function getIconByName(icon: IconBtnName): any | null {
  let iconRef = null;
  let iconFunction = 'Кнопка';
  let iconLabel = 'Іконка';

  switch (icon.toLowerCase()) {
    case 'cross':
      iconRef = crossIcon;
      iconFunction = iconFunction + ' "Закрити"';
      iconLabel = iconLabel + ' з хрестиком';
      break;

    case 'arrow':
      iconRef = arrowIcon;
      iconFunction = iconFunction + ' навігації';
      iconLabel = iconLabel + ' з навігаційною стрілкою';
      break;

    case 'scroll':
      iconRef = upIcon;
      iconFunction = iconFunction + ' "Повернутись до початку"';
      iconLabel = iconLabel + ' з стрілкою вгору';
      break;

    default:
      break;
  }

  return { iconRef, iconFunction, iconLabel };
}

export default getIconByName;
