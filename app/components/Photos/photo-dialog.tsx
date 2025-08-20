'use client';

import {IconArrowLeft, IconArrowRight} from '@/app/assets';
import {cn} from '@/app/utils/tailwind-utils';
import {Swiper, SwiperSlide} from 'swiper/react';
import {useEffect, useState} from 'react';
import SwiperCore from 'swiper';
import {Zoom} from 'swiper/modules';
import 'swiper/css';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import Intersection from '../Intersection';
import Image from 'next/image';

type PhotoDialogProps = {
  open: boolean;
  images: string[];
  index: number;
  onOpenChange: (open: boolean) => void;
};

const PhotoDialog = ({open, images, index, onOpenChange}: PhotoDialogProps) => {
  const [swiper, setSwiper] = useState<SwiperCore>();
  const [currentImgIndex, setCurrentImgIndex] = useState(index);

  useEffect(() => {
    if (open) {
      setCurrentImgIndex(index);
    }
  }, [index, open]);

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Overlay
        className={cn(
          'fixed inset-0 z-[999] bg-white/80 backdrop-blur-sm',
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        )}
        onClick={() => onOpenChange(false)}
      />
      <DialogPrimitive.Content
        className={cn(
          'container w-full z-[999] sm:max-w-[600px]',
          'fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]',
          'duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
        )}
        onPointerDownOutside={e => e.preventDefault()}
      >
        <DialogPrimitive.Title className="sr-only" />
        <DialogPrimitive.Description className="sr-only" />
        <div className="flex-1 relative">
          <Swiper
            initialSlide={index}
            onSwiper={setSwiper}
            className="h-[calc(100vh-128px)] mb-[20px]"
            slidesPerView={1}
            spaceBetween={0}
            onSlideChange={swiper => setCurrentImgIndex(swiper.activeIndex)}
            zoom={true}
            modules={[Zoom]}
          >
            {images.map((item: string, index: number) => (
              <SwiperSlide key={index}>
                <Intersection
                  noY
                  className="swiper-zoom-container w-full h-full flex items-center justify-center"
                >
                  <Image
                    src={item}
                    width={0}
                    height={0}
                    className="w-full h-auto object-cover"
                    sizes="100vw"
                    alt="다이얼로그 이미지"
                  />
                </Intersection>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-auto pb-[48px] pt-[8px]">
          <div className="flex justify-center pt-[4px] pb-[4px] text-[14px] leading-[20px]">
            <span>
              {currentImgIndex + 1}/{images.length}
            </span>
          </div>

          <div className="flex justify-center items-center gap-[32px]">
            <button
              disabled={currentImgIndex === 0}
              className={cn(
                'border-none cursor-pointer bg-transparent',
                currentImgIndex === 0 && 'opacity-30',
              )}
              onClick={() => {
                setCurrentImgIndex(currentImgIndex - 1);
                swiper?.slideTo(currentImgIndex - 1, 500);
              }}
            >
              <IconArrowLeft width="2em" height="2em" />
            </button>
            <button
              className="flex justify-center items-center bg-transparent border-none cursor-pointer text-[16px] leading-[24px] pb-[5px]"
              onClick={() => onOpenChange(false)}
            >
              닫기
            </button>
            <button
              disabled={currentImgIndex === images.length - 1}
              className={cn(
                'border-none cursor-pointer bg-transparent',
                currentImgIndex === images.length - 1 && 'opacity-30',
              )}
              onClick={() => {
                setCurrentImgIndex(currentImgIndex + 1);
                swiper?.slideTo(currentImgIndex + 1, 500);
              }}
            >
              <IconArrowRight width="2em" height="2em" />
            </button>
          </div>
        </div>
      </DialogPrimitive.Content>
    </DialogPrimitive.Root>
  );
};

export default PhotoDialog;
