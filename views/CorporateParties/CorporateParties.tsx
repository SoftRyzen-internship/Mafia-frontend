import { Heading } from '@/components/Heading';
import { Section } from '@/components/Section';

import data from '@/data/corporateParties.json';

const { primary_title, secondary_title } = data;

export const CorporateParties = () => {
  return (
    <Section>
      <div className="container">
        <Heading shadow={primary_title}>{primary_title}</Heading>
        <Heading tag="h3" variant="secondary">
          {secondary_title}
        </Heading>
      </div>
    </Section>
  );
};
