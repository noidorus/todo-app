import { CardType } from '../../../../../types';
import './CardModal.scss';
import CardModalHeader from './Header/CardModalHeader';

export const CardModal = ({ card }: CardModalProps) => {
  return (
    <div className="card-modal">
      <CardModalHeader id={card.id} title={card.title} />
    </div>
  );
};

interface CardModalProps {
  card: CardType;
}
