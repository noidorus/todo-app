import { connect } from 'react-redux';
import { State } from '../../../redux/store';
import { PriorityBadge } from '../../Badges/PriorityBadge';

import './Badges.scss';

const Badges = ({ priority }: BadgesProps) => {
  return (
    <div className="modal-badges">
      <PriorityBadge priority={priority} />
    </div>
  );
};

export default connect(({ cardsById }: State, { id }: { id: string }) => ({
  priority: cardsById[id].priority,
}))(Badges);

interface BadgesProps {
  priority: string;
  id: string;
}
