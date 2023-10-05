import { CardType } from '../../types';
import Description from './Description/Description';
import CardModalHeader from './Header/Header';
import './CardModal.scss';
import Sidebar from './Sidebar/Sidebar';
import Badges from './Badges/Badges';

export const CardModal = ({ card }: CardModalProps) => {
  return (
    <div className="card-modal">
      <CardModalHeader id={card.id} />
      <Badges id={card.id} />
      <Description id={card.id} />
      <Sidebar id={card.id} />
    </div>
  );
};

interface CardModalProps {
  card: CardType;
}
