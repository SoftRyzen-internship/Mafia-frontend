import Title from '@/components/Title/Title';

// temp for testing
import SocialsList from '@/components/SocialsList/SocialsList';
import SocialsMenu from '@/components/SocialsMenu/SocialsMenu';

// temp for testing
import SocialsList from '@/components/SocialsList/SocialsList';
import SocialsMenu from '@/components/SocialsMenu/SocialsMenu';

import data from '@/data/common.json';
import { ButtonSecondary } from '@/components/Buttons';

const Home = () => {
  const mainPage = data.mainPage;
  return (
    <>
      <Title>{mainPage.title}</Title>
      <p className="font-montserrat">{mainPage.description}</p>
      <ButtonSecondary linkto="/">hello</ButtonSecondary>

      {/* temp for testing */}
      <SocialsList className={'gap-7'} />
      <SocialsMenu />
    </>
  );
};

export default Home;
