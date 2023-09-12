import HallFameList from '@/components/HallFameList/HallFameList';
import Title from '@/components/Title/Title';

import data from '@/data/common.json';

const Home = () => {
  const mainPage = data.mainPage;
  return (
    <>
      <Title>{mainPage.title}</Title>
      <p className="font-montserrat">{mainPage.description}</p>
      <HallFameList />
    </>
  );
};

export default Home;
