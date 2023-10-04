import { connect } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';
import { State } from '../../../../redux/store';
import { CardType } from '../../../../types';

import './Card.scss';
import { useModal } from '../../../Modal/ModalProvider';
import { CardModal } from '../../../CardModal/CardModal';

const Card = ({ card, index }: CardProps) => {
  const { setModal } = useModal();

  const onHandleClick = () => {
    setModal(<CardModal card={card} />);
  };

  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided, snapshot) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="card"
          onClick={onHandleClick}
        >
          <h4 className="card__title">{card.title}</h4>
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
