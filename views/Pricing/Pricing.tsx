import classNames from 'classnames';

import { fetchPricing } from '@/utils/api/fetchPricing';

import { Heading } from '@/components/Heading';
import { PriceCard } from '@/components/PriceCard';

import { PricingProps } from '@/types';

import data from '@/data/pricingSectionData.json';

import css from './Pricing.module.css';

export const Pricing: React.FC<PricingProps> = async ({
  variant = 'corporate',
}) => {
  const pricesInfo = await fetchPricing();

  const sectionStyles = classNames(
    'py-[80px] mx-auto bg-no-repeat bg-top bg-cover',
    {
      [css.sectionKids]: variant === 'kids-mafia',
      [css.sectionCorporate]: variant === 'corporate',
    },
  );
  return (
    <section className={sectionStyles}>
      <div className="container">
        <Heading variant="secondary" shadow="Вартість" className="mb-[60px]">
          {data.title}
        </Heading>

        <ul className="flex flex-wrap justify-center gap-6">
          {pricesInfo &&
            pricesInfo.map(info => (
              <PriceCard key={info.id} rate={info.attributes} />
            ))}
        </ul>
      </div>
    </section>
  );
};
