import Title from '@/components/Title/Title';

// temp
import { Pricing } from '@/views/Pricing';

import data from '@/data/common.json';

const Home = () => {
  const mainPage = data.mainPage;
  return (
    <>
      <Title>{mainPage.title}</Title>
      <p className="font-montserrat">{mainPage.description}</p>

      {/* temp */}
      <Pricing page={'corporate'} />
      <Pricing page={'kids-mafia'} />
    </>
  );
};

export default Home;
