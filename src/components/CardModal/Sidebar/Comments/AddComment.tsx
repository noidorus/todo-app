import { useState } from 'react';
import AddItemForm from '../../../AddItemForm/AddItemForm';
import { useDispatch } from 'react-redux';
import { addComment } from '../../../../redux/actions/commentsActions';
import { nanoid } from 'nanoid';

export const AddComment = ({ pid, commentsListId }: AddCommentProps) => {
  const [formVisible, setFormVisible] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => {
    setFormVisible(false);
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
    <div className="add-comment">
      {formVisible ? (
        <AddItemForm
          textareaClass="add-comment__textarea"
          placeholder="Write a comment..."
          addItem={handleClickAddComment}
          closeForm={handleClose}
        />
      ) : (
        <div className="add-comment__plug" onClick={() => setFormVisible(true)}>
          Write a comment...
        </div>
      )}
    </div>
  );
};

interface AddCommentProps {
  pid: string;
  commentsListId: string;
}
