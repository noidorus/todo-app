import { ChangeEvent, useState, KeyboardEvent, createRef } from 'react';
import classNames from 'classnames';
import { EditButtons } from '../Controls/EditButtons/EditButtons';

import './AddItemForm.scss';

const AddItemForm = ({
  addItem,
  placeholder,
  closeForm,
  textareaClasses,
}: NewBoardFormProps) => {
  const [title, setTitle] = useState('');
  const textareaRef = createRef<HTMLTextAreaElement>();

  const onAddItem = () => {
    if (title.trim()) {
      addItem(title.trim());
      setTitle('');
      closeForm();
    } else {
      textareaRef.current?.focus();
    }
  };

  const onClickBtn = () => {
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
    <div className="add-item__form">
      <textarea
        placeholder={placeholder}
        onChange={onChangeInputText}
        value={title}
        ref={textareaRef}
        autoFocus
        onKeyDown={onEnter}
        className={classNames(textareaClasses)}
      />
      <EditButtons
        onClickBtn={onClickBtn}
        onClickClose={onCLoseForm}
        name="Create"
      />
    </div>
  );
};

interface NewBoardFormProps {
  addItem: (title: string) => void;
  placeholder: string;
  closeForm: () => void;
  textareaClasses?: string[];
}

export default AddItemForm;
