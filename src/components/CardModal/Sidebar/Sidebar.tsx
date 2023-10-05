import { connect } from 'react-redux';
import { PrioritySelector } from './PrioritySelector';
import './Sidebar.scss';
import { State } from '../../../redux/store';
import { setPrioritySelector } from '../../../redux/actions/cardsByIdActions';

const Sidebar = (props: SidebarProps) => {
  return (
    <div className="sidebar">
      <PrioritySelector
        id={props.id}
        priority={props.priority}
        setPrioritySelector={props.setPrioritySelector}
      />
    </div>
  );
};

export default connect(
  ({ cardsById }: State, { id }: { id: string }) => ({
    priority: cardsById[id].priority,
  }),
  { setPrioritySelector }
)(Sidebar);

interface SidebarProps {
  id: string;
  priority: string;
  setPrioritySelector: (id: string, priority: string) => void;
}
