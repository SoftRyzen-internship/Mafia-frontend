import { MafiaSchoolHeroSection } from '@/views/MafiaSchoolHeroSection';
import { Pricing } from '@/views/Pricing';
import { KidsMafiaClub } from '@/views/KidsMafiaClub';

const MafiaKids = () => {
  return (
    <>
      <MafiaSchoolHeroSection />
      <Pricing variant="kids-mafia" />
      <KidsMafiaClub />
    </>
  );
};

export default MafiaKids;
