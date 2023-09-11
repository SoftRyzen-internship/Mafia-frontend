import classNames from 'classnames';

import { fetchPricing } from '@/utils/api/fetchPricing';

import { Heading } from '@/components/Heading';
import { PriceCard } from '@/components/PriceCard';

import { PricingProps } from '@/types';

import css from './Pricing.module.css';

export const Pricing: React.FC<PricingProps> = async ({ variant }) => {
  const pricesInfo = await fetchPricing();

  const sectionStyles = classNames(
    'py-[80px] bg-no-repeat bg-center bg-cover',
    {
      [css.sectionKids]: variant === 'kids-mafia',
      [css.sectionCorporate]: variant === 'corporate',
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
          {pricesInfo &&
            pricesInfo.map(info => (
              <PriceCard key={info.id} rate={info.attributes} />
            ))}
          {/* <PriceCard />
          <PriceCard /> */}
        </ul>
      </div>
    </section>
  );
};
