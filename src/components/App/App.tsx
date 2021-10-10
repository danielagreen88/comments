import React from 'react';
import s from './App.module.css';
import { CommentList } from '../CommentList/CommentList';

export const App = () => {
  return (
    <div className={s.app}>
      <h1>Comments</h1>
      <CommentList />
    </div>
  );
};
