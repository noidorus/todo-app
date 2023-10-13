import { connect } from 'react-redux';
import { useState, useMemo, createRef } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { nanoid } from 'nanoid';
import classNames from 'classnames';
import { State } from '../../../redux/store';
import type { ListType } from '../../../types';
import { addCardToList } from '../../../redux/actions/listByIdActions';
import { addCardToCards } from '../../../redux/actions/cardsByIdActions';
import { increaseCardNum } from '../../../redux/actions/boardsActions';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';
import { capitalize } from '../../../helpers/helpers';
import AddItemForm from '../../AddItemForm/AddItemForm';
import Card from './Card/Card';
import './List.scss';

const List = ({
  list,
  cardNum,
  addCardToList,
  addCardToCards,
  increaseCardNum,
}: ListProps) => {
  const [addingItem, setAddingItem] = useState(false);
  const listRef = createRef<HTMLDivElement>();
  useOnClickOutside(listRef, () => {
    setAddingItem(false);
  });

  const onAddCard = (title: string) => {
    const card = {
      id: nanoid(10),
      title,
      cardNum: cardNum,
    };

    addCardToList(card.id, list.id);
    addCardToCards(card);
    increaseCardNum(list.id);
  };

  const toggleAddingItem = () => {
    setAddingItem((state) => !state);
  };

  const elements = useMemo(() => {
    return list.cards.map((card, index) => (
      <Card key={card} index={index} cardId={card} />
    ));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list.cards]);

  const classes = classNames({
    list: true,
    'adding-card': addingItem,
  });

  return (
    <div className="list-wrapper" ref={listRef}>
      <h3>{capitalize(list.title)}</h3>

      <Droppable droppableId={list.id}>
        {(provided, snapshot) => (
          <div className={classes}>
            <ul ref={provided.innerRef} className="cards">
              {elements}
              {provided.placeholder}
            </ul>

            {addingItem && (
              <AddItemForm
                textareaClass={'card'}
                placeholder="Type card title"
                addItem={onAddCard}
                closeForm={toggleAddingItem}
              />
            )}
          </div>
        )}
      </Droppable>
      {!addingItem && (
        <div className="add-card__btn" onClick={toggleAddingItem}>
          + <span>Create new card</span>
        </div>
      )}
    </div>
  );
};

export default connect(
  ({ listById }: State, { listId }: { listId: string }) => ({
    list: listById[listId],
  }),
  { addCardToList, addCardToCards, increaseCardNum }
)(List);

interface ListProps {
  list: ListType;
  cardNum: number;
  addCardToList: (cardId: string, listId: string) => void;
  increaseCardNum: (listId: string) => void;
  addCardToCards: (card: {
    id: string;
    title: string;
    cardNum: number;
  }) => void;
}
