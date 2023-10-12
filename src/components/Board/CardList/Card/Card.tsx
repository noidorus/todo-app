import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';
import { State } from '../../../../redux/store';
import { CardType } from '../../../../types';
import { Badges } from '../../../Badges/Badges';

import './Card.scss';

const Card = ({ card, index }: CardProps) => {
  const location = useLocation();

  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided, snapshot) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="card-wrapper"
        >
          <Link
            className="card"
            to={`/card/${card.id}`}
            state={{ background: location }}
          >
            <h4 className="card__title">{card.title}</h4>
            <Badges
              date={card.date}
              priority={card.priority}
              taskList={card.taskList}
              description={card.description}
              timer={card.timer}
            />
          </Link>
        </li>
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
