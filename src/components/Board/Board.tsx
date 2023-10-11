import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import { moveCard } from '../../redux/actions/listByIdActions';
import List from './CardList/List';

import './Board.scss';

const Board = ({ lists, cardNum, moveCard }: BoardProps) => {
  const elements = lists.map((list) => (
    <List cardNum={cardNum} key={list} listId={list} />
  ));

  const handleDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) return;

    if (
      source.index !== destination.index ||
      source.droppableId !== destination.droppableId
    ) {
      moveCard(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index
      );
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="lists">{elements}</div>
    </DragDropContext>
  );
};

export default connect(null, { moveCard })(Board);

interface BoardProps {
  lists: string[];
  cardNum: number;
  moveCard: (
    sourceListId: string,
    destListId: string,
    oldCardIndex: number,
    newCardIndex: number
  ) => void;
}
