import { KeyboardEvent, createRef, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { changeCardTitle } from '../../../redux/actions/cardsByIdActions';
import { State } from '../../../redux/store';

import './Header.scss';

const CardModalHeader = (props: CardModalHeaderProps) => {
  const [title, setTitle] = useState(props.title);
  const textareaRef = createRef<HTMLTextAreaElement>();
  const onHandleBlur = () => {
    changeCardTitle();
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + 'px';
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title]);

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
    <div className="card-header">
      <h2 className="card-header__title-assist">{props.title}</h2>
      <textarea
        ref={textareaRef}
        className="card-header__title"
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
