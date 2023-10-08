import {
  ChangeEvent,
  useState,
  KeyboardEvent,
  createRef,
  useEffect,
} from 'react';
import classNames from 'classnames';
import { EditButtons } from '../Commons/EditButtons/EditButtons';
import './AddItemForm.scss';

const AddItemForm = ({
  addItem,
  placeholder,
  closeForm,
  textareaClass,
}: NewBoardFormProps) => {
  const [title, setTitle] = useState('');
  const textareaRef = createRef<HTMLTextAreaElement>();

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + 'px';
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title]);

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
        className={classNames(textareaClass)}
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
