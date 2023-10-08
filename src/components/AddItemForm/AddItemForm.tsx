import { useState, KeyboardEvent, createRef } from 'react';
import { EditButtons } from '../Commons/EditButtons/EditButtons';
import './AddItemForm.scss';
import { TextArea } from '../Commons/TextArea/TextArea';

const AddItemForm = ({
  addItem,
  placeholder,
  closeForm,
  textareaClass,
}: NewBoardFormProps) => {
  const [text, setText] = useState('');
  const textareaRef = createRef<HTMLTextAreaElement>();

  const onAddItem = () => {
    if (text.trim()) {
      addItem(text.trim());
      setText('');
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

  const onChangeInputText = (text: string) => {
    setText(text);
  };

  const onCLoseForm = () => {
    closeForm();
    setText('');
  };

  return (
    <div className="add-item__form">
      <TextArea
        placeholder={placeholder}
        onChange={onChangeInputText}
        value={text}
        textAreaRef={textareaRef}
        autofocus={true}
        onEnter={onEnter}
        className={textareaClass}
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
  textareaClass?: string;
}

export default AddItemForm;
