import { CardType } from '../../types';
import { DateBadge } from './DateBadge';
import { PriorityBadge } from './PriorityBadge';
import { TaskListBadge } from './TaskListBadge';
import { TimerBadge } from './TimerBadge';
import { CommentsBadge } from './CommentsBadge';
import { FilesBadge } from './FilesBadge';

import './Badges.scss';

export const Badges = ({
  date,
  priority,
  taskList,
  description,
  timer,
  comments,
  files,
}: BadgesProps) => {
  return (
    <div className="badges">
      {date && <DateBadge date={date} />}
      {priority && <PriorityBadge priority={priority} />}
      {taskList && <TaskListBadge taskList={taskList} />}
      {description && <span className="badge description-badge"></span>}
      {timer && <TimerBadge timer={timer} />}
      {comments && <CommentsBadge comments={comments} />}
      {files && <FilesBadge files={files} />}
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
