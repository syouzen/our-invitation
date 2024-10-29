'use client';

import React from 'react';
import styles from './components.module.css';
import Intersection from '../Intersection';
import ContactButton from './contact-btn';

const Header = () => {
  return (
    <>
      <Intersection>
        <div className={styles.subContents}>
          봄의 그대는 벚꽃이었고
          <br />
          여름의 그대는 바람이었으며
          <br />
          가을의 그대는 하늘이었고
          <br />
          겨울의 그대는 하얀 눈이었다
          <br />
          그대는 언제나 행복, 그 자체였다.
          <br />
          <br />
          {'강현욱 < 사계 > 중에서'}
        </div>
      </Intersection>

      <div className={styles.contentsSpare}>
        <span>-</span>
      </div>

      <Intersection>
        <div className={styles.family}>
          <div className={styles.parents}>
            <div>故 최호선</div>
            <div>육은주</div>
          </div>
          <span>의</span>
          <span>장남</span>
          <strong>최승연</strong>
        </div>
        <div className={styles.family}>
          <div className={styles.parents}>
            <div>서영민</div>
          </div>
          <span>의</span>
          <span>차녀</span>
          <strong>김현아</strong>
        </div>
      </Intersection>

      <Intersection>
        <div className={styles.contactButtonWrapper}>
          <ContactButton />
        </div>
      </Intersection>
    </>
  );
};

export default Header;
