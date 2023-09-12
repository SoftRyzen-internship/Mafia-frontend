import { CorporateParties } from '@/views/CorporateParties';

import { Slider } from '@/components/Slider';
import { SliderSchoolElement } from '@/components/SliderSchoolElement';
import schoolData from '@/data/schoolSection.json';

const Home = async () => {
  return (
    <>
      <CorporateParties />
      <Slider
        section="school"
        pagination
        navigation
        data={schoolData.swiperData}
        element={SliderSchoolElement}
      />
    </>
  );
};

export default Home;
