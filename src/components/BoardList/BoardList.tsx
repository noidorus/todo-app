import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';
import { BoardItem } from './BoardItem/BoardItem';
import { State } from '../../redux/store';
import { addBoard } from '../../redux/reducers/boardsReducer';
import { createNewLists } from '../../redux/actions/listByIdActions';
import { BoardType } from '../../types';
import AddItemForm from '../AddItemForm/AddItemForm';

import './BoardList.scss';

const BoardList = ({ boards, addBoard, createNewLists }: BoardsPageProps) => {
  const onAddBoard = (title: string) => {
    const newLists = [uuidv4(), uuidv4(), uuidv4()];
    addBoard({ id: uuidv4(), title, lists: newLists });
    createNewLists(newLists);
  };

  const elements = boards.map(({ title, id }) => (
    <CSSTransition key={id} timeout={500} classNames="board">
      <BoardItem id={id} title={title} />
    </CSSTransition>
  ));

  return (
    <TransitionGroup className="board__list">
      <AddItemForm addItem={onAddBoard} />
      {elements}
    </TransitionGroup>
  );
};

export default connect(({ boards }: State) => ({ ...boards }), {
  addBoard,
  createNewLists,
})(BoardList);

interface BoardsPageProps {
  boards: State['boards']['boards'];
  addBoard: (newBoard: BoardType) => void;
  createNewLists: (listIds: string[]) => void;
}
