import Title from '@/components/Title/Title';

import data from '@/data/common.json';
import { Tournaments } from '@/views/Tournaments';
// import { KidsMafiaClub } from '@/views/KidsMafiaClub';

const Home = () => {
  const mainPage = data.mainPage;
  return (
    <>
      <Title>{mainPage.title}</Title>
      <p className="font-montserrat">{mainPage.description}</p>
      <Tournaments />
      {/* <KidsMafiaClub /> */}
    </>
  );
};

export default Home;
