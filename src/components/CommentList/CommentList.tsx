import React, { useEffect, useState } from 'react';
import { getComments } from '../../services/api';
import s from './CommentList.module.css';

export const CommentList = () => {
  const [limit, setLimit] = useState({ start: 0, end: 20 });
  const [comments, setComments] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      const data = await getComments(limit.start, limit.end);
      setComments(data);
      setIsLoading(false);
    };
    loadData();
  }, []);

  return (
    <div className={s.commentList}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          Comment List
          {comments.map((comment: any) => {
            return <div className={s.comment}>{comment.body}</div>;
          })}
        </div>
      )}
    </div>
  );
};
