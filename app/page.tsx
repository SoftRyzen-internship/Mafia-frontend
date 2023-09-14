import { HomeHero } from '@/views/HomeHero';
import { CorporateParties } from '@/views/CorporateParties';
import { KidsMafia } from '@/views/KidsMafia';

// FOR SAMPLE OF PRESENTERS SLIDER ==========
import { Slider } from '@/components/Slider';
import { SliderPresentersElement } from '@/components/SliderPresentersElement';
import { getPresenters } from '@/utils/api/getPresenters';
import { HallFameSection } from '@/views/HallFameSection';
// ==========================================

const Home = async () => {
  const presentersData = await getPresenters();
  return (
    <>
      <HallFameSection />
      <HomeHero />
      <CorporateParties />
      <KidsMafia />

      <div className="container">
        <Slider
          pagination
          section="presenters"
          element={SliderPresentersElement}
          data={presentersData}
        />
      </div>
    </>
  );
};

export default Home;
