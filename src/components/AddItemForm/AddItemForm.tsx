import { ChangeEvent, FormEvent, useState } from 'react';

import './AddItemForm.scss';
import { EditButtons } from '../EditButtons/EditButtons';

const AddItemForm = ({ addItem }: NewBoardFormProps) => {
  const [addingItem, setAddingItem] = useState(false);
  const [title, setTitle] = useState('');

  const onAddItem = (e: FormEvent) => {
    e.preventDefault();
    addItem(title);
    setTitle('');
    setAddingItem(false);
  };

  const onChangeInputText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };

  const toggleAddingBoard = () => {
    setAddingItem((state) => !state);
  };

  return addingItem ? (
    <form onSubmit={onAddItem} className="item add-board__form">
      <textarea
        placeholder="Type board title"
        onChange={onChangeInputText}
        value={title}
        autoFocus
      />
      <EditButtons close={toggleAddingBoard} name="Create" />
    </form>
  ) : (
    <div className="item add-board add-board__btn" onClick={toggleAddingBoard}>
      Create new board
    </div>
  );
};

interface NewBoardFormProps {
  addItem: (title: string) => void;
}

export default AddItemForm;
