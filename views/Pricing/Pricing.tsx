import { PriceCard } from '@/components/PriceCard';

export const Pricing = () => {
  return (
    <section className="px-6">
      <ul className="flex flex-wrap justify-center gap-6">
        <PriceCard />
        <PriceCard />
      </ul>
    </section>
  );
};
