import { connect } from 'react-redux';
import { useMemo } from 'react';
import { CommentType } from '../../../types';
import { State } from '../../../redux/store';
import { selectGroupedComments } from '../../../redux/selectors/commentsSelectors';
import { Comments } from './Comments';
import { AddComment } from './AddComment/AddComment';

const CommentsContainer = ({
  commentsListId,
  comments,
}: CommentsContainerProps) => {
  const nodeList = useMemo(() => {
    return selectGroupedComments(Object.values(comments));
  }, [comments]);

  if (!nodeList) {
    return <div>Loading...</div>;
  }

  console.log('render');

  return (
    <div className="comments">
      <h3 className="comments__title">Comments</h3>
      <AddComment commentsListId={commentsListId} />
      <div className="comments__content">
        <Comments comments={nodeList} commentsListId={commentsListId} />
      </div>
    </div>
  );
};

export default connect(
  ({ comments }: State, { commentsListId }: { commentsListId: string }) => {
    return {
      comments: comments[commentsListId],
    };
  }
)(CommentsContainer);

interface CommentsContainerProps {
  commentsListId: string;
  comments: {
    [key: string]: CommentType;
  };
}
