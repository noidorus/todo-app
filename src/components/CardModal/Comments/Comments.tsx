import { Node } from '../../../redux/selectors/commentsSelectors';
import { useMemo } from 'react';
import { Controls } from './Controls/Controls';
import './Comments.scss';

const Comment = ({ comment, commentListId }: CommentProps) => {
  const idsToDelete = useMemo(() => {
    const countReplies = (comment: Node) => {
      let childrenArr: string[] = [comment.id];
      for (let c of comment.children) {
        childrenArr = [...childrenArr, ...countReplies(c)];
      }
      return childrenArr;
    };
    return countReplies(comment);
  }, [comment]);

  return (
    <li className="comment">
      <h4 className="comment__title">{comment.text}</h4>
      <Controls
        commentsListId={commentListId}
        pid={comment.id}
        idsToDelete={idsToDelete}
      />
      <Comments comments={comment.children} commentsListId={commentListId} />
    </li>
  );
};

export const Comments = ({ comments, commentsListId }: CommentsProps) => {
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

interface CommentProps {
  commentListId: string;
  comment: Node;
}
interface CommentsProps {
  commentsListId: string;
  comments: Node[];
}
