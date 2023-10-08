import { connect } from 'react-redux';
import { State } from '../../../../redux/store';
import { AddComment } from './AddComment';
import './Comments.scss';
import {
  selectGroupedComments,
  Node,
} from '../../../../redux/selectors/commentsSelectors';

const Comment = ({ comment, commentListId }: CommentProps) => {
  return (
    <li>
      <h4>{comment.text}</h4>
      <AddComment pid={comment.id} commentsListId={commentListId} />
      <Comments comments={comment.children} commentsListId={commentListId} />
    </li>
  );
};

const Comments = ({ comments, commentsListId }: CommentsProps) => {
  return (
    <>
      {Boolean(comments.length) && (
        <ul className="comments__list">
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              commentListId={commentsListId}
              comment={comment}
            />
          ))}
        </ul>
      )}
    </>
  );
};

const CommentsContainer = ({ commentsListId, comments }: CommentsProps) => {
  return (
    <div className="comments">
      <h3 className="comments__title">Comments</h3>
      <AddComment pid="root" commentsListId={commentsListId} />
      <div className="comments__content">
        <Comments comments={comments} commentsListId={commentsListId} />
      </div>
    </div>
  );
};

export default connect(
  ({ comments }: State, { commentsListId }: { commentsListId: string }) => {
    const selectedComments = selectGroupedComments(comments[commentsListId]);
    return {
      comments: selectedComments!,
    };
  }
)(CommentsContainer);

interface CommentProps {
  commentListId: string;
  comment: Node;
}

interface CommentsProps {
  commentsListId: string;
  comments: Node[];
}
