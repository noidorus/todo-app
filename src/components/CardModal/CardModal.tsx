import { useParams } from 'react-router-dom';
import Header from './Header/Header';
import Description from './Description/Description';
import Sidebar from './Sidebar/Sidebar';
import Badges from './Badges/Badges';
import CheckList from './CheckList/CheckList';
import CommentsContainer from './Comments/CommentsContainer';
import './CardModal.scss';
import Files from './Files/Files';

export const CardModal = () => {
  const { id } = useParams();

  if (!id) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card-modal">
      <Header id={id} />
      <div className="main-col">
        <Badges id={id} />
        <Description id={id} />
        <Files id={id} />
        <CheckList id={id} />
        <CommentsContainer id={id} />
      </div>
      <Sidebar id={id} />
    </div>
  );
};
