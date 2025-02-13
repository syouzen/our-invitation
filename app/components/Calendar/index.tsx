import {cn} from '@/app/utils/tailwind-utils';
import React from 'react';

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
      <div className="flex flex-row justify-center items-center gap-[16px]">
        <div className="text-gray-900 text-[16px] leading-[24px] mb-[16px]">
          11월
        </div>
      </div>
      <div className="flex flex-row justify-center items-center gap-[16px]">
        <Day day={26} className="text-transparent" />
        <Day day={27} className="text-transparent" />
        <Day day={28} className="text-transparent" />
        <Day day={29} className="text-transparent" />
        <Day day={30} className="text-transparent" />
        <Day day={31} className="text-transparent" />
        <Day day={1} />
      </div>
      <div className="flex flex-row justify-center items-center gap-[16px]">
        <Day day={2} />
        <Day day={3} />
        <Day day={4} />
        <Day day={5} />
        <Day day={6} />
        <Day day={7} />
        <Day
          day={8}
          className="text-gray-900 border border-solid border-gray-900 rounded-full flex justify-center items-center"
        />
      </div>
      <div className="flex flex-row justify-center items-center gap-[16px]">
        <Day day={9} />
        <Day day={10} />
        <Day day={11} />
        <Day day={12} />
        <Day day={13} />
        <Day day={14} />
        <Day day={15} />
      </div>
      <div className="flex flex-row justify-center items-center gap-[16px]">
        <Day day={16} />
        <Day day={17} />
        <Day day={18} />
        <Day day={19} />
        <Day day={20} />
        <Day day={21} />
        <Day day={22} />
      </div>
      <div className="flex flex-row justify-center items-center gap-[16px]">
        <Day day={23} />
        <Day day={24} />
        <Day day={25} />
        <Day day={26} />
        <Day day={27} />
        <Day day={28} />
        <Day day={29} />
      </div>
      <div className="flex flex-row justify-center items-center gap-[16px]">
        <Day day={30} />
        <Day day={1} className="text-transparent" />
        <Day day={2} className="text-transparent" />
        <Day day={3} className="text-transparent" />
        <Day day={4} className="text-transparent" />
        <Day day={5} className="text-transparent" />
        <Day day={6} className="text-transparent" />
      </div>
    </div>
  );
};

export default Calendar;
