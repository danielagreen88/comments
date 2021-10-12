import React from 'react';
import s from './Comment.module.css';

export const Comment = ({ author, text }) => {
  return (
    <div className={s.comment}>
      <div className={s.author}>{author}</div>
      <div>{text}</div>
    </div>
  );
};
