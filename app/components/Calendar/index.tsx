import {cn} from '@/app/utils/tailwind-utils';
import React from 'react';

const days = [
  {day: 26, className: 'text-transparent'},
  {day: 27, className: 'text-transparent'},
  {day: 28, className: 'text-transparent'},
  {day: 29, className: 'text-transparent'},
  {day: 30, className: 'text-transparent'},
  {day: 31, className: 'text-transparent'},
  {day: 1},
  {day: 2, className: 'text-red-500'},
  {day: 3},
  {day: 4},
  {day: 5},
  {day: 6},
  {day: 7},
  {
    day: 8,
    className:
      'text-white bg-gray-900 border border-solid border-gray-900 rounded-full flex justify-center items-center',
  },
  {day: 9, className: 'text-red-500'},
  {day: 10},
  {day: 11},
  {day: 12},
  {day: 13},
  {day: 14},
  {day: 15},
  {day: 16, className: 'text-red-500'},
  {day: 17},
  {day: 18},
  {day: 19},
  {day: 20},
  {day: 21},
  {day: 22},
  {day: 23, className: 'text-red-500'},
  {day: 24},
  {day: 25},
  {day: 26},
  {day: 27},
  {day: 28},
  {day: 29},
  {day: 30, className: 'text-red-500'},
  {day: 1, className: 'text-transparent'},
  {day: 2, className: 'text-transparent'},
  {day: 3, className: 'text-transparent'},
  {day: 4, className: 'text-transparent'},
  {day: 5, className: 'text-transparent'},
  {day: 6, className: 'text-transparent'},
];

const Weeks = [
  {week: '일', className: 'text-red-500'},
  {week: '월'},
  {week: '화'},
  {week: '수'},
  {week: '목'},
  {week: '금'},
  {week: '토'},
];

const Week = ({week, className}: {week: string; className?: string}) => {
  return (
    <span
      className={cn(
        'w-[25px] h-[25px] flex justify-center items-center text-gray-900',
        className,
      )}
    >
      {week}
    </span>
  );
};

const Day = ({day, className}: {day: number; className?: string}) => {
  return (
    <span
      className={cn(
        'w-[25px] h-[25px] flex justify-center items-center text-gray-900',
        className,
      )}
    >
      {day}
    </span>
  );
};

const Calendar = () => {
  return (
    <div className="flex flex-col gap-[12px] text-[14px] leading-[20px]">
      <div className="flex flex-row justify-center items-center gap-[16px] text-gray-900 text-[20px] leading-[30px] mb-[24px]">
        11월
      </div>
      <div className="grid grid-cols-7 gap-[16px]">
        {Weeks.map(({week, className}, index) => (
          <Week key={index} week={week} className={className} />
        ))}
        {days.map(({day, className}, index) => (
          <Day key={index} day={day} className={className} />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
