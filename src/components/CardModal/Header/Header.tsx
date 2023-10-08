import { KeyboardEvent, createRef, useState } from 'react';
import { connect } from 'react-redux';
import { changeCardTitle } from '../../../redux/actions/cardsByIdActions';
import { State } from '../../../redux/store';

import './Header.scss';
import { TextArea } from '../../Commons/TextArea/TextArea';

const CardModalHeader = (props: CardModalHeaderProps) => {
  const [title, setTitle] = useState(props.title);
  const textareaRef = createRef<HTMLTextAreaElement>();

  const onChangeCardTitle = (text: string) => {
    setTitle(text);
  };

  const setCardTitle = () => {
    if (!title.trim()) {
      textareaRef.current?.focus();
    } else {
      props.changeCardTitle(props.id, title);
    }
  };

  const onEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setCardTitle();
      textareaRef.current?.blur();
    }
  };

  return (
    <div className="card-header">
      <h2 className="card-header__title-assist">{props.title}</h2>
      <TextArea
        value={title}
        textAreaRef={textareaRef}
        className="card-header__title"
        onChange={onChangeCardTitle}
        onEnter={onEnter}
        onBlur={setCardTitle}
      />
    </div>
  );
};

export default connect(
  ({ cardsById }: State, { id }: { id: string }) => ({
    title: cardsById[id].title,
  }),
  { changeCardTitle }
)(CardModalHeader);

interface CardModalHeaderProps {
  title: string;
  id: string;
  changeCardTitle: (id: string, title: string) => void;
}
