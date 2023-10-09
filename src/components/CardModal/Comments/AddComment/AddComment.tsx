import { nanoid } from 'nanoid';
import { addComment } from '../../../../redux/actions/commentsActions';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import AddItemForm from '../../../AddItemForm/AddItemForm';
import './AddComment.scss';

export const AddComment = ({ commentsListId }: AddCommentProps) => {
  const [formVisible, setFormVisible] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => {
    setFormVisible(false);
  };

  const handleAddItem = (text: string) => {
    const comment = { id: nanoid(10), text, pid: 'root' };
    dispatch(addComment(commentsListId, comment));
  };

  return (
    <div className="add-comment">
      {formVisible ? (
        <AddItemForm
          textareaClass="add-comment__textarea"
          placeholder="Write a comment..."
          addItem={handleAddItem}
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
  commentsListId: string;
}
