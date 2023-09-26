import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { State } from '../../redux/store';
import { BoardType } from '../../types';
import { Board } from '../../components/Board/Board';

const ActiveBoardPage = ({ boards }: ActiveBoardPageProps) => {
  const { id } = useParams();
  const activeBoard = boards.find((board) => board.id === id);

  if (!activeBoard) {
    return <div>Board not found!</div>;
  }

  return (
    <div>
      <h2 className="title">{activeBoard.title}</h2>
      <Board lists={activeBoard.lists} />
    </div>
  );
};

export default connect(({ boards }: State) => ({
  boards: boards.boards,
}))(ActiveBoardPage);

interface ActiveBoardPageProps {
  boards: BoardType[];
}
