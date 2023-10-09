import { CardType } from '../../types';
import Description from './Description/Description';
import Header from './Header/Header';
import './CardModal.scss';
import Sidebar from './Sidebar/Sidebar';
import Badges from './Badges/Badges';
import CheckList from './CheckList/CheckList';
import CommentsContainer from './Comments/CommentsContainer';

export const CardModal = ({ card }: CardModalProps) => {
  return (
    <div className="card-modal">
      <Header id={card.id} />
      <div className="main-col">
        <Badges id={card.id} />
        <Description id={card.id} />
        <CheckList id={card.id} />
        <CommentsContainer commentsListId={card.commentsId} />
      </div>
      <Sidebar id={card.id} />
    </div>
  );
};

interface CardModalProps {
  card: CardType;
}
