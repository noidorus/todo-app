import classNames from 'classnames';
import { Checkbox } from '../../../Controls/Checkbox/Checkbox';
import './TaskListItem.scss';

const TaskListItem = (props: TaskListItemProps) => {
  const onChangeCheckbox = (checked: boolean) => {
    props.onChangeCheckbox(props.id, checked);
  };

  const classes = classNames({
    'task-list__item': true,
    checked: props.checked,
  });

  return (
    <li className={classes}>
      <Checkbox onChange={onChangeCheckbox} checked={props.checked} />
      <div className="task-item-controls-and-text">
        <span className="task-title">{props.title}</span>
      </div>
    </li>
  );
};

export default TaskListItem;

interface TaskListItemProps {
  id: string;
  checked: boolean;
  title: string;
  onChangeCheckbox: (taskId: string, checked: boolean) => void;
}
