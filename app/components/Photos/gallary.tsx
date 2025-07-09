'use client';

import React, {useState} from 'react';
import Intersection from '../Intersection';
import Image from 'next/image';
import {IconArrowDown} from '@/app/assets';

import dynamic from 'next/dynamic';
import {cn} from '@/app/utils/tailwind-utils';

const PhotoDialog = dynamic(() => import('./photo-dialog'), {
  ssr: false,
});

interface GallaryProps {
  images: string[];
  noDialog?: boolean;
  className?: string;
}

const Gallary = ({images, noDialog = false, className}: GallaryProps) => {
  const [offset, setOffset] = useState(1);

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const onMore = () => {
    setOffset(prevOffset => prevOffset + 1);
  };

  const onOpen = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  return (
    <>
      <div className={cn('grid grid-cols-3 gap-[6px] mb-[32px]', className)}>
        {images.slice(0, offset * 9).map((image, i) => (
          <Intersection key={i}>
            <button
              disabled={noDialog}
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

      {open && (
        <PhotoDialog
          images={images}
          index={index}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default Gallary;
