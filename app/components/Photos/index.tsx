'use client';

import React from 'react';
import styles from './components.module.css';
import Intersection from '../Intersection';

const SubHeader = () => {
  return (
    <Intersection>
      <div className={styles.wrapper}>
        <span className={styles.title}>갤러리</span>
      </div>
    </Intersection>
  );
};

export default SubHeader;
