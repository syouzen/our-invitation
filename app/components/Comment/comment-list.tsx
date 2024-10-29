'use client';

import React, {useEffect, useState} from 'react';
import styles from './components.module.css';
import {useCommentsStore} from '@/app/store';
import {IconArrowDown, IconLoading} from '@/app/assets';
import dayjs from 'dayjs';
import {Intersection} from '@/app/components';
import CommentDeleteButton from './comment-delete-btn';

const CommentList = () => {
  const [offset, setOffset] = useState(1);
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
          {comments.slice(0, offset * 4).map(comment => (
            <div key={comment.id} className={styles.comment}>
              <div className={styles.commentHeader}>
                <span className={styles.commentHeaderName}>{comment.name}</span>
                <span className={styles.commentHeaderDate}>
                  {dayjs(comment.created_at).format('YYYY.MM.DD')}
                  <CommentDeleteButton comment={comment} />
                </span>
              </div>
              <div className={styles.commentContent}>{comment.content}</div>
            </div>
          ))}
          <div className={styles.moreButtonWrapper}>
            {comments.length > offset * 4 && (
              <button
                className={styles.moreButton}
                onClick={() => setOffset(offset + 1)}
              >
                <IconArrowDown />
              </button>
            )}
          </div>
        </Intersection>
      )}
    </>
  );
};

export default CommentList;
