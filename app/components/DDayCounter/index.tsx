'use client';

import React, {useEffect, useState} from 'react';
import dayjs from 'dayjs';
import {cn} from '@/app/utils/tailwind-utils';

const targetDate = '2025-11-08T13:30:00';

const DDayCounter = () => {
  const [start, setStart] = useState<boolean>(false);
  const [timeCount, setTimeCount] = useState<string | null>(null);
  const [timeDiff, setTimeDiff] = useState<number>(0);

  useEffect(() => {
    const calculateTime = () => {
      const now = dayjs();
      const target = dayjs(targetDate);
      const diffInSeconds = target.diff(now, 'second');

      let days,
        hours,
        minutes,
        seconds = 0;
      if (diffInSeconds < 0) {
        days = Math.floor(-diffInSeconds / (60 * 60 * 24));
        hours = Math.floor((-diffInSeconds % (60 * 60 * 24)) / (60 * 60));
        minutes = Math.floor((-diffInSeconds % (60 * 60)) / 60);
        seconds = -diffInSeconds % 60;
        setStart(true);
      } else {
        days = Math.floor(diffInSeconds / (60 * 60 * 24));
        hours = Math.floor((diffInSeconds % (60 * 60 * 24)) / (60 * 60));
        minutes = Math.floor((diffInSeconds % (60 * 60)) / 60);
        seconds = diffInSeconds % 60;
      }

      setTimeCount(
        `${String(days).padStart(2, '0')}일 ${String(hours).padStart(
          2,
          '0',
        )}시간 ${String(minutes).padStart(2, '0')}분 ${String(seconds).padStart(
          2,
          '0',
        )}초`,
      );
      setTimeDiff(diffInSeconds);
    };

    calculateTime();

    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mb-[64px] text-[14px] leading-[20px] text-gray-900">
      <span>{start ? '우리의 시작' : '결실까지'}</span>
      <span
        className={cn(
          0 < timeDiff && timeDiff < 60 && 'text-red-500 font-semibold',
        )}
      >
        {timeCount}
      </span>
    </div>
  );
};

export default DDayCounter;
