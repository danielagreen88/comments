import React from 'react';
import s from './App.module.css';
import { CommentList } from '../CommentList/CommentList';
import { NewComment } from '../NewComment/NewComment';

export const App = () => {
  return (
    <div className={s.app}>
      <div className={s.appContent}>
        <h1 className={s.header}>Comments</h1>
        <NewComment />
        <CommentList />
      </div>
    </div>
  );
};
