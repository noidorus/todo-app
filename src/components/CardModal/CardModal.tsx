import { CardType } from '../../types';
import Description from './Description/Description';
import CardModalHeader from './Header/Header';
import './CardModal.scss';

export const CardModal = ({ card }: CardModalProps) => {
  return (
    <div className="card-modal">
      <CardModalHeader id={card.id} />
      <Description id={card.id} />
    </div>
  );
};

interface CardModalProps {
  card: CardType;
}
