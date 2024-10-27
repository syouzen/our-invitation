'use client';

import React, {useEffect, useState} from 'react';
import styles from './components.module.css';
import {useCommentsStore} from '@/app/store';
import {IconLoading} from '@/app/assets';
import Intersection from '../Intersection';
import dayjs from 'dayjs';

const Comment = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {comments, fetchComments} = useCommentsStore();

  useEffect(() => {
    setIsLoading(true);
    fetchComments().then(() => setIsLoading(false));
  }, [fetchComments]);

  return (
    <div>
      <span className={styles.commentTitle}>마음을 남겨주세요</span>
      {isLoading && (
        <div className="">
          <IconLoading />
        </div>
      )}
      {!isLoading && (
        <Intersection>
          {comments.map(comment => (
            <div key={comment.id} className={styles.comment}>
              <div className={styles.commentHeader}>
                <span>
                  <b>{comment.name}</b>
                </span>
                <span>
                  {dayjs(comment.created_at).format('YYYY.MM.DD HH:mm:ss')}
                </span>
              </div>
              <div className={styles.commentContent}>{comment.content}</div>
            </div>
          ))}
        </Intersection>
      )}
    </div>
  );
};

export default Comment;
