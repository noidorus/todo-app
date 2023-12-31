import { Link } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { nanoid } from 'nanoid';
import { State } from '../../redux/store';
import { addBoard } from '../../redux/actions/boardsActions';
import { createNewLists } from '../../redux/actions/listByIdActions';
import { BoardType } from '../../types';
import AddItemForm from '../AddItemForm/AddItemForm';

import './BoardList.scss';

const BoardList = ({ boards, addBoard, createNewLists }: BoardsPageProps) => {
  const [addingItem, setAddingItem] = useState(false);

  const onAddBoard = (title: string) => {
    const newLists = [nanoid(10), nanoid(10), nanoid(10)];
    addBoard({ id: nanoid(10), title, lists: newLists, cardNum: 1 });
    createNewLists(newLists);
  };

  const elements = useMemo(() => {
    return boards.map(({ title, id }) => (
      <CSSTransition key={id} timeout={500} classNames="board">
        <li className="item" key={id}>
          <Link className="item-link" to={`/${id}`}>
            {title}
          </Link>
        </li>
      </CSSTransition>
    ));
  }, [boards]);

  const toggleAddingBoard = () => {
    setAddingItem((state) => !state);
  };

  return (
    <ul className="board__list">
      <li className="item">
        {addingItem ? (
          <AddItemForm
            placeholder="Type board title"
            addItem={onAddBoard}
            closeForm={toggleAddingBoard}
          />
        ) : (
          <div className="add-board__btn" onClick={toggleAddingBoard}>
            Create new board
          </div>
        )}
      </li>

      <TransitionGroup className="board__list" component={null}>
        {elements}
      </TransitionGroup>
    </ul>
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
