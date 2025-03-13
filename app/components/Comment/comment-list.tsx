'use client';

import React, {useEffect, useState} from 'react';
import {useCommentsStore} from '@/app/store';
import {IconArrowDown, IconLoading} from '@/app/assets';
import dayjs from 'dayjs';
import {Intersection} from '@/app/components';
import CommentDeleteButton from './comment-delete-btn';

const CommentList = () => {
  const [offset, setOffset] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
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
        <div className="flex justify-center items-center mt-[32px] mb-[32px]">
          <IconLoading />
        </div>
      )}
      {!isLoading && (
        <>
          {comments.slice(0, offset * 4).map(comment => (
            <Intersection key={comment.id} className="px-[16px]">
              <div className="flex flex-col box-border w-full text-[12px] leading-[18px] mt-[16px] border-b border-solid border-gray-200 px-[4px] gap-[12px]">
                <div className="flex w-full justify-between items-center text-[14px] leading-[20px]">
                  <span className="text-gray-400">{comment.name}</span>
                  <span className="flex text-gray-400 text-[12px] leading-[18px] justify-center items-center">
                    {dayjs(comment.created_at)
                      .add(-9, 'hours')
                      .format('YYYY.MM.DD')}
                    <CommentDeleteButton comment={comment} />
                  </span>
                </div>
                <div className="mb-[12px] text-[14px] leading-[20px]">
                  {comment.content}
                </div>
              </div>
            </Intersection>
          ))}
          <div className="flex justify-center items-center mt-[24px]">
            {comments.length > offset * 4 && (
              <button
                className="bg-gray-100 flex justify-center items-center border-none cursor-pointer w-[32px] h-[32px] rounded-[100px]"
                onClick={onMore}
              >
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
