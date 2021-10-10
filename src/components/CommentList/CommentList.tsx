import React, { useEffect, useState } from 'react';
import { getComments } from '../../services/api';
import s from './CommentList.module.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Comment } from '../Comment/Comment';

const COMMENTS_COUNT = 500;
const COMMENTS_COUNT_PER_PAGE = 20;

export const CommentList = () => {
  const [limit, setLimit] = useState({ start: 0, end: 20 });
  const [comments, setComments] = useState<any>([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const newComments = await getComments(limit.start, limit.end);
      setComments(comments => comments.concat(newComments));
    };
    loadData();
  }, [limit.start, limit.end]);

  const fetchMoreData = () => {
    if (comments.length >= COMMENTS_COUNT) {
      setHasMore(false);
      return;
    }

    setLimit(limit => {
      return {
        start: limit.start + COMMENTS_COUNT_PER_PAGE,
        end: limit.end + COMMENTS_COUNT_PER_PAGE,
      };
    });
  };

  const getEndMessage = () => {
    return <p className={s.endMessage}>Yay! You have seen it all</p>;
  };

  const getLoader = () => {
    return <h4>Loading...</h4>;
  };

  return (
    <div className={s.commentList}>
      <InfiniteScroll
        dataLength={comments.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={getLoader()}
        height={400}
        endMessage={getEndMessage()}
      >
        {comments.map(comment => (
          <Comment key={comment.id} text={comment.body} email={comment.email} />
        ))}
      </InfiniteScroll>
    </div>
  );
};
