import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import AddItemForm from '../../../AddItemForm/AddItemForm';
import {
  addComment,
  deleteComments,
} from '../../../../redux/actions/commentsActions';
import './Controls.scss';

export const Controls = ({
  pid,
  commentsListId,
  idsToDelete,
}: ControlsProps) => {
  const [addingComment, setAddingComment] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => {
    setAddingComment(false);
  };

  const handleDelete = () => {
    dispatch(deleteComments(commentsListId, idsToDelete));
  };

  const handleClickAddComment = (text: string) => {
    const comment = {
      id: nanoid(10),
      text,
      pid,
    };
    dispatch(addComment(commentsListId, comment));
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
        <span className="controls controls-delete" onClick={handleDelete}>
          Delete
        </span>
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
  commentsListId: string;
  idsToDelete: string[];
}
