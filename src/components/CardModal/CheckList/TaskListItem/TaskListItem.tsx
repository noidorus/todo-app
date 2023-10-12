import classNames from 'classnames';
import { Checkbox } from '../../../Commons/Checkbox/Checkbox';
import trashIcon from '../../../../assets/images/trash-outline.svg';
import { useConfirmationPopUp } from '../../../../hooks/useConfirmationPopUp';
import './TaskListItem.scss';

const TaskListItem = (props: TaskListItemProps) => {
  const onChangeCheckbox = (checked: boolean) => {
    props.onChangeCheckbox(props.id, checked);
  };

  const deleteTask = () => {
    props.deleteTask(props.id);
  };

  const { openPopUp, popUp } = useConfirmationPopUp({
    name: 'task',
    onClickConfirm: deleteTask,
  });

  const classes = classNames({
    'task-list__item': true,
    checked: props.checked,
  });

  return (
    <li className={classes}>
      <Checkbox onChange={onChangeCheckbox} checked={props.checked} />
      <div className="task-item-controls-and-text">
        <span className="task-title">{props.title}</span>
        <button className="delete-btn" onClick={openPopUp}>
          <img src={trashIcon} alt="" />
        </button>
      </div>
      {popUp}
    </li>
  );
};

export default TaskListItem;

interface TaskListItemProps {
  id: string;
  checked: boolean;
  title: string;
  cardId: string;
  onChangeCheckbox: (taskId: string, checked: boolean) => void;
  deleteTask: (taskId: string) => void;
}
