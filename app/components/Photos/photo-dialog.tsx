'use client';

import {createPortal} from 'react-dom';
import {RemoveScroll} from 'react-remove-scroll';
import FitImage from './fit-image';
import {IconArrowLeft, IconArrowRight} from '@/app/assets';
import {cn} from '@/app/utils/tailwind-utils';

type PhotoDialogProps = {
  open: boolean;
  images: string[];
  index: number;
  onPrev: () => void;
  onNext: () => void;
  onClose: () => void;
};

const PhotoDialog = ({
  open,
  images,
  index,
  onPrev,
  onNext,
  onClose,
}: PhotoDialogProps) => {
  return createPortal(
    <RemoveScroll enabled={open} removeScrollBar allowPinchZoom>
      <div
        className={cn(
          open
            ? 'z-999 w-full h-full fixed inset-0 bg-white/90 backdrop-blur-sm transition-opacity duration-300'
            : 'hidden',
        )}
      />

      <div
        className={cn(
          open
            ? 'flex flex-col w-full h-full fixed inset-0 overflow-y-auto sm:max-w-[600px] mx-auto'
            : 'hidden',
        )}
      >
        <div className="flex-1 flex justify-center items-center shrink-0 select-none">
          <FitImage src={images[index]} alt="다이얼로그 이미지" />
        </div>

        <div className="mt-auto pb-[48px] pt-[8px]">
          <div className="flex justify-center pt-[4px] pb-[4px] text-[14px] leading-[20px]">
            <span>
              {index + 1}/{images.length}
            </span>
          </div>

          <div className="flex justify-center items-center gap-[32px]">
            <button
              disabled={index === 0}
              className="border-none cursor-pointer bg-transparent"
              onClick={onPrev}
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
              disabled={index === images.length - 1}
              className="border-none cursor-pointer bg-transparent"
              onClick={onNext}
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
