import { connect } from 'react-redux';
import { useMemo } from 'react';
import { State } from '../../../redux/store';
import { selectGroupedComments } from '../../../redux/selectors/commentsSelectors';
import { Comments } from './Comments';
import { AddComment } from './AddComment/AddComment';

const CommentsContainer = ({
  id,
  commentsById,
  ...props
}: CommentsContainerProps) => {
  const nodeList = useMemo(() => {
    const comments = props.comments.map((id) => commentsById[id]);
    return selectGroupedComments(comments, id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.comments]);

  if (!nodeList) {
    return <div>Loading...</div>;
  }

  return (
    <div className="comments">
      <h3 className="comments__title">Comments</h3>
      <AddComment cardId={id} />
      <div className="comments__content">
        <Comments comments={nodeList} cardId={id} />
      </div>
    </div>
  );
};

export default connect(({ commentsById }: State) => ({
  commentsById,
}))(CommentsContainer);

interface CommentsContainerProps {
  id: string;
  comments: string[];
  commentsById: State['commentsById'];
}
