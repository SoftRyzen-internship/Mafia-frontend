import { Heading } from '@/components/Heading';
import { Section } from '@/components/Section';
import { PrivacyPolicyInfo } from '@/components/PrivacyPolicyInfo';

import data from '@/data/privacyPolicy.json';

import css from './PrivacyPolicy.module.css';

export const PrivacyPolicy = () => {
  const { title } = data;

  return (
    <Section
      className={`${css.bg_img}  pt-[134px] md:pt-[156px] xl:pt-[163px] xxl:pt-[179px]`}
    >
      <div className="container">
        <Heading variant="privacy-policy" className="mb-[60px] " tag="h1">
          {title}
        </Heading>

        <PrivacyPolicyInfo />
      </div>
    </Section>
  );
};
