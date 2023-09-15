import { request } from 'graphql-request';

import { getPrivacyPolicy } from '@/api';

import { IPrivacyPolicy } from '@/types';

export const fetchPrivacyPolicy = async (): Promise<string | undefined> => {
  try {
    const data: IPrivacyPolicy = await request(
      process.env.API_BASE_URL as string,
      getPrivacyPolicy,
    );
    const result = data.privacyPolicy.data.attributes.text;
    return result;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
