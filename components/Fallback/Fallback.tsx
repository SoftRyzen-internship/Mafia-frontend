import classNames from 'classnames';

import { Paragraph } from '../Paragraph';

import SadSmile from '@/public/icons/smile-sad.svg';
import data from '@/data/common.json';
import css from './Fallback.module.css';

type FallbackVariants = 'default' | 'small';

interface FallbackProps {
  variant?: FallbackVariants;
  className?: string;
}

export const Fallback: React.FC<FallbackProps> = ({
  variant = 'default',
  className = '',
}) => {
  const { fallbackText } = data;

  const wrapClasses = classNames(
    'flex h-[152px] flex-col items-center justify-center rounded-normal bg-body w-full',
    {
      'gap-[30px] h-[462px]': variant === 'default',
      [css.bg_image]: variant === 'default',
      'gap-[6px] h-[152px] md:w-[236px] xl:w-[300px] xxl:w-[418px]':
        variant === 'small',
    },
    className,
  );

  const textClasses = classNames('text-center', {
    'w-[273px]': variant === 'default',
    'w-[178px]': variant === 'small',
  });

  return (
    <div className={wrapClasses}>
      <Paragraph
        variant={variant === 'default' ? 'large' : 'normal'}
        className={textClasses}
      >
        {fallbackText}
      </Paragraph>

      <SadSmile
        width={variant === 'default' ? 78 : 48}
        height={variant === 'default' ? 78 : 48}
      />
    </div>
  );
};
