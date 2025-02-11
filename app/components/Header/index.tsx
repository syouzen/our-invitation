'use client';

import React from 'react';
import Intersection from '../Intersection';
import DDayCounter from '../DDayCounter';
import VideoPlayer from '../VideoPlayer';

const SubHeader = () => {
  return (
    <>
      <Intersection className="mb-[96px]">
        <VideoPlayer />
      </Intersection>

      {/* <Intersection>
        <div className={styles.imageContainer}>
          <Image
            priority
            src="https://kr.object.ncloudstorage.com/zen-bucket/IMG_5988.JPG"
            alt="메인 이미지"
            fill
            style={{objectFit: 'cover'}}
            sizes="100vw"
          />
        </div>
      </Intersection> */}

      <Intersection className="flex flex-row justify-evenly items-center">
        {/* <DayCounter /> */}
        <DDayCounter />
      </Intersection>

      <Intersection>
        <div className="mt-[96px] mb-[96px] text-center flex flex-col gap-[16px]">
          <div className="flex justify-center items-center">
            <span className="text-[16px] leading-[24px] text-gray-900">
              OUR WEDDING STORY
            </span>
          </div>

          <div>
            <span>💍</span>
          </div>

          <div className="flex justify-center items-center gap-[8px]">
            <span>최승연</span>
            <span>김현아</span>
          </div>

          <div className="flex flex-col gap-[8px]">
            <div className="text-[14px] leading-[20px] text-gray-500">
              2025년 11월 8일 일요일 오전 11시
            </div>

            <div className="text-[14px] leading-[20px] text-gray-500">
              두가헌
            </div>
          </div>
        </div>
      </Intersection>
    </>
  );
};

export default SubHeader;
