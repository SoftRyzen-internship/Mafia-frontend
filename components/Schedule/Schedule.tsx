import React, { FC } from 'react';

import { ScheduleItem } from '../ScheduleItem';
import { getSchedule } from '@/utils/api/getSchedule';
import { ScheduleProps } from '@/types';
import { Fallback } from '../Fallback';

export const Schedule: FC<ScheduleProps> = async ({ className }) => {
  const schedules = await getSchedule();

  return (
    <>
      {schedules.length > 0 ? (
        <ul
          className={`grid gap-4 md:w-[236px] xl:w-[300px] xxl:w-[418px] ${className}`}
        >
          {schedules.map(scheduleItem => {
            return (
              <li
                key={scheduleItem.id}
                className=" flex justify-between rounded-md bg-grad_700 py-2 pr-4"
              >
                <ScheduleItem {...scheduleItem} />
              </li>
            );
          })}
        </ul>
      ) : (
        <Fallback variant="small" className="mb-6" />
      )}
    </>
  );
};
