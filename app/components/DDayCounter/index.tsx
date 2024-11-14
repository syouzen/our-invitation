'use client';

import React, {useEffect, useState} from 'react';
import dayjs from 'dayjs';

import styles from './components.module.css';

const targetDate = '2025-12-25T14:00:00';

const DDayCounter = () => {
  const [start, setStart] = useState<boolean>(false);
  const [timeCount, setTimeCount] = useState<string | null>(null);

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
    };

    calculateTime();

    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.wrapper}>
      <span>{start ? '우리의 시작' : '결실까지'}</span>
      <span>{timeCount}</span>
    </div>
  );
};

export default DDayCounter;
