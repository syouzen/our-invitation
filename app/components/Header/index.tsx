'use client';

import React from 'react';
import styles from './components.module.css';
import Image from 'next/image';
import Intersection from '../Intersection';
import DDayCounter from '../DDayCounter';

const SubHeader = () => {
  return (
    <>
      <Intersection>
        <div className={styles.imageContainer}>
          <Image
            src="https://lh6.googleusercontent.com/proxy/vuxyus0fYbILQcp7YGZetOZECaBMPJBE9IY4OEBmw1y47E5ULJpRjCYl9P53o-1G2OrxQg8ftdrJIEWrY69X6tdlFEOo_BbPW-TOZYtL9FAzwgz6uxDje-PWwdfMNgBrU3aA1C26zRKlI4o"
            alt="메인 이미지"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Intersection>
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
            <span>OOO</span>
            <span>|</span>
            <span>OOO</span>
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
