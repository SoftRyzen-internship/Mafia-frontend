import { MafiaSchoolHeroSection } from '@/views/MafiaSchoolHeroSection';
import { Pricing } from '@/views/Pricing';
import { KidsMafiaClub } from '@/views/KidsMafiaClub';

const MafiaKids = () => {
  return (
    <div className="common-bg-kids">
      <MafiaSchoolHeroSection />
      <Pricing variant="kids-mafia" />
      <KidsMafiaClub />
    </div>
  );
};

export default MafiaKids;
