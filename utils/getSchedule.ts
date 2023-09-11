import { request } from 'graphql-request';

import { GET_SCHEDULE } from '@/api';
import { ScheduleDataType, ScheduleItemProps } from '@/types';

const baseURL = 'https://mafia-cms.onrender.com/graphql';

export async function getSchedule(): Promise<ScheduleItemProps[]> {
  const data: ScheduleDataType = await request(baseURL, GET_SCHEDULE);
  return data.schedule.data.attributes.schedules;
}
