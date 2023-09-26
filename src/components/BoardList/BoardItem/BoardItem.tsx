import { Link } from 'react-router-dom';
export const BoardItem = ({ id, title }: BoardItemProps) => {
  return (
    <Link to={`/${id}`} key={id} className="item">
      {title}
    </Link>
  );
};

interface BoardItemProps {
  id: string;
  title: string;
}
