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
            const text = (event.target as any).innerText;
            setText(text);
          }}
          contentEditable={true}
          className={s.commentInput}
        />
      </div>
      <div className={s.postButtonWrapper}>
        <button
          disabled={text === ''}
          className={s.postButton}
          onClick={onAddComment}
        >
          Post
        </button>
      </div>
    </div>
  );
};
