import { connect } from 'react-redux';
import { State } from '../../../redux/store';
import { PriorityBadge } from '../../Badges/PriorityBadge/PriorityBadge';
import { DateBadge } from '../../Badges/DateBadge/DateBadge';

import './Badges.scss';

const Badges = ({ priority, date }: BadgesProps) => {
  return (
    <div className="modal-badges">
      <DateBadge date={date} />
      <PriorityBadge priority={priority} />
    </div>
  );
};

export default connect(({ cardsById }: State, { id }: { id: string }) => ({
  priority: cardsById[id].priority,
  date: cardsById[id].date,
}))(Badges);

interface BadgesProps {
  priority: string;
  id: string;
  date: {
    createdDate: number;
    endDate: number | null;
  };
}
