import { Checkbox } from '../../../Controls/Checkbox/Checkbox';
import './TaskListItem.scss';

const TaskListItem = ({ checked, title }: TaskListItemProps) => {
  // const onChange;

  return (
    <li className="task-list__item">
      {/* <Checkbox /> */}
      <span className="task-title">{title}</span>
    </li>
  );
};

export default TaskListItem;

interface TaskListItemProps {
  id: string;
  checked: boolean;
  title: string;
}
