import React from 'react';
import s from './NewComment.module.css';

export const NewComment = () => {
  return (
    <>
      <div className={s.newComment} placeholder={'Write a comment...'}>
        <div contentEditable={true} />
      </div>
    </>
  );
};
