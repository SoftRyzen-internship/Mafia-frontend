import { HomeHero } from '@/views/HomeHero';
import { CorporateParties } from '@/views/CorporateParties';

import { Slider } from '@/components/Slider';

const Home = () => {
  return (
    <>
      <HomeHero />
      <CorporateParties />
      <Slider section="school" />
    </>
  );
};

export default Home;
