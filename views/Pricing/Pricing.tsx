import classNames from 'classnames';

import { fetchPricing } from '@/utils/api/fetchPricing';

import { Heading } from '@/components/Heading';
import { PriceCard } from '@/components/PriceCard';
import { Fallback } from '@/components/Fallback';

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
        <Heading variant="primary" shadow={data.title} className="mb-[60px]">
          {data.title}
        </Heading>

        {pricesInfo && pricesInfo?.length > 0 ? (
          <ul className="flex flex-wrap justify-center gap-6">
            {pricesInfo &&
              pricesInfo.map(info => (
                <PriceCard key={info.id} rate={info.attributes} />
              ))}
          </ul>
        ) : (
          <Fallback />
        )}
      </div>
    </section>
  );
};
