import React from 'react';
import s from './NewComment.module.css';

export const NewComment = () => {
  return (
    <div>
      <div className={s.newComment} placeholder={'Write a comment...'}>
        <div contentEditable={true} />
      </div>
      <div className={s.addCommentWrapper}>
        <button className={s.addComment} onClick={() => {}}>
          Post
        </button>
      </div>
    </div>
  );
};
