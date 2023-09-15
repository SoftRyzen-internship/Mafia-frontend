import { HomeHero } from '@/views/HomeHero';
import { MafiaSchool } from '@/views/MafiaSchool';

import { CorporateParties } from '@/views/CorporateParties';
import { KidsMafia } from '@/views/KidsMafia';

// FOR SAMPLE OF PRESENTERS SLIDER ==========
// import { Slider } from '@/components/Slider';
// import { SliderPresentersElement } from '@/components/SliderPresentersElement';
// import { getPresenters } from '@/utils/api/getPresenters';
// ==========================================

const Home = async () => {
  // const presentersData = await getPresenters();
  return (
    <div className="">
      <HomeHero />
      <MafiaSchool />
      <CorporateParties />
      <KidsMafia />

      {/* <div className="container">
        <Slider
          pagination
          section="presenters"
          element={SliderPresentersElement}
          data={presentersData}
        />
      </div> */}
    </div>
  );
};

export default Home;
