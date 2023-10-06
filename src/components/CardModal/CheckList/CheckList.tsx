import { connect } from 'react-redux';
import { useMemo, useState } from 'react';
import { State } from '../../../redux/store';
import checkBoxIcon from '../../../assets/images/checkbox-outline.svg';
import { Button } from '../../Commons/Button/Button';
import TaskListItem from './TaskListItem/TaskListItem';
import AddItemForm from '../../AddItemForm/AddItemForm';
import { TaskType } from '../../../types';
import {
  addTask,
  changeTaskStatus,
  deleteTask,
} from '../../../redux/actions/cardsByIdActions';
import { nanoid } from 'nanoid';
import './CheckList.scss';
import { ProgressBar } from '../../Commons/ProgressBar/ProgressBar';

const CheckList = ({
  taskList,
  addTask,
  id,
  changeTaskStatus,
  deleteTask,
}: CheckListProps) => {
  const [addingTask, setAddingTask] = useState(false);

  const onChangeCheckbox = (taskId: string, checked: boolean) => {
    changeTaskStatus(id, taskId, checked);
  };

  const onDeleteTask = (taskId: string) => {
    deleteTask(id, taskId);
  };
  const taskItems = useMemo(() => Object.values(taskList), [taskList]);
  const completed = useMemo(() => {
    const completedLentgh = taskItems.filter(({ checked }) => checked).length;
    if (taskItems.length === 0) {
      return 0;
    }
    return Math.floor((100 / taskItems.length) * completedLentgh);
  }, [taskItems]);

  const elements = useMemo(() => {
    return taskItems.map((task) => (
      <TaskListItem
        onChangeCheckbox={onChangeCheckbox}
        key={task.id}
        deleteTask={onDeleteTask}
        {...task}
      />
    ));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [taskItems]);

  const onAddTask = (title: string) => {
    addTask(id, nanoid(), title);
  };

  return (
    <div className="check-list">
      <div className="check-list__title-wrapper">
        <h3>Check-list</h3>
        <img
          width={22}
          src={checkBoxIcon}
          alt="checkbox-icon"
          className="icon"
        />
      </div>
      <ProgressBar completed={completed} />

      <ul className="task-list">{elements}</ul>

      <div className="add-item__wrapper">
        {addingTask ? (
          <AddItemForm
            closeForm={() => setAddingTask(false)}
            addItem={onAddTask}
            placeholder="Add task"
          />
        ) : (
          <Button onCLick={() => setAddingTask(true)} name="Add task" />
        )}
      </div>
    </div>
  );
};

export default connect(
  ({ cardsById }: State, { id }: { id: string }) => ({
    taskList: cardsById[id].taskList,
  }),
  { addTask, changeTaskStatus, deleteTask }
)(CheckList);

interface CheckListProps {
  id: string;
  taskList: {
    [key: string]: TaskType;
  };
  addTask: (id: string, taskId: string, title: string) => void;
  changeTaskStatus: (id: string, taskId: string, checked: boolean) => void;
  deleteTask: (id: string, taskId: string) => void;
}
