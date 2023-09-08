import { ButtonPrimary } from '@/components/Buttons';
import { Heading } from '@/components/Heading';

import css from './PriceCard.module.css';

export const PriceCard = () => {
  return (
    // temp
    <li className="max-w-[432px] list-none rounded-normal bg-primary-dark-400 p-9 shadow-xl">
      <Heading variant="secondary" tag="h3" className="mb-5">
        Мінімальний
      </Heading>
      <span className="text-[20px] font-semibold leading-[28px] xl:text-[24px] xl:leading-[32px]">
        3000 грн*
      </span>
      <ul className="mt-[50px] flex flex-col gap-5 text-[20px] font-medium leading-[28px]">
        <li className={`relative pl-[38px] ${css.condition}`}>1 ведучий</li>
        <li className={`relative pl-[38px] ${css.condition}`}>
          10 осіб у команді**
        </li>
        <li className={`relative pl-[38px] ${css.condition}`}>
          тривалість - 4 год
        </li>
      </ul>
      <ul className="mt-6 flex flex-col gap-3 text-base font-normal leading-6 text-gray">
        <li>*кожний наступний гравець - +250 грн</li>
        <li>**максимальна кількість гравців - 15 осіб</li>
      </ul>
      <ButtonPrimary className="mx-auto mt-6">Замовити</ButtonPrimary>
    </li>
  );
};
