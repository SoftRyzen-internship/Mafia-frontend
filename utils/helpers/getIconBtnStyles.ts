import classNames from 'classnames';
import { IconBtnName } from '@/types';

function getIconBtnStyles(icon: IconBtnName, isIcon: boolean): string {
  const isCross = icon.toLowerCase() === 'cross';
  const isArrow = icon.toLowerCase() === 'arrow';
  const isScroll = icon.toLowerCase() === 'scroll';

  // if styling of icon inside the button is needed
  if (isIcon) {
    return classNames({
      functionIcon: true,
      'functionIcon--cross': isCross,
      'functionIcon--scroll': isScroll,
    });
  }

  // if styling of button itself is needed
  return classNames({
    iconBtn: true,
    'iconBtn--cross': isCross,
    'iconBtn--arrow': isArrow,
    'iconBtn--scroll': isScroll,
  });
}

export default getIconBtnStyles;
