import { ChangeEvent, FormEvent, useState, KeyboardEvent } from 'react';
import classNames from 'classnames';
import { EditButtons } from '../EditButtons/EditButtons';

import './AddItemForm.scss';

const AddItemForm = ({
  addItem,
  placeholder,
  closeForm,
  textareaClasses,
}: NewBoardFormProps) => {
  const [title, setTitle] = useState('');

  const onAddItem = () => {
    if (title.trim()) {
      addItem(title);
      setTitle('');
      closeForm();
    }
  };

  const onHandleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onAddItem();
  };

  const onEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onAddItem();
    }
  };

  const onChangeInputText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };

  const onCLoseForm = () => {
    closeForm();
    setTitle('');
  };

  return (
    <form onSubmit={onHandleSubmit} className="add-item__form">
      <textarea
        placeholder={placeholder}
        onChange={onChangeInputText}
        value={title}
        autoFocus
        onKeyDown={onEnter}
        className={classNames(textareaClasses)}
      />
      <EditButtons
        disabled={!title.trim().length}
        close={onCLoseForm}
        name="Create"
      />
    </form>
  );
};

interface NewBoardFormProps {
  addItem: (title: string) => void;
  placeholder: string;
  closeForm: () => void;
  textareaClasses?: string[];
}

export default AddItemForm;
