import { CardType } from '../../types';
import { DateBadge } from './DateBadge/DateBadge';
import { PriorityBadge } from './PriorityBadge/PriorityBadge';
import { TaskListBadge } from './TaskListBadge/TaskListBadge';
import { TimerBadge } from './TimerBadge/TimerBadge';

import './Badges.scss';

export const Badges = ({
  date,
  priority,
  taskList,
  description,
  timer,
}: BadgesProps) => {
  return (
    <div className="badges">
      {date && <DateBadge date={date} />}
      {priority && <PriorityBadge priority={priority} />}
      {taskList && <TaskListBadge taskList={taskList} />}
      {description && <span></span>}
      {timer && <TimerBadge timer={timer} />}
    </div>
  );
};

interface BadgesProps {
  date?: CardType['date'];
  priority?: CardType['priority'];
  taskList?: CardType['taskList'];
  description?: CardType['description'];
  timer?: CardType['timer'];
  comments?: CardType['comments'];
  files?: CardType['files'];
}
