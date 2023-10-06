import { connect } from 'react-redux';
import { useState } from 'react';
import { State } from '../../../redux/store';
import checkBoxIcon from '../../../assets/images/checkbox-outline.svg';
import { Button } from '../../Controls/Button/Button';
import TaskListItem from './TaskListItem/TaskListItem';
import AddItemForm from '../../AddItemForm/AddItemForm';
import { CheckListType } from '../../../types';
import { addTask } from '../../../redux/actions/cardsByIdActions';
import { nanoid } from 'nanoid';
import './CheckList.scss';

const CheckList = ({ checkList, addTask, id }: CheckListProps) => {
  const [addingTask, setAddingTask] = useState(false);

  const elements = Object.values(checkList).map((task) => (
    <TaskListItem key={task.id} {...task} />
  ));

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
    checkList: cardsById[id].checkList,
  }),
  { addTask }
)(CheckList);

interface CheckListProps {
  id: string;
  checkList: {
    [key: string]: CheckListType;
  };
  addTask: (id: string, taskId: string, title: string) => void;
}
