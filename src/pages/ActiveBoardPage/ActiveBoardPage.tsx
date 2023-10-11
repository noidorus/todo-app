import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { State } from '../../redux/store';
import { BoardType } from '../../types';
import Board from '../../components/Board/Board';

import './ActiveBoardPage.scss';

const ActiveBoardPage = ({ boards }: ActiveBoardPageProps) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { id } = useParams();
  const activeBoard = boards.find((board) => board.id === id);

  useEffect(() => {
    const cardId = searchParams.get('cardId');
    if (cardId) {
      navigate(`/${id}`, { replace: true });
      navigate(`/card/${cardId}`, { state: { background: `/${id}` } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  if (!activeBoard) {
    return <div>Board not found!</div>;
  }

  return (
    <div className="board">
      <h2 className="title">{activeBoard.title}</h2>
      <Board cardNum={activeBoard.cardNum} lists={activeBoard.lists} />
    </div>
  );
};

export default connect(({ boards }: State) => ({ ...boards }))(ActiveBoardPage);

interface ActiveBoardPageProps {
  boards: BoardType[];
}
