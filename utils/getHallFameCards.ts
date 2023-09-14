import { request } from 'graphql-request';

import { GET_HALLFAME_CARDS } from '@/api/hallOfFameCardsQuery';
import { HallFameCardDataType, HallFameCardProps } from '@/types';

const baseURL = process.env.API_BASE_URL as string;

export async function getHallFameCards(): Promise<HallFameCardProps[]> {
  try {
    const data: HallFameCardDataType = await request(
      baseURL,
      GET_HALLFAME_CARDS,
    );
    return data.flipCards.data;
  } catch (error) {
    console.error('Error fetching Hall of Fame cards:', error); //TO-DO обробити помилку коли зявиться картинка-заглушка
    throw error;
  }
}
