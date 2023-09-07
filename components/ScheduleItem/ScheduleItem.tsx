import React, { FC } from 'react';

import { ScheduleItemProps } from '@/types';

type ScheduleItemType = {
  scheduleItem: ScheduleItemProps;
};

export const ScheduleItem: FC<ScheduleItemType> = ({
  scheduleItem: { time_start, time_end, day },
}) => {
  return (
    <>
      <span>{day}</span>
      <span>
        {time_start.slice(0, 5)} - {time_end.slice(0, 5)}
      </span>
    </>
  );
};
