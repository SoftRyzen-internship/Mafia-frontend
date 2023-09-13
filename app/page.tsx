import { CorporateParties } from '@/views/CorporateParties';

import { Slider } from '@/components/Slider';
import { SliderSchoolElement } from '@/components/SliderSchoolElement';
import schoolData from '@/data/schoolSection.json';
import MafiaSchoolHeroSection from '@/views/MafiaSchoolHeroSection/MafiaSchoolHeroSection';

const Home = () => {
  return (
    <>
      <MafiaSchoolHeroSection />
      <CorporateParties />
      <div className="container">
        <Slider
          section="school"
          navigation
          pagination
          element={SliderSchoolElement}
          data={schoolData.swiperData}
        />
      </div>
    </>
  );
};

export default Home;
