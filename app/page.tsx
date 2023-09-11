import Title from '@/components/Title/Title';

import data from '@/data/common.json';
// import { TournamentsSection } from '@/views/TournamentsSection';
import { KidsMafiaClub } from '@/views/KidsMafiaClub';

const Home = () => {
  const mainPage = data.mainPage;
  return (
    <>
      <Title>{mainPage.title}</Title>
      <p className="font-montserrat">{mainPage.description}</p>
      {/* <TournamentsSection /> */}
      <KidsMafiaClub />
    </>
  );
};

export default Home;
