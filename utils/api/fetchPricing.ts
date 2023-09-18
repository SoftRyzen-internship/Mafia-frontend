import { request } from 'graphql-request';

import { getPrices } from '@/api';

import { PricesData, PricesDataType } from '@/types';

export const fetchPricing = async (): Promise<PricesData> => {
  const baseURL = process.env.API_BASE_URL;

  try {
    const data: PricesDataType = await request(baseURL as string, getPrices);
    const result = data.prices.data;
    return result;
  } catch (error) {
    return [];
  }
};
