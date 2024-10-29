'use client';

import {createPortal} from 'react-dom';
import {RemoveScroll} from 'react-remove-scroll';
import styles from './components.module.css';
import FitImage from './fit-image';
import {IconArrowLeft, IconArrowRight} from '@/app/assets';

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
      <div className={open ? styles.overlay : styles.hidden} />

      <div className={open ? styles.content : styles.hidden}>
        <div className={styles.image}>
          <FitImage src={images[index]} alt="다이얼로그 이미지" />
        </div>

        <div className={styles.indicator}>
          <div className={styles.index}>
            <span>
              {index + 1}/{images.length}
            </span>
          </div>

          <div className={styles.imageDialogFooter}>
            <button
              disabled={index === 0}
              className={styles.imageDialogButton}
              onClick={onPrev}
            >
              <IconArrowLeft width="2em" height="2em" />
            </button>
            <button
              className={styles.imageDialogFooterCloseButton}
              onClick={onClose}
            >
              닫기
            </button>
            <button
              disabled={index === images.length - 1}
              className={styles.imageDialogButton}
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
