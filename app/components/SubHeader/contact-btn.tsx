'use client';

import {Dialog, DialogContent} from '@/app/components';
import {IconPhone} from '@/app/assets';
import {cn} from '@/app/utils/tailwind-utils';

const ContactButton = () => {
  return (
    <Dialog
      trigger={
        <button
          className={cn(
            'w-fit px-[12px] py-[6px] rounded-[100px] cursor-pointer gap-[5px]',
            'text-[12px] leading-[18px] flex justify-center items-center',
            'bg-gray-100',
          )}
        >
          <IconPhone width="12px" height="12px" />
          연락하기
        </button>
      }
    >
      <DialogContent title="연락하기">
        <div className="flex flex-col w-full row-gap-[8px] mb-[16px] text-[14px] leading-[20px]">
          <div className="flex flex-row justify-between">
            <span>신랑 최승연</span>
            <button
              className="cursor-pointer border-b border-solid border-gray-300 p-0 m-0 mt-[4px] text-gray-500 text-[12px] leading-[18px]"
              onClick={() => (window.location.href = 'tel:010-9058-9205')}
            >
              <a
                className="flex gap-[4px] text-gray-500 text-[14px] leading-[20px] justify-center items-center"
                href="tel:010-9058-9205"
              >
                <IconPhone width="13px" height="13px" /> 010-9058-9205
              </a>
            </button>
          </div>
          <div className="flex flex-row justify-between">
            <span>어머니 육은주</span>
            <button
              className="cursor-pointer border-b border-solid border-gray-300 p-0 m-0 mt-[4px] text-gray-500 text-[12px] leading-[18px]"
              onClick={() => (window.location.href = 'tel:010-3716-4766')}
            >
              <a
                className="flex gap-[4px] text-gray-500 text-[14px] leading-[20px] justify-center items-center"
                href="tel:010-3716-4766"
              >
                <IconPhone width="13px" height="13px" /> 010-3716-4766
              </a>
            </button>
          </div>
        </div>

        <div className="flex flex-col w-full row-gap-[8px] text-[14px] leading-[20px]">
          <div className="flex flex-row justify-between">
            <span>신부 김현아</span>
            <button
              className="cursor-pointer border-b border-solid border-gray-300 p-0 m-0 mt-[4px] text-gray-500 text-[12px] leading-[18px]"
              onClick={() => (window.location.href = 'tel:010-3415-7375')}
            >
              <a
                className="flex gap-[4px] text-gray-500 text-[14px] leading-[20px] justify-center items-center"
                href="tel:010-3415-7375"
              >
                <IconPhone width="13px" height="13px" /> 010-3415-7375
              </a>
            </button>
          </div>
          <div className="flex flex-row justify-between">
            <span>어머니 서영민</span>
            <button
              className="cursor-pointer border-b border-solid border-gray-300 p-0 m-0 mt-[4px] text-gray-500 text-[12px] leading-[18px]"
              onClick={() => (window.location.href = 'tel:010-3415-7375')}
            >
              <a
                className="flex gap-[4px] text-gray-500 text-[14px] leading-[20px] justify-center items-center"
                href="tel:010-6620-3020"
              >
                <IconPhone width="13px" height="13px" /> 010-6620-3020
              </a>
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactButton;
