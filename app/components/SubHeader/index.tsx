'use client';

import React from 'react';
import Intersection from '../Intersection';
import ContactButton from './contact-btn';

const Header = () => {
  return (
    <>
      <Intersection>
        <div className="text-center text-[14px] leading-[20px] text-gray-900 mb-[48px]">
          저의 두 걸음은
          <br />
          그녀의 세 걸음입니다.
          <br />
          <br />
          속도는 달라도 함께 걸으며
          <br />
          가장 조화로운 수가 무엇인지 배웠습니다.
          <br />
          <br />
          앞으로 마주할 수많은 선택의 길 위에서
          <br />
          우리는 언제나 서로의 최대공약수를 찾으려 합니다.
          <br />
          <br />
          11월의 어느 햇살 고운 날,
          <br />
          귀한 걸음 하시어 따뜻한 마음으로
          <br />
          축복해 주시면 더 없는 기쁨이 되겠습니다.
        </div>
      </Intersection>

      <div className="flex justify-center items-center my-[32px] text-gray-300">
        <span>-</span>
      </div>

      <Intersection>
        <div className="text-[14px] leading-[20px] text-gray-900 flex pt-[12px] justify-center items-center gap-[12px]">
          <div className="w-[70px] text-end">
            <div>故 최호선</div>
            <div>육은주</div>
          </div>
          <span>의</span>
          <span>장남</span>
          <strong>최승연</strong>
        </div>
        <div className="text-[14px] leading-[20px] text-gray-900 flex pt-[12px] justify-center items-center gap-[12px]">
          <div className="w-[70px] text-end">
            <div>김현중</div>
            <div>서영민</div>
          </div>
          <span>의</span>
          <span>차녀</span>
          <strong>김현아</strong>
        </div>
      </Intersection>

      <Intersection className="flex justify-center items-center mt-[64px] w-full">
        <ContactButton />
      </Intersection>
    </>
  );
};

export default Header;
