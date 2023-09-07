import Title from '@/components/Title/Title';

import data from '@/data/common.json';
import { Schedule } from '@/components/Schedule';

const Home = () => {
  const mainPage = data.mainPage;
  return (
    <>
      <Title>{mainPage.title}</Title>
      <p className="font-montserrat">{mainPage.description}</p>
      <Schedule />
    </>
  );
};

export default Home;
