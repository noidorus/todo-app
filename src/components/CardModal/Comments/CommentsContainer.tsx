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
  ({ comments, cardsById }: State, { id }: { id: string }) => {
    const commentsListId = cardsById[id].commentsId;

    return {
      comments: comments[commentsListId],
      commentsListId: commentsListId,
    };
  }
)(CommentsContainer);

interface CommentsContainerProps {
  id: string;
  commentsListId: string;
  comments: {
    [key: string]: CommentType;
  };
}
