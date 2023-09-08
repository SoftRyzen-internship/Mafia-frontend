import classNames from 'classnames';

import { ButtonPrimary } from '@/components/Buttons';
import { Heading } from '@/components/Heading';

import css from './PriceCard.module.css';

export const PriceCard = () => {
  const cardStyles = classNames(
    css.card,
    'rounded-normal py-9 px-6 shadow-xl bg-primary-dark-400 bg-no-repeat bg-right',
    'md:w-[288px] md:px-[21px] md:pt-6',
    'xl:w-[493px] xl:px-[60px] xl:pt-[60px] xl:pb-[54px]',
    'xxl:w-[568px] xl:py-[60px]',
  );

  const priceStyles = classNames(
    css.price,
    'relative text-[20px] font-semibold leading-[28px]',
    'xl:text-[24px] xl:leading-[32px]',
  );

  const conditionStyles = classNames(
    css.condition,
    'relative pl-[38px] xl:pl-[48px]',
  );

  return (
    // temp
    <li className={cardStyles}>
      <Heading variant="secondary" tag="h3" className="mb-5 xl:mb-4">
        Мінімальний
      </Heading>
      <span className={priceStyles}>3000 грн*</span>
      <ul
        className="mt-[54px] flex flex-col gap-5 text-[20px] font-medium leading-[28px]
          xl:mt-[50px]"
      >
        <li className={conditionStyles}>1 ведучий</li>
        <li className={conditionStyles}>10 осіб у команді**</li>
        <li className={conditionStyles}>тривалість - 4 год</li>
      </ul>
      <ul
        className="mt-6 flex flex-col gap-3 text-base font-normal leading-6 text-gray 
        md:w-[185px] xl:w-auto"
      >
        <li>*кожний наступний гравець - +250 грн</li>
        <li>**максимальна кількість гравців - 15 осіб</li>
      </ul>
      <ButtonPrimary className="mx-auto mt-6 xl:mt-[30px]">
        Замовити
      </ButtonPrimary>
    </li>
  );
};
