import Image from 'next/image';

import { Section } from '@/components/Section';
import { Heading } from '@/components/Heading';
import { Paragraph } from '@/components/Paragraph';
import { LearnList } from '@/components/LearnList';

import data from '@/data/schoolSection.json';

export const MafiaSchool = () => {
  const { title, intro, invite, image, subtitle, description, join } = data;

  return (
    <Section>
      <div className="container">
        <Heading variant="primary" shadow={title}>
          {title}
        </Heading>
        <Paragraph>{intro}</Paragraph>
        <Paragraph>{invite}</Paragraph>
        <div>
          <Image src={image} alt="" width={400} height={600} />
        </div>
        <Heading variant="secondary">{subtitle}</Heading>
        <LearnList />
        <Paragraph>{description}</Paragraph>
        <Paragraph>{join}</Paragraph>
      </div>
    </Section>
  );
};
