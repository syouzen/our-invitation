'use client';

import React from 'react';
import styles from './components.module.css';
import {IconMessage} from '@/app/assets';
import CommentList from './comment-list';

const Comment = () => {
  const onOpenDialog = () => {};

  return (
    <div className={styles.wrapper}>
      <span className={styles.commentTitle}>마음을 남겨주세요</span>
      <div className={styles.commentSendButtonWrapper}>
        <button className={styles.commentSendButton} onClick={onOpenDialog}>
          <IconMessage /> 남기기
        </button>
      </div>
      <CommentList />
    </div>
  );
};

export default Comment;
