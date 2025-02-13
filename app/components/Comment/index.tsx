'use client';

import React from 'react';
import CommentList from './comment-list';
import CommentCreateButton from './comment-create-btn';
import Intersection from '../Intersection';

const Comment = () => {
  return (
    <Intersection>
      <div className="flex flex-col mb-[32px]">
        <span className="text-center mb-[16px] mt-[16px]">
          마음을 남겨주세요
        </span>
        <div className="flex justify-center items-center mt-[16px] mb-[16px]">
          <CommentCreateButton />
        </div>
        <CommentList />
      </div>
    </Intersection>
  );
};

export default Comment;
