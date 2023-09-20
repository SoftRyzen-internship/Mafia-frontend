import { request } from 'graphql-request';

import { GET_PRESENTERS } from '@/api';
import { PresentersDataType, PresenterItemProps } from '@/types';

const BASE_URL = process.env.API_BASE_URL as string;

export async function getPresenters(): Promise<
  PresenterItemProps[] | undefined
> {
  try {
    const data: PresentersDataType = await request(BASE_URL, GET_PRESENTERS);
    return data.presenters.data;
  } catch (error) {
    return [];
  }
}
