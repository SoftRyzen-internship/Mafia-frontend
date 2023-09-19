import { CorporateHero } from '@/views/CorporateHero';
import { CorporateInviteGame } from '@/views/CorporateInviteGame';
import { CorporatePresenters } from '@/views/CorporatePresenters';
import { Pricing } from '@/views/Pricing';

const CorporateParties = () => {
  return (
    <div className="common-bg-corporate">
      <CorporateHero />
      <CorporatePresenters />
      <Pricing />
      <CorporateInviteGame />
    </div>
  );
};

export default CorporateParties;
