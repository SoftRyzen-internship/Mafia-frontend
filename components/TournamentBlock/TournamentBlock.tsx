import React, { FC } from 'react';
import Image from 'next/image';
import { Heading } from '../Heading';
import { Paragraph } from '../Paragraph';

import { parseTextToHTML } from '@/utils/helpers/parseTextToHTML';
import { generateTeamText } from '@/utils/helpers/generateTeamText';

import { TournamentBlockProps } from '@/types';

export const TournamentBlock: FC<TournamentBlockProps> = ({
  tournament,
  priorityImg,
}) => {
  const { title, type, playersInTeam, description, image } = tournament;
  const { url, alternativeText } = image.data.attributes;

  const teamText = generateTeamText(playersInTeam);

  const htmlString = parseTextToHTML(description);

  return (
    <div className="tournament-block">
      <div className="tournament-container container md:flex md:items-center md:gap-6">
        <div className="w-full xl:w-[516px] smOnly:mb-[60px]">
          <Heading
            tag="h2"
            variant="secondary"
            className="tournament-block-title mb-[34px] xl:mb-8"
          >
            {title}
          </Heading>
          <Paragraph variant="large" className="mb-4">
            {type}
          </Paragraph>
          <Paragraph className="mb-6 text-base text-gray md:mb-[46px] xl:mb-[50px]">
            {teamText}
          </Paragraph>
          <div dangerouslySetInnerHTML={{ __html: htmlString }} />
        </div>
        <div className="tournament-block-img-wrapper xxl-min-w-[716px] relative flex min-h-[288px] items-center  justify-center bg-[#040404] p-5 md:h-[285px]  md:min-w-[236px] md:basis-[236px]  xl:min-h-[483px]  xl:min-w-[493px] xl:basis-[493px] xxl:basis-[716px]">
          <Image
            src={url}
            alt={alternativeText || title}
            priority={priorityImg}
            height={288}
            width={272}
            className="h-full min-w-full object-contain  smOnly:h-[288px]"
          />
        </div>
      </div>
    </div>
  );
};
