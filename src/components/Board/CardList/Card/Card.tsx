import { connect } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';
import { State } from '../../../../redux/store';
import { CardType } from '../../../../types';

import './Card.scss';

const Card = ({ card, index }: CardProps) => {
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="card"
        >
          {card.title}
        </div>
      )}
    </Draggable>
  );
};
interface CardProps {
  card: CardType;
  index: number;
}

interface OwnProps {
  cardId: string;
}

const mapStateToProps = ({ cardsById }: State, { cardId }: OwnProps) => ({
  card: cardsById[cardId],
});

export default connect(mapStateToProps, {})(Card);
