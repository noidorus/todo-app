import { CardType } from '../../types';
import './CardModal.scss';
import Description from './Description/Description';
import CardModalHeader from './Header/Header';

export const CardModal = ({ card }: CardModalProps) => {
  return (
    <div className="card-modal">
      <CardModalHeader id={card.id} title={card.title} />
      <Description id={card.id} />
    </div>
  );
};

interface CardModalProps {
  card: CardType;
}
