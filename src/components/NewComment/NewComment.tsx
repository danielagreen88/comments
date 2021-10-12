import React, { useState } from 'react';
import s from './NewComment.module.css';
import { addComment } from '../../services/api';

export const NewComment = () => {
  const [text, setText] = useState('');

  const onAddComment = async () => {
    try {
      const res = await addComment(text);
    } catch (e) {
      console.log('handle error');
    }
  };

  return (
    <div>
      <div className={s.newComment} placeholder={'Write a comment...'}>
        <div
          onInput={event => {
            const text = (event.target as any).innerHTML;
            setText(text);
          }}
          contentEditable={true}
        />
      </div>
      <div className={s.addCommentWrapper}>
        <button className={s.addComment} onClick={onAddComment}>
          Post
        </button>
      </div>
    </div>
  );
};
