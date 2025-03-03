'use client';

import React, {useEffect, useState} from 'react';
import dayjs from 'dayjs';

const targetDate = '2023-09-18T18:00:00';

const DayCounter = () => {
  const [timeLeft, setTimeLeft] = useState<string | null>(null);

  useEffect(() => {
    const calculateTime = () => {
      const now = dayjs();
      const target = dayjs(targetDate);
      const diffInSeconds = now.diff(target, 'second');

      const days = Math.floor(diffInSeconds / (60 * 60 * 24));
      const hours = Math.floor((diffInSeconds % (60 * 60 * 24)) / (60 * 60));
      const minutes = Math.floor((diffInSeconds % (60 * 60)) / 60);
      const seconds = diffInSeconds % 60;

      setTimeLeft(
        `${String(days).padStart(2, '0')}일 ${String(hours).padStart(
          2,
          '0',
        )}시간 ${String(minutes).padStart(2, '0')}분 ${String(seconds).padStart(
          2,
          '0',
        )}초`,
      );
    };

    calculateTime();

    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mb-[64px]">
      <span>사랑한지</span>
      <span>{timeLeft}</span>
    </div>
  );
};

export default DayCounter;
