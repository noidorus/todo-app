import BoardList from '../../components/BoardList/BoardList';
import './BoardsPage.scss';

export const BoardsPage = () => {
  return (
    <div className="boards">
      <h2 className="title">Boards list</h2>
      <BoardList />
    </div>
  );
};
