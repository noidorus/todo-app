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

const List = ({ list, addCardToList, addCardToCards, ...props }: ListProps) => {
  const onAddCard = (title: string) => {
    const cardId = uuidv4();
    addCardToList(cardId, list.id);
    addCardToCards(cardId, title);
  };

  const elements = list.cards.map((list, index) => (
    <Card key={list} index={index} cardId={list} />
  ));

  return (
    <div className="list">
      <h3>{list.title}</h3>
      <Droppable droppableId={list.id}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            className="list-cards"
            // isDraggingOver={snapshot.isDraggingOver}
          >
            {elements}

            {provided.placeholder}

            <AddItemForm addItem={onAddCard} />
          </div>
        )}
      </Droppable>
    </div>
  );
};

interface ListProps {
  list: ListType;
  index: number;
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
