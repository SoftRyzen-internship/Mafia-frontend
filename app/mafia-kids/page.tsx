import { MafiaSchoolHeroSection } from '@/views/MafiaSchoolHeroSection';
import { Pricing } from '@/views/Pricing';
import { KidsMafiaClub } from '@/views/KidsMafiaClub';

const MafiaKids = () => {
  return (
    <div className="common-bg-kids">
      <MafiaSchoolHeroSection />
      <Pricing />
      <KidsMafiaClub />
    </div>
  );
};

export default MafiaKids;
