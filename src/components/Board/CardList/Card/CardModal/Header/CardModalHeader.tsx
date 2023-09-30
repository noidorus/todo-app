import { KeyboardEvent, createRef, useState } from 'react';
import { connect } from 'react-redux';
import { changeCardTitle } from '../../../../../../redux/actions/cardsByIdActions';
import titleIcon from '../../../../../../assets/images/title-icon.svg';

const CardModalHeader = (props: CardModalHeaderProps) => {
  const [title, setTitle] = useState(props.title);

  const textareaRef = createRef<HTMLTextAreaElement>();
  const onHandleBlur = () => {
    changeCardTitle();
  };

  const changeCardTitle = () => {
    if (!title.trim()) {
      textareaRef.current?.focus();
    } else {
      props.changeCardTitle(props.id, title);
    }
  };

  const onEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      changeCardTitle();
      textareaRef.current?.blur();
    }
  };

  return (
    <div className="card-modal__header">
      <img width={20} className="title-icon" src={titleIcon} alt="title-icon" />
      <textarea
        ref={textareaRef}
        className="card-modal__title"
        onBlur={onHandleBlur}
        onChange={({ target }) => {
          setTitle(target.value);
        }}
        onKeyDown={onEnter}
        rows={1}
        value={title}
      />
    </div>
  );
};

export default connect(null, { changeCardTitle })(CardModalHeader);

interface CardModalHeaderProps {
  title: string;
  id: string;
  changeCardTitle: (id: string, title: string) => void;
}
