import Title from '@/components/Title/Title';

// temp
import { PriceCard } from '@/components/PriceCard';

import data from '@/data/common.json';

const Home = () => {
  const mainPage = data.mainPage;
  return (
    <>
      <Title>{mainPage.title}</Title>
      <p className="font-montserrat">{mainPage.description}</p>

      {/* temp */}
      <PriceCard />
    </>
  );
};

export default Home;
