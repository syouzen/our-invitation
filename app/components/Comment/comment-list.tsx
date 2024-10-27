'use client';

import React, {useEffect, useState} from 'react';
import styles from './components.module.css';
import {useCommentsStore} from '@/app/store';
import {IconLoading, IconClose} from '@/app/assets';
import Intersection from '../Intersection';
import dayjs from 'dayjs';

const CommentList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {comments, fetchComments} = useCommentsStore();

  useEffect(() => {
    setIsLoading(true);
    fetchComments().then(() => setIsLoading(false));
  }, [fetchComments]);

  return (
    <>
      {isLoading && (
        <div className={styles.commentLoading}>
          <IconLoading />
        </div>
      )}
      {!isLoading && (
        <Intersection>
          {comments.map(comment => (
            <div key={comment.id} className={styles.comment}>
              <div className={styles.commentHeader}>
                <span className={styles.commentHeaderName}>{comment.name}</span>
                <span className={styles.commentHeaderDate}>
                  {dayjs(comment.created_at).format('YYYY.MM.DD')}
                  <button className={styles.commentDeletebutton}>
                    <IconClose width={12} height={12} />
                  </button>
                </span>
              </div>
              <div className={styles.commentContent}>{comment.content}</div>
            </div>
          ))}
        </Intersection>
      )}
    </>
  );
};

export default CommentList;
