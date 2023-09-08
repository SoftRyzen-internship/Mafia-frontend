import { request } from 'graphql-request';

import { GET_SCHEDULE } from '@/components/api';
import { ScheduleDataType } from '@/types';

const baseURL = 'https://mafia-cms.onrender.com/graphql';

export async function getSchedule(): Promise<ScheduleDataType> {
  const data: ScheduleDataType = await request(baseURL, GET_SCHEDULE);
  return data;
}
