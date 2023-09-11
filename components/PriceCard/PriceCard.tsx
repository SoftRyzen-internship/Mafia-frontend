import classNames from 'classnames';

import { ButtonPrimary } from '@/components/Buttons';
import { Heading } from '@/components/Heading';
import { PricePackConditions } from '@/components/PricePackConditions';
import { PricePackNotes } from '@/components/PricePackNotes';

import { PriceCardProps } from '@/types';

import data from '@/data/pricingSectionData.json';

import css from './PriceCard.module.css';

export const PriceCard: React.FC<PriceCardProps> = ({ rate }) => {
  const { rateType, amount } = rate;
  const {
    priceCard: { currency },
    button,
  } = data;

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

  return (
    <li className={cardStyles}>
      <Heading variant="secondary" tag="h3" className="mb-5 xl:mb-4">
        {rateType}
      </Heading>

      <span className={priceStyles}>
        {amount} {currency}
      </span>

      <PricePackConditions rate={rate} />

      <PricePackNotes rate={rate} />

      <ButtonPrimary className="mx-auto mt-6 xl:mt-[30px]">
        {button}
      </ButtonPrimary>
    </li>
  );
};
