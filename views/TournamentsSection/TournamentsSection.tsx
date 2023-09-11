'use client';

import React, { FC, useEffect, useState } from 'react';

import classNames from 'classnames';
import { request } from 'graphql-request';

import { Heading } from '@/components/Heading';
import { Paragraph } from '@/components/Paragraph';
import { TournamentBlock } from '@/components/TournamentBlock';

import { ITournamentItem, ITournamentsData } from '@/types';

import { GET_TOURNAMENTS } from '@/api/getTournaments';

import data from '@/data/tournaments.json';

import s from './TournamentsSection.module.css';

const BASE_URL = 'https://mafia-cms.onrender.com/graphql';

export const TournamentsSection: FC = () => {
  const { title, text } = data;
  const [tournaments, setTournaments] = useState<ITournamentItem[] | null>(
    null,
  );

  async function getTournaments(): Promise<void> {
    const data: ITournamentsData = await request(BASE_URL, GET_TOURNAMENTS);
    setTournaments(data.tournaments.data);
  }

  useEffect(() => {
    getTournaments();
  }, []);

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
