'use client';

import {createPortal} from 'react-dom';
import {RemoveScroll} from 'react-remove-scroll';
import {IconArrowLeft, IconArrowRight} from '@/app/assets';
import {cn} from '@/app/utils/tailwind-utils';
import {Swiper, SwiperSlide} from 'swiper/react';
import {useState} from 'react';
import SwiperCore from 'swiper';
import {Zoom} from 'swiper/modules';
import 'swiper/css';
import FitImage from './fit-image';

type PhotoDialogProps = {
  images: string[];
  index: number;
  onClose: () => void;
};

const PhotoDialog = ({images, index, onClose}: PhotoDialogProps) => {
  const [swiper, setSwiper] = useState<SwiperCore>();
  const [currentImgIndex, setCurrentImgIndex] = useState(index);

  return createPortal(
    <RemoveScroll enabled={true} removeScrollBar allowPinchZoom>
      <div
        className={cn(
          'z-999 w-full h-full fixed inset-0 bg-white/90 backdrop-blur-sm transition-opacity duration-300',
        )}
      />

      <div
        className={cn(
          'flex flex-col w-full h-full fixed inset-0 overflow-y-auto sm:max-w-[600px] mx-auto',
        )}
      >
        <div className="flex-1 relative">
          <Swiper
            initialSlide={index}
            onSwiper={setSwiper}
            className="w-full h-full"
            slidesPerView={1}
            spaceBetween={0}
            onSlideChange={swiper => setCurrentImgIndex(swiper.activeIndex)}
            zoom={true}
            modules={[Zoom]}
          >
            {images.map((item: string, index: number) => (
              <SwiperSlide key={index}>
                <div className="swiper-zoom-container w-full h-full flex items-center justify-center">
                  <FitImage src={item} alt="다이얼로그 이미지" />
                </div>
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
              onClick={onClose}
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
      </div>
    </RemoveScroll>,
    document.body,
  );
};

export default PhotoDialog;
