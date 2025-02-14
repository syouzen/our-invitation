'use client';

import React from 'react';
import Intersection from '../Intersection';
import DDayCounter from '../DDayCounter';
import VideoPlayer from '../VideoPlayer';
import Image from 'next/image';
import Calendar from '../Calendar';

const SubHeader = () => {
  return (
    <>
      <Intersection className="mb-[96px]">
        <VideoPlayer />
      </Intersection>

      <Intersection className="mt-[96px] mb-[32px] text-center flex flex-col gap-[16px]">
        <div className="flex justify-center items-center">
          <span className="font-serif_en font-bold text-[14px] leading-[20px] text-gray-900">
            OUR WEDDING STORY
          </span>
        </div>

        <div>
          <span>💍</span>
        </div>

        <div className="flex flex-col gap-[2px]">
          <div className="flex justify-center items-center gap-[8px] text-[14px] leading-[20px]">
            <span>최승연</span>
            <span>그리고</span>
            <span>김현아</span>
          </div>
          <div className="flex justify-center items-center gap-[8px] text-[14px] leading-[20px]">
            <span>우리 결혼합니다</span>
          </div>
        </div>

        <div className="flex flex-col gap-[2px]">
          <div className="text-[14px] leading-[20px] text-gray-500">
            2025년 11월 8일 토요일, 낮 12시 30분
          </div>

          <div className="text-[14px] leading-[20px] text-gray-500">두가헌</div>
        </div>
      </Intersection>

      <Intersection className="flex justify-center items-center w-[100%] h-[400px] relative overflow-hidden">
        <Image
          priority
          src="https://kr.object.ncloudstorage.com/zen-bucket/IMG_5988.JPG"
          alt="메인 이미지"
          width={350}
          height={350}
          className="object-cover opacity-80"
          sizes="100vw"
        />
      </Intersection>

      <Intersection className="flex flex-row justify-evenly items-center mt-[96px]">
        <Calendar />
      </Intersection>

      <Intersection className="flex flex-row justify-evenly items-center mt-[64px]">
        <DDayCounter />
      </Intersection>
    </>
  );
};

export default SubHeader;
