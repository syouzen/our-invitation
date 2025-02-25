'use client';

import React, {useState} from 'react';
import Intersection from '../Intersection';
import Image from 'next/image';
import {IconArrowDown} from '@/app/assets';

import dynamic from 'next/dynamic';

const PhotoDialog = dynamic(() => import('./photo-dialog'), {
  ssr: false,
});

const SubHeader = () => {
  const [offset, setOffset] = useState(1);

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const images: string[] = [
    'https://kr.object.ncloudstorage.com/zen-bucket/IMG_0421.JPG',
    'https://kr.object.ncloudstorage.com/zen-bucket/IMG_1506.JPG',
    'https://kr.object.ncloudstorage.com/zen-bucket/IMG_1559.JPG',
    'https://kr.object.ncloudstorage.com/zen-bucket/IMG_1593.JPG',
    'https://kr.object.ncloudstorage.com/zen-bucket/IMG_1730.JPG',
    'https://kr.object.ncloudstorage.com/zen-bucket/IMG_1986.JPG',
    'https://kr.object.ncloudstorage.com/zen-bucket/IMG_2436.JPG',
    'https://kr.object.ncloudstorage.com/zen-bucket/IMG_2711.JPG',
    'https://kr.object.ncloudstorage.com/zen-bucket/IMG_4251.JPG',
    'https://kr.object.ncloudstorage.com/zen-bucket/IMG_4493.JPG',
    'https://kr.object.ncloudstorage.com/zen-bucket/IMG_4884.JPG',
    'https://kr.object.ncloudstorage.com/zen-bucket/IMG_5316.JPG',
    'https://kr.object.ncloudstorage.com/zen-bucket/IMG_5988.JPG',
    'https://kr.object.ncloudstorage.com/zen-bucket/IMG_6227.JPG',
    'https://kr.object.ncloudstorage.com/zen-bucket/IMG_6238.JPG',
    'https://kr.object.ncloudstorage.com/zen-bucket/IMG_6339.JPG',
    'https://kr.object.ncloudstorage.com/zen-bucket/IMG_6332.JPG',
    'https://kr.object.ncloudstorage.com/zen-bucket/IMG_7276.JPG',
    'https://kr.object.ncloudstorage.com/zen-bucket/IMG_7586.JPG',
    'https://kr.object.ncloudstorage.com/zen-bucket/IMG_8319.JPG',
    'https://kr.object.ncloudstorage.com/zen-bucket/IMG_8402.JPG',
    'https://kr.object.ncloudstorage.com/zen-bucket/IMG_8536.JPG',
    'https://kr.object.ncloudstorage.com/zen-bucket/IMG_9186.JPG',
  ];

  const onMore = () => {
    setOffset(prevOffset => prevOffset + 1);
  };

  const onOpen = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  const onPrev = () => {
    setIndex(prev => prev - 1);
  };

  const onNext = () => {
    setIndex(prev => prev + 1);
  };

  return (
    <>
      <Intersection className="flex flex-col mb-[32px]">
        <span className="text-center mt-[48px] mb-[32px]">갤러리</span>
        <div className="grid grid-cols-3 gap-[6px] mb-[32px]">
          {images.slice(0, offset * 9).map((image, i) => (
            <Intersection key={i}>
              <button
                className="relative w-full aspect-[1/1] overflow-hidden border-none cursor-pointer rounded-[4px]"
                onClick={() => onOpen(i)}
              >
                <Image
                  src={image}
                  alt="갤러리 이미지"
                  fill
                  className="object-cover"
                  sizes="(max-width: 600px) 100vw, 
                          (max-width: 1200px) 50vw, 
                          33vw"
                />
              </button>
            </Intersection>
          ))}
        </div>
        <div className="flex justify-center items-center">
          {images.length > offset * 9 && (
            <button
              className="bg-gray-100 flex justify-center items-center border-none cursor-pointer w-[32px] h-[32px] rounded-[100px]"
              onClick={onMore}
            >
              <IconArrowDown />
            </button>
          )}
        </div>
      </Intersection>

      <PhotoDialog
        open={open}
        images={images}
        index={index}
        onPrev={onPrev}
        onNext={onNext}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default SubHeader;
