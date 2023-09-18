import { CorporateHero } from '@/views/CorporateHero';
import { CorporateInviteGame } from '@/views/CorporateInviteGame';
import { CorporatePresenters } from '@/views/CorporatePresenters';
import { Pricing } from '@/views/Pricing';

const CorporateParties = () => {
  return (
    <>
      <CorporateHero />
      <CorporatePresenters />
      <Pricing variant="corporate" />
      <CorporateInviteGame />
    </>
  );
};

export default CorporateParties;
