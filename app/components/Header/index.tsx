'use client';

import React from 'react';
import styles from './components.module.css';
import Intersection from '../Intersection';
import DDayCounter from '../DDayCounter';
import VideoPlayer from '../VideoPlayer';

const SubHeader = () => {
  return (
    <>
      <Intersection>
        <div className={styles.videoContainer}>
          <VideoPlayer />
        </div>
      </Intersection>

      {/* <Intersection>
        <div className={styles.imageContainer}>
          <Image
            priority
            src="https://kjhswhyddvck27143991.gcdn.ntruss.com/IMG_5988.JPG"
            alt="메인 이미지"
            fill
            style={{objectFit: 'cover'}}
            sizes="100vw"
          />
        </div>
      </Intersection> */}

      <Intersection>
        <DDayCounter />
      </Intersection>

      <Intersection>
        <div className={styles.mainContents}>
          <div className={styles.mainContentsText}>
            <span className={styles.mainContentsTitle}>OUR WEDDING STORY</span>
          </div>
          <div className={styles.mainContentsSpare}>
            <span>💍</span>
          </div>
          <div className={styles.mainContentsText}>
            <span>최승연</span>
            <span>|</span>
            <span>김현아</span>
          </div>
          <div className={styles.mainContentsSubText}>
            202X년 XX월 XX일 일요일 오후 2시
            <br />
            두가헌
          </div>
        </div>
      </Intersection>
    </>
  );
};

export default SubHeader;
