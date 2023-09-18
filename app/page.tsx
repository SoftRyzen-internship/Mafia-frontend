import { HomeHero } from '@/views/HomeHero';
import { MafiaSchool } from '@/views/MafiaSchool';
import { CorporateParties } from '@/views/CorporateParties';
import { KidsMafia } from '@/views/KidsMafia';

const Home = () => (
  <>
    <HomeHero />
    <div className="common-bg">
      <MafiaSchool />
      <CorporateParties />
      <KidsMafia />
    </div>
  </>
);

export default Home;
