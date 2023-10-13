import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { useConfirmationPopUp } from '../../../../hooks/useConfirmationPopUp';
import AddItemForm from '../../../AddItemForm/AddItemForm';
import {
  addComment,
  deleteComments,
} from '../../../../redux/actions/commentsActions';
import './Controls.scss';
import {
  addCommentToCard,
  deleteCommentsFromCard,
} from '../../../../redux/actions/cardsByIdActions';

export const Controls = ({ pid, cardId, idsToDelete }: ControlsProps) => {
  const [addingComment, setAddingComment] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => {
    setAddingComment(false);
  };

  const deleteComment = () => {
    dispatch(deleteCommentsFromCard(cardId, idsToDelete));
    dispatch(deleteComments(idsToDelete));
  };

  const { openPopUp, popUp } = useConfirmationPopUp({
    name: 'comment',
    onClickConfirm: deleteComment,
  });

  const handleClickAddComment = (text: string) => {
    const comment = {
      id: nanoid(10),
      text,
      pid,
    };
    dispatch(addCommentToCard(cardId, comment.id));
    dispatch(addComment(comment));
  };

  return (
    <>
      <div className="comment__controls">
        <span
          className="controls controls-reply"
          onClick={() => setAddingComment((state) => !state)}
        >
          Reply
        </span>
        <span className="controls controls-delete" onClick={openPopUp}>
          Delete
        </span>

        {popUp}
      </div>

      {addingComment && (
        <AddItemForm
          textareaClass="add-comment__textarea"
          placeholder="Write a comment..."
          addItem={handleClickAddComment}
          closeForm={handleClose}
        />
      )}
    </>
  );
};

interface ControlsProps {
  pid: string;
  cardId: string;
  idsToDelete: string[];
}
