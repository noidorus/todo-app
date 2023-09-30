import { connect } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';
import { State } from '../../../redux/store';
import type { ListType } from '../../../types';
import AddItemForm from '../../AddItemForm/AddItemForm';
import { addCardToList } from '../../../redux/actions/listByIdActions';
import { addCardToCards } from '../../../redux/actions/cardsByIdActions';
import Card from './Card/Card';

import './List.scss';
import { useState, useMemo } from 'react';

const List = ({ list, addCardToList, addCardToCards }: ListProps) => {
  const [addingItem, setAddingItem] = useState(false);

  const onAddCard = (title: string) => {
    const cardId = uuidv4();
    addCardToList(cardId, list.id);
    addCardToCards(cardId, title);
  };

  const toggleAddingItem = () => {
    setAddingItem((state) => !state);
  };

  const elements = useMemo(() => {
    return list.cards.map((card, index) => (
      <Card key={card} index={index} cardId={card} />
    ));
  }, [list.cards]);

  return (
    <div className="list">
      <h3>{list.title}</h3>
      <Droppable droppableId={list.id}>
        {(provided, snapshot) => (
          <ul ref={provided.innerRef} className="list-cards">
            {elements}
            {provided.placeholder}
            {addingItem ? (
              <AddItemForm
                textareaClasses={['card']}
                placeholder="Type card title"
                addItem={onAddCard}
                closeForm={toggleAddingItem}
              />
            ) : (
              <div className="add-card__btn" onClick={toggleAddingItem}>
                + <span>Create new card</span>
              </div>
            )}
          </ul>
        )}
      </Droppable>
    </div>
  );
};

interface ListProps {
  list: ListType;
  addCardToList: (cardId: string, listId: string) => void;
  addCardToCards: (id: string, title: string) => void;
}
interface OwnProps {
  listId: string;
}

const mapStateToProps = ({ listById }: State, { listId }: OwnProps) => ({
  list: listById[listId],
});

export default connect(mapStateToProps, { addCardToList, addCardToCards })(
  List
);
