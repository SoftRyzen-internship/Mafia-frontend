import { CorporateParties } from '@/views/CorporateParties';
import { KidsMafia } from '@/views/KidsMafia';

// import { Slider } from '@/components/Slider';
// import { SliderSchoolElement } from '@/components/SliderSchoolElement';

// import schoolData from '@/data/schoolSection.json';

const Home = () => {
  return (
    <>
      <CorporateParties />
      <KidsMafia />

      {/* Slider example */}
      {/* <div className="container">
        <Slider
          section="school"
          navigation
          pagination
          element={SliderSchoolElement}
          data={schoolData.swiperData}
        />
      </div> */}
    </>
  );
};

export default Home;
