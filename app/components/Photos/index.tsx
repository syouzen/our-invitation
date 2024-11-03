'use client';

import React, {useState} from 'react';
import styles from './components.module.css';
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
      <Intersection>
        <div className={styles.wrapper}>
          <span className={styles.title}>갤러리</span>
          <div className={styles.grid}>
            {images.slice(0, offset * 6).map((image, i) => (
              <Intersection key={i}>
                <button
                  className={styles.imageContainer}
                  onClick={() => onOpen(i)}
                >
                  <Image
                    src={image}
                    alt="갤러리 이미지"
                    fill
                    style={{objectFit: 'cover'}}
                    sizes="(max-width: 600px) 100vw, 
                          (max-width: 1200px) 50vw, 
                          33vw"
                  />
                </button>
              </Intersection>
            ))}
          </div>
          <div className={styles.moreButtonWrapper}>
            {images.length > offset * 6 && (
              <button className={styles.moreButton} onClick={onMore}>
                <IconArrowDown />
              </button>
            )}
          </div>
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

      {/* <ImageDialog open={open} onOpenChange={setOpen}>
        <ImageDialogContent>
          <div className={styles.imageDialogContent}>
            <FitImage src={images[index]} alt="갤러리 이미지" />
          </div>

          <div className={styles.imageDialogFooterWrapper}>
            <div className={styles.imageDialogIndex}>
              <span>{images.length}개의 이미지 중</span>
              <span>{index + 1}번째 이미지</span>
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
                onClick={() => setOpen(false)}
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
        </ImageDialogContent>
      </ImageDialog> */}
    </>
  );
};

export default SubHeader;
