import Title from '@/components/Title/Title';

import data from '@/data/common.json';

import { Slider } from '@/components/Slider';

const Home = () => {
  const mainPage = data.mainPage;
  return (
    <>
      <Title>{mainPage.title}</Title>
      <p className="font-montserrat">{mainPage.description}</p>
      <Slider />
    </>
  );
};

export default Home;
