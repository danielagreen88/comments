import React from 'react';
import s from './Comment.module.css';

export const Comment = ({ email, text }) => {
  return (
    <div className={s.comment}>
      <div className={s.email}>{email}</div>
      <div>{text}</div>
    </div>
  );
};
