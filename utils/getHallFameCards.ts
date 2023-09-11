import { request } from 'graphql-request';

import { GET_HALLFAME_CARDS } from '@/components/api';
import { HallFameCardDataType, HallFameCardProps } from '@/types';

const baseURL = 'https://mafia-cms.onrender.com/graphql';

export async function getHallFameCards(): Promise<HallFameCardProps[]> {
  try {
    const data: HallFameCardDataType = await request(
      baseURL,
      GET_HALLFAME_CARDS,
    );
    return data.flipCards.data;
  } catch (error) {
    console.error('Error fetching Hall of Fame cards:', error);
    throw error;
  }
}
