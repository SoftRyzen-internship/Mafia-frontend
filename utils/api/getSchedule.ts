import { request } from 'graphql-request';

import { GET_SCHEDULE } from '@/api';
import { ScheduleDataType, ScheduleItemProps } from '@/types';

const baseURL = process.env.API_BASE_URL as string;

export async function getSchedule(): Promise<ScheduleItemProps[]> {
  try {
    const data: ScheduleDataType = await request(baseURL, GET_SCHEDULE);
    return data.schedule.data.attributes.schedules;
  } catch {
    return [];
  }
}
