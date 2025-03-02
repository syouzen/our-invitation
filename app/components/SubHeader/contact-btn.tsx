'use client';

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../Accordion';
import ContactInfo from './contact-info';

const ContactButton = () => {
  return (
    <Accordion
      type="multiple"
      className="flex flex-col gap-[8px] w-full px-[16px]"
    >
      <AccordionItem value="seungyeon">
        <AccordionTrigger>신랑측 연락하기</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col">
            <ContactInfo
              info={{
                name: '신랑 최승연',
                phone: '010-9058-9205',
                kakao: 'http://qr.kakao.com/talk/jLpCGPQF_V6pa0c638zgxNaLGrE-',
              }}
            />
            <div className="flex w-full h-[1px] bg-gray-200 my-[12px]" />
            <ContactInfo
              info={{
                name: '어머니 육은주',
                phone: '010-3716-4766',
                kakao: 'http://qr.kakao.com/talk/FjDe3r8MOCj0yTcrvzeQ012ASX0-',
              }}
            />
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="kkomi">
        <AccordionTrigger>신부측 연락하기</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col">
            <ContactInfo
              info={{
                name: '신부 김현아',
                phone: '010-3415-7375',
                kakao: 'http://qr.kakao.com/talk/nCbS9gYD0wlHcjpFypda0fZ3u94-',
              }}
            />
            <div className="flex w-full h-[1px] bg-gray-200 my-[12px]" />
            <ContactInfo
              info={{name: '어머니 서영민', phone: '010-6620-3020'}}
            />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ContactButton;
