import { request } from 'graphql-request';

import { GET_PRESENTERS } from '@/api';
import { PresentersDataType, PresenterItemProps } from '@/types';

const baseURL = 'https://mafia-cms.onrender.com/graphql';

export async function getPresenters(): Promise<PresenterItemProps[]> {
  const data: PresentersDataType = await request(baseURL, GET_PRESENTERS);
  return data.presenters.data;
}
