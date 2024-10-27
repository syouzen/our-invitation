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
      <span className={styles.commentTitle}>방명록</span>
      {isLoading && (
        <div className="">
          <IconLoading />
        </div>
      )}
      {!isLoading && (
        <Intersection>
          {comments.map(comment => (
            <div key={comment.id} className="">
              <div className="">
                <span>{comment.name}</span>
                <span className="">
                  {dayjs(comment.created_at).format('YYYY.MM.DD HH:mm:ss')}
                </span>
              </div>
              <div className="">{comment.content}</div>
            </div>
          ))}
        </Intersection>
      )}
    </div>
  );
};

export default Comment;
