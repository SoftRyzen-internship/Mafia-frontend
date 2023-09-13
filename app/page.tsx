import { CorporateParties } from '@/views/CorporateParties';

import { Slider } from '@/components/Slider';
import { SliderPresentersElement } from '@/components/SliderPresentersElement';
import { getPresenters } from '@/utils/helpers/getPresenters';

const Home = async () => {
  const presentersData = await getPresenters();
  return (
    <>
      <CorporateParties />
      <div className="container">
        <Slider
          section="presenters"
          element={SliderPresentersElement}
          data={presentersData}
        />
      </div>
    </>
  );
};

export default Home;
