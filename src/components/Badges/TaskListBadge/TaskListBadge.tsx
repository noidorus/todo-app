import classNames from 'classnames';
import { TaskType } from '../../../types';
import './TaskListBadge.scss';

export const TaskListBadge = ({ taskList }: TaskListBadgeProps) => {
  const { length } = taskList.filter(({ checked }) => checked);

  const classes = classNames({
    'task-list__badge': true,
    'task-list__completed': length === taskList.length,
  });

  return (
    <>
      {!!taskList.length && (
        <span className={classes}>{`${length}/${taskList.length}`}</span>
      )}
    </>
  );
};

interface TaskListBadgeProps {
  taskList: TaskType[];
}
