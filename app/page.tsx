import { HomeHero } from '@/views/HomeHero';
import { CorporateParties } from '@/views/CorporateParties';
import { KidsMafia } from '@/views/KidsMafia';

import { Slider } from '@/components/Slider';
import { SliderPresentersElement } from '@/components/SliderPresentersElement';
import { getPresenters } from '@/utils/api/getPresenters';

const Home = async () => {
  const presentersData = await getPresenters();
  return (
    <>
      <HomeHero />
      <CorporateParties />
      <KidsMafia />

      <div className="container">
        <Slider
          pagination
          section="presenters"
          element={SliderPresentersElement}
          data={presentersData}
          className="bg-red-500"
        />
      </div>
    </>
  );
};

export default Home;
