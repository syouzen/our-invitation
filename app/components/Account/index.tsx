'use client';

import React from 'react';
import Intersection from '../Intersection';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../Accordion';
import AccountInfo from './account-info';

const Account = () => {
  return (
    <>
      <Intersection>
        <div className="flex flex-col px-[16px] mb-[64px]">
          <span className="text-center mb-[32px]">마음을 전해주세요</span>
          <Accordion type="multiple" className="flex flex-col gap-[8px]">
            <AccordionItem value="seungyeon">
              <AccordionTrigger>신랑측 계좌번호 확인하기</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col">
                  <AccountInfo
                    info={{
                      name: '신랑 최승연',
                      bank: '토스뱅크',
                      account: '1000-5580-9140',
                      kakao: 'https://qr.kakaopay.com/Ej73CkpTz',
                    }}
                  />
                  <div className="flex w-full h-[1px] bg-gray-200 my-[12px]" />
                  <AccountInfo
                    info={{
                      name: '어머니 육은주',
                      bank: '국민',
                      account: '0000-0000-0000',
                    }}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="kkomi">
              <AccordionTrigger>신부측 계좌번호 확인하기</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col">
                  <AccountInfo
                    info={{
                      name: '신부 김현아',
                      bank: '신한',
                      account: '0000-0000-0000',
                    }}
                  />
                  <div className="flex w-full h-[1px] bg-gray-200 my-[12px]" />
                  <AccountInfo
                    info={{
                      name: '어머니 서영민',
                      bank: '신한',
                      account: '0000-0000-0000',
                    }}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Intersection>
    </>
  );
};

export default Account;
