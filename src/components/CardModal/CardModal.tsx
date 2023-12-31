import { useNavigate, useParams } from 'react-router-dom';
import Header from './Header/Header';
import Description from './Description/Description';
import Sidebar from './Sidebar/Sidebar';
import CheckList from './CheckList/CheckList';
import CommentsContainer from './Comments/CommentsContainer';
import { Files } from './Files/Files';
import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../redux/store';
import { Badges } from '../Badges/Badges';
import './CardModal.scss';

export const CardModal = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const card = useSelector(({ cardsById }: State) => cardsById[id!]);
  const listById = useSelector(({ listById }: State) => listById);

  useEffect(() => {
    if (!card) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [card]);

  const listId = useMemo(() => {
    return Object.values(listById).find((el) => el.cards.includes(card.id))!.id;
  }, []);

  if (!card && !listId) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card-modal">
      <Header id={card.id} title={card.title} />
      <div className="main-col">
        <Badges timer={card.timer} date={card.date} priority={card.priority} />
        <Description id={card.id} description={card.description} />
        <Files id={card.id} files={card.files} />
        <CheckList id={card.id} taskList={card.taskList} />
        <CommentsContainer id={card.id} comments={card.comments} />
      </div>

      <Sidebar
        listId={listId}
        id={card.id}
        timer={card.timer}
        date={card.date}
        priority={card.priority}
      />
    </div>
  );
};
