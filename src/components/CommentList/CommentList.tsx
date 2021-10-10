import React, { useEffect, useState } from 'react';
import { getComments } from '../../services/api';
import s from './CommentList.module.css';
import InfiniteScroll from 'react-infinite-scroll-component';

export const CommentList = () => {
  const [limit, setLimit] = useState({ start: 0, end: 20 });
  const [comments, setComments] = useState<any>([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const data = await getComments(limit.start, limit.end);
      setComments(data);
    };
    loadData();
  }, [limit.start, limit.end]);

  const fetchMoreData = () => {
    if (comments.length >= 500) {
      setHasMore(false);
    } else {
      setLimit(limit => {
        return {
          start: limit.start + 20,
          end: limit.end + 20,
        };
      });
    }
  };

  return (
    <div className={s.commentList}>
      <div>
        Comment List
        <InfiniteScroll
          dataLength={comments.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          height={500}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {comments.map((comment, index) => (
            <div className={s.comment} key={index}>
              <div>{index}</div>
              {comment.body}
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};
