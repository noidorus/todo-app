import { connect } from 'react-redux';
import { useMemo, useState } from 'react';
import { nanoid } from 'nanoid';
import { State } from '../../../redux/store';
import { Button } from '../../Commons/Button/Button';
import TaskListItem from './TaskListItem/TaskListItem';
import AddItemForm from '../../AddItemForm/AddItemForm';
import { TaskType } from '../../../types';
import {
  addTask,
  changeTaskStatus,
  deleteTask,
} from '../../../redux/actions/cardsByIdActions';
import { ProgressBar } from '../../Commons/ProgressBar/ProgressBar';
import './CheckList.scss';

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

  const completed = useMemo(() => {
    const completedLentgh = taskList.filter(({ checked }) => checked).length;
    if (taskList.length === 0) {
      return 0;
    }
    return Math.floor((100 / taskList.length) * completedLentgh);
  }, [taskList]);

  const elements = useMemo(() => {
    return taskList.map((task) => (
      <TaskListItem
        onChangeCheckbox={onChangeCheckbox}
        key={task.id}
        deleteTask={onDeleteTask}
        {...task}
      />
    ));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [taskList]);

  const onAddTask = (title: string) => {
    addTask(id, nanoid(), title);
  };

  return (
    <div className="check-list">
      <div className="check-list__title-wrapper">
        <h3>Check-list</h3>
      </div>
      <ProgressBar completed={completed} />

      <ul className="task-list">{elements}</ul>

      <div className="add-item__wrapper">
        {addingTask ? (
          <AddItemForm
            closeForm={() => setAddingTask(false)}
            addItem={onAddTask}
            placeholder="Add task"
            textareaClass={'check-list__textarea'}
          />
        ) : (
          <Button onClick={() => setAddingTask(true)} name="Add task" />
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
  taskList: TaskType[];
  addTask: (id: string, taskId: string, title: string) => void;
  changeTaskStatus: (id: string, taskId: string, checked: boolean) => void;
  deleteTask: (id: string, taskId: string) => void;
}
