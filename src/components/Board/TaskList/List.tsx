import { connect } from 'react-redux';
import { State } from '../../../redux/store';
import type { ListType } from '../../../types';

import './List.scss';

const List = ({ list }: ListProps) => {
  return (
    <div className="list">
      <h3>{list.title}</h3>

      <div className="todos"></div>
    </div>
  );
};

interface ListProps {
  list: ListType;
  index: number;
}
interface ownProps {
  listId: string;
}

const mapStateToProps = ({ listById }: State, ownProps: ownProps) => ({
  list: listById[ownProps.listId],
});

export default connect(mapStateToProps, {})(List);
