import { Node } from '../../../redux/selectors/commentsSelectors';
import { useMemo } from 'react';
import { Controls } from './Controls/Controls';
import './Comments.scss';

const Comment = ({ comment, cardId }: CommentProps) => {
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
      <Controls cardId={cardId} pid={comment.id} idsToDelete={idsToDelete} />
      <Comments comments={comment.children} cardId={cardId} />
    </li>
  );
};

export const Comments = ({ comments, cardId }: CommentsProps) => {
  return (
    <>
      {Boolean(comments.length) && (
        <ul className="comments__list">
          {comments.map((comment) => (
            <Comment key={comment.id} cardId={cardId} comment={comment} />
          ))}
        </ul>
      )}
    </>
  );
};

interface CommentProps {
  cardId: string;
  comment: Node;
}
interface CommentsProps {
  cardId: string;
  comments: Node[];
}
