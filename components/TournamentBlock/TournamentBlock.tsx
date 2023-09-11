import React, { FC } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { Heading } from '../Heading';
import { Paragraph } from '../Paragraph';

import s from './TournamentBlock.module.css';

import { TournamentBlockProps } from '@/types';

export const TournamentBlock: FC<TournamentBlockProps> = ({ tournament }) => {
  const { title, type, playersInTeam, description, image } = tournament;
  const { url, alternativeText } = image.data.attributes;

  const teamText = generateTeamText(playersInTeam);

  const htmlString = parseTextToHTML(description);

  return (
    <div className={classNames('pb-20 pt-[96px]', s.tournamentBlock)}>
      <div
        className={classNames(
          'container md:flex md:items-center md:gap-6 ',
          s.tournamentContainer,
        )}
      >
        <div className="w-full xl:w-[516px] smOnly:mb-[60px]">
          <Heading
            tag="h3"
            variant="secondary"
            className={classNames('mb-[34px] xl:mb-8', s.title)}
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
        <div
          className={`${s.imgWrapper} xxl-min-w-[716px] relative flex min-h-[288px] items-center  justify-center bg-[#040404] p-5 md:h-[285px]  md:min-w-[236px] md:basis-[236px]  xl:min-h-[483px]  xl:min-w-[493px] xl:basis-[493px] xxl:basis-[716px]`}
        >
          <Image
            src={url}
            alt={alternativeText || title}
            priority
            height={288}
            width={272}
            className="h-full min-w-full object-contain  smOnly:h-[288px]"
          />
        </div>
      </div>
    </div>
  );
};

function generateTeamText(playersInTeam: number): string {
  let ending;

  if (playersInTeam % 10 === 1 && playersInTeam % 100 !== 11) {
    ending = 'оба';
  } else if (
    [2, 3, 4].includes(playersInTeam % 10) &&
    ![12, 13, 14].includes(playersInTeam % 100)
  ) {
    ending = 'оби';
  } else {
    ending = 'іб';
  }

  return `${playersInTeam} ос${ending} у команді`;
}

function parseTextToHTML(text) {
  const paragraphs = text.split('\n');
  const htmlParagraphs = paragraphs.map(paragraph => {
    if (paragraph) return `<p>${paragraph}</p>`;
    return '<br>';
  });
  const htmlContent = htmlParagraphs.join('\n');

  return htmlContent;
}
