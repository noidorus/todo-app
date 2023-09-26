import List from './TaskList/List';

import './Board.scss';

export const Board = ({ lists }: BoardProps) => {
  const elements = lists.map((list, index) => (
    <List key={list} index={index} listId={list} />
  ));

  return <div className="lists">{elements}</div>;
};

interface BoardProps {
  lists: string[];
}
