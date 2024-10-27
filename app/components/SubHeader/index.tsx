'use client';

import React from 'react';
import styles from './components.module.css';
import {IconMessage} from '@/app/assets';
import Intersection from '../Intersection';

const Header = () => {
  return (
    <>
      <Intersection>
        <div className={styles.subContents}>
          누군가의 말처럼
          <br />
          희구하며, 사랑하며, 전율하며, 감동하며
          <br />
          인생을 살고 싶었습니다.
          <br />
          하지만 방법을 찾기가 어려웠습니다.
          <br />
          이제야 그 해법을 풀었습니다.
          <br />
          사랑하는 두 사람이 함께했을 때 가능하다는 것을…
          <br />
          인생의 참맛을 찾아 나선 저희들을
          <br />
          많이 격려해 주시고 축복해 주세요.
        </div>
      </Intersection>

      <Intersection>
        <div className={styles.family}>
          <div className={styles.familyParents}>
            <div>최호선</div>
            <div>육은주</div>
          </div>
          <span>의</span>
          <span>장남</span>
          <strong>최승연</strong>
        </div>
        <div className={styles.family}>
          <div className={styles.familyParents}>
            <div>서영민</div>
          </div>
          <span>의</span>
          <span>차녀</span>
          <strong>김현아</strong>
        </div>
      </Intersection>

      <Intersection>
        <div className={styles.contactButtonWrapper}>
          <button className={styles.contactButton}>
            <IconMessage /> 연락하기
          </button>
        </div>
      </Intersection>
    </>
  );
};

export default Header;
