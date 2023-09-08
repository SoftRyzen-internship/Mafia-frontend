import classNames from 'classnames';

import { Heading } from '@/components/Heading';
import { PriceCard } from '@/components/PriceCard';

import css from './Pricing.module.css';

export interface PricingProps {
  page: 'kids-mafia' | 'corporate';
}

export const Pricing = ({ page }) => {
  const sectionStyles = classNames(
    'py-[80px] bg-no-repeat bg-center bg-cover',
    {
      [css.sectionKids]: page === 'kids-mafia',
      [css.sectionCorporate]: page === 'corporate',
    },
  );
  return (
    <section className={sectionStyles}>
      {/* replace with Container component */}
      <div
        className="mx-auto max-w-[480px] px-6 md:max-w-[768px] 
        xl:max-w-[1216px] xxl:max-w-[1752px]"
      >
        <Heading variant="secondary" shadow="Вартість" className="mb-[60px]">
          Вартість
        </Heading>
        <ul className="flex flex-wrap justify-center gap-6">
          <PriceCard />
          <PriceCard />
        </ul>
      </div>
    </section>
  );
};
