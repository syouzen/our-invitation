'use client';

import React from 'react';
import Intersection from '../Intersection';
import DDayCounter from '../DDayCounter';
import VideoPlayer from '../VideoPlayer';
import Image from 'next/image';
import Calendar from '../Calendar';
import Music from '../VideoPlayer/music';

const SubHeader = () => {
  console.log(
    '___$$$___$$$____\n' +
      '__$$$$$_$$$$$___\n' +
      '__$$$$$$$$$$$___\n' +
      '____$$$$$$$_____\n' +
      '______$$$_______\n' +
      '_______$\n' +
      '_____¸.•´¸.•*¸.•*´¨`*•.♥\n' +
      '_____*.¸¸.•*¨`\n' +
      '\n' +
      '우리 결혼을 축하해주신 모든 여러분 감사합니다~❤️',
  );

  return (
    <>
      <Intersection className="mb-[48px]">
        <VideoPlayer />
      </Intersection>

      <Intersection className="mb-[48px]">
        <Music />
      </Intersection>

      <Intersection className="mb-[32px] text-center flex flex-col gap-[16px]">
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
            2025년 11월 8일 토요일, 오후 12시 30분
          </div>

          <div className="text-[14px] leading-[20px] text-gray-500">두가헌</div>
        </div>
      </Intersection>

      <Intersection className="flex justify-center items-center w-[100%] h-[400px] relative overflow-hidden mt-[64px]">
        <Image
          priority
          src={`${process.env.NEXT_PUBLIC_IMAGE_SERVER}/add_1.webp`}
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
