import React from 'react';
import s from './App.module.css';
import { CommentList } from '../CommentList/CommentList';

export const App = () => {
  return (
    <div className={s.App}>
      <CommentList />
    </div>
  );
};
