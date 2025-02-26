'use client';

import {IconKakao, IconMessage, IconPhone} from '@/app/assets';
import Link from 'next/link';

type ContactInfo = {
  info: {
    name: string;
    phone: string;
    kakao?: string;
  };
};

const ContactInfo = ({info}: ContactInfo) => {
  return (
    <div className="flex flex-col gap-[12px] py-[8px]">
      <div className="mb-[6px] flex justify-between items-center">
        <span>
          <b>{info.name}</b>
        </span>
        <div>
          <span>{info.phone}</span>
        </div>
      </div>

      <div className="flex justify-between items-center gap-[4px]">
        <Link
          className="flex w-[100%] h-[40px] justify-center items-center cursor-pointer text-[12px] leading-[18px] gap-[4px] bg-gray-100 rounded-[8px]"
          href={`tel:${info.phone}`}
        >
          <IconPhone width={14} height={14} />
          전화하기
        </Link>
        <Link
          className="flex w-[100%] h-[40px] justify-center items-center cursor-pointer text-[12px] leading-[18px] gap-[4px] bg-gray-100 rounded-[8px]"
          href={`sms:${info.phone}`}
        >
          <IconMessage width={14} height={14} />
          문자하기
        </Link>
        {!!info.kakao && (
          <Link
            className="flex w-[100%] h-[40px] justify-center items-center cursor-pointer text-[12px] leading-[18px] gap-[4px] bg-[#fee500] rounded-[8px]"
            href={info.kakao}
          >
            <IconKakao width={16} height={16} />
            카카오톡
          </Link>
        )}
      </div>
    </div>
  );
};

export default ContactInfo;
