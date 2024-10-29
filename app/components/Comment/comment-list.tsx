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

  const onMore = () => {
    setOffset(prevOffset => prevOffset + 1);
  };

  return (
    <>
      {isLoading && (
        <div className={styles.commentLoading}>
          <IconLoading />
        </div>
      )}
      {!isLoading && (
        <>
          {comments.slice(0, offset * 4).map(comment => (
            <Intersection key={comment.id}>
              <div className={styles.comment}>
                <div className={styles.commentHeader}>
                  <span className={styles.commentHeaderName}>
                    {comment.name}
                  </span>
                  <span className={styles.commentHeaderDate}>
                    {dayjs(comment.created_at).format('YYYY.MM.DD')}
                    <CommentDeleteButton comment={comment} />
                  </span>
                </div>
                <div className={styles.commentContent}>{comment.content}</div>
              </div>
            </Intersection>
          ))}
          <div className={styles.moreButtonWrapper}>
            {comments.length > offset * 4 && (
              <button className={styles.moreButton} onClick={onMore}>
                <IconArrowDown />
              </button>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default CommentList;
