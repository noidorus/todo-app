import { connect } from 'react-redux';
import { State } from '../../../redux/store';
import { PriorityBadge } from '../../Badges/PriorityBadge/PriorityBadge';
import { DateBadge } from '../../Badges/DateBadge/DateBadge';

import './Badges.scss';
import { TimerBadge } from '../../Badges/TimerBadge/TimerBadge';
import { CardType } from '../../../types';

const Badges = ({ priority, date, timer }: BadgesProps) => {
  console.log('render');

  return (
    <div className="modal-badges">
      <DateBadge date={date} />
      <PriorityBadge priority={priority} />
      <TimerBadge timer={timer} />
    </div>
  );
};

export default connect(({ cardsById }: State, { id }: { id: string }) => ({
  priority: cardsById[id].priority,
  date: cardsById[id].date,
  timer: cardsById[id].timer,
}))(Badges);

interface BadgesProps {
  priority: CardType['priority'];
  date: CardType['date'];
  timer: CardType['timer'];
}
