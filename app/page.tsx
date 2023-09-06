import Title from '@/components/Title/Title';

import data from '@/data/common.json';
import { ButtonSecondary } from '@/components/Buttons';

const Home = () => {
  const mainPage = data.mainPage;
  return (
    <>
      <Title>{mainPage.title}</Title>
      <p className="font-montserrat">{mainPage.description}</p>
      <ButtonSecondary linkto="/">hello</ButtonSecondary>
    </>
  );
};

export default Home;
