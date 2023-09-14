import React, { FC } from 'react';

import classNames from 'classnames';

import { Heading } from '@/components/Heading';
import { Paragraph } from '@/components/Paragraph';
import { TournamentBlock } from '@/components/TournamentBlock';

import { getTournaments } from '@/utils/getTournaments';

import data from '@/data/tournaments.json';

import s from './TournamentsSection.module.css';

export const TournamentsSection: FC = async () => {
  const { title, text } = data;

  const tournaments = await getTournaments();

  return (
    <section
      className={classNames(
        'pb-0 pt-[53px] md:pt-[75px] xl:pt-[82px] xxl:pt-[98px]',
        s.section,
      )}
    >
      <div className={classNames('pt-[80px]', s.hero)}>
        <div className="container pb-[78px] md:pb-[60px]">
          <Heading className="mb-6" shadow={title}>
            {title}
          </Heading>
          <Paragraph className="text-base">{text}</Paragraph>
        </div>
      </div>
      {tournaments &&
        tournaments.map(tournament => (
          <TournamentBlock
            key={tournament.id}
            tournament={tournament.attributes}
          />
        ))}
    </section>
  );
};
