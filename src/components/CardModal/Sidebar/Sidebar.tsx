import { connect } from 'react-redux';
import { PrioritySelectorPopUp } from './PrioritySelectorPopUp/PrioritySelectorPopUp';
import { State } from '../../../redux/store';
import {
  changeEndDate,
  setPrioritySelector,
} from '../../../redux/actions/cardsByIdActions';

import 'react-datepicker/dist/react-datepicker.css';
import './Sidebar.scss';
import { DatePickerPopUp } from './DatePickerPopUp/DatePickerPopUp';
import { SidebarButtonLayout } from './SidebarButtonLayout';

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
    </ul>
  );
};

export default connect(
  ({ cardsById }: State, { id }: { id: string }) => ({
    ...cardsById[id],
  }),
  { setPrioritySelector, changeEndDate }
)(Sidebar);

interface SidebarProps {
  id: string;
  priority: string;
  date: {
    createdDate: number;
    endDate: number | null;
  };
  setPrioritySelector: (id: string, priority: string) => void;
  changeEndDate: (id: string, endDate: number | null) => void;
}
