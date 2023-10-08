import { CardType } from '../../../../types';
import { DateBadge } from '../../../Badges/DateBadge/DateBadge';
import { PriorityBadge } from '../../../Badges/PriorityBadge/PriorityBadge';
import { TaskListBadge } from '../../../Badges/TaskListBadge/TaskListBadge';
import descIcon from '../../../../assets/images/reader-outline.svg';
import { TimerBadge } from '../../../Badges/TimerBadge/TimerBadge';

export const CardBadges = ({
  priority,
  description,
  date,
  taskList,
  timer,
}: CardBadgesProps) => {
  return (
    <div className="card__badges">
      <DateBadge date={date} />
      <PriorityBadge priority={priority} />
      <TaskListBadge taskList={taskList} />
      {description && <img src={descIcon} width={18} alt="desc-icon" />}
      <TimerBadge timer={timer} />
    </div>
  );
};

interface CardBadgesProps extends CardType {}
