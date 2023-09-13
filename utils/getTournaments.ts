import { request } from 'graphql-request';

import { ITournamentItem, ITournamentsData } from '@/types';

import { GET_TOURNAMENTS } from '@/api/getTournaments';

const BASE_URL = process.env.API_BASE_URL as string;

export async function getTournaments(): Promise<ITournamentItem[]> {
  try {
    const data: ITournamentsData = await request(BASE_URL, GET_TOURNAMENTS);
    return data.tournaments.data;
  } catch (error) {
    return [];
  }
}
