import { connect } from 'react-redux';
import { PrioritySelectorPopUp } from './PrioritySelectorPopUp/PrioritySelectorPopUp';
import {
  changeEndDate,
  pauseTimer,
  resetTimer,
  setPrioritySelector,
  setTimer,
} from '../../../redux/actions/cardsByIdActions';
import { DatePickerPopUp } from './DatePickerPopUp/DatePickerPopUp';
import { SidebarButtonLayout } from './SidebarButtonLayout';
import './Sidebar.scss';
import { TimerPopUp } from './TimerPopUp/TimerPopUp';
import { CardType } from '../../../types';
import UploadFilePopUp from './UploadFilePopUp/UploadFilePopUp';
import DeleteCardPopUp from './DeleteCardPopUp/DeleteCardPopUp';

const Sidebar = (props: SidebarProps) => {
  return (
    <ul className="sidebar">
      <SidebarButtonLayout name="Priority">
        <PrioritySelectorPopUp
          id={props.id}
          priority={props.priority}
          setPrioritySelector={props.setPrioritySelector}
        />
      </SidebarButtonLayout>

      <SidebarButtonLayout name="Dates">
        <DatePickerPopUp
          id={props.id}
          date={props.date}
          changeEndDate={props.changeEndDate}
        />
      </SidebarButtonLayout>

      <SidebarButtonLayout name="Timer">
        <TimerPopUp
          id={props.id}
          timer={props.timer}
          setTimer={props.setTimer}
          pauseTimer={props.pauseTimer}
          resetTimer={props.resetTimer}
        />
      </SidebarButtonLayout>

      <SidebarButtonLayout name="Upload file">
        <UploadFilePopUp id={props.id} />
      </SidebarButtonLayout>

      <SidebarButtonLayout name="Delete card">
        <DeleteCardPopUp listId={props.listId} id={props.id} />
      </SidebarButtonLayout>
    </ul>
  );
};

export default connect(null, {
  setPrioritySelector,
  changeEndDate,
  setTimer,
  pauseTimer,
  resetTimer,
})(Sidebar);

interface SidebarProps {
  id: string;
  date: CardType['date'];
  priority: CardType['priority'];
  timer: CardType['timer'];
  listId: string;
  setPrioritySelector: (id: string, priority: string) => void;
  changeEndDate: (id: string, endDate: number | null) => void;
  setTimer: (id: string, startedTime: number) => void;
  pauseTimer: (id: string, duration: number) => void;
  resetTimer: (id: string) => void;
}
