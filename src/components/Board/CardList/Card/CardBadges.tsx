import descIcon from '../../../../assets/images/description-icon.svg';
import { TaskType } from '../../../../types';
import { DateBadge } from '../../../Badges/DateBadge/DateBadge';
import { PriorityBadge } from '../../../Badges/PriorityBadge/PriorityBadge';
import { TaskListBadge } from '../../../Badges/TaskListBadge/TaskListBadge';

export const CardBadges = ({
  priority,
  description,
  date,
  taskList,
}: CardBadgesProps) => {
  return (
    <div className="card__badges">
      <DateBadge date={date} />
      <PriorityBadge priority={priority} />
      <TaskListBadge taskList={taskList} />
      {description && <img src={descIcon} width={18} alt="desc-icon" />}
      {}
    </div>
  );
};

interface CardBadgesProps {
  priority: string;
  description: string;
  taskList: TaskType[];
  date: {
    createdDate: number;
    endDate: number | null;
  };
}
