'use client';

import React from 'react';
import styles from './components.module.css';
import CommentList from './comment-list';
import CommentCreateButton from './comment-create-btn';

const Comment = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.commentTitle}>마음을 남겨주세요</span>
      <div className={styles.commentSendButtonWrapper}>
        <CommentCreateButton />
      </div>
      <CommentList />
    </div>
  );
};

export default Comment;
