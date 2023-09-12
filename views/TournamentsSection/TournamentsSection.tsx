
import React, { FC } from 'react';


import classNames from 'classnames';
import { request } from 'graphql-request';

import { Heading } from '@/components/Heading';
import { Paragraph } from '@/components/Paragraph';
import { TournamentBlock } from '@/components/TournamentBlock';

import { ITournamentItem, ITournamentsData } from '@/types';

import { GET_TOURNAMENTS } from '@/api/getTournaments';

import data from '@/data/tournaments.json';

import s from './TournamentsSection.module.css';

const BASE_URL = process.env.API_BASE_URL;

async function getTournaments(): Promise<ITournamentItem[]> {
  const data: ITournamentsData = await request(
    BASE_URL as string,
    GET_TOURNAMENTS,
  );
  return data.tournaments.data;
}

export const TournamentsSection: FC = async () => {
  const { title, text } = data;

  const tournaments = await getTournaments();



  return (
    <section className={classNames('pb-0', s.section)}>
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
