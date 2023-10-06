import classNames from 'classnames';
import { Checkbox } from '../../../Controls/Checkbox/Checkbox';

import trashIcon from '../../../../assets/images/trash-outline.svg';
import './TaskListItem.scss';

const TaskListItem = (props: TaskListItemProps) => {
  const onChangeCheckbox = (checked: boolean) => {
    props.onChangeCheckbox(props.id, checked);
  };

  const onHandleClickBtn = () => {
    props.deleteTask(props.id);
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
        <button className="delete-btn" onClick={onHandleClickBtn}>
          <img src={trashIcon} alt="" />
        </button>
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
  deleteTask: (taskId: string) => void;
}
