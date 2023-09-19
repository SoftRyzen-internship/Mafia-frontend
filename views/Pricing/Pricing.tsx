import { fetchPricing } from '@/utils/api/fetchPricing';

import { Heading } from '@/components/Heading';
import { PriceCard } from '@/components/PriceCard';
import { Fallback } from '@/components/Fallback';

import data from '@/data/pricingSectionData.json';

export const Pricing: React.FC = async () => {
  const pricesInfo = await fetchPricing();

  return (
    <section className="mx-auto bg-cover bg-top bg-no-repeat py-[80px]">
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
