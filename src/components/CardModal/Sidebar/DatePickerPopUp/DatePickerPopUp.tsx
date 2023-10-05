import { FocusEvent, useState } from 'react';
import DatePicker from 'react-datepicker';
import { isValid } from 'date-fns';

import './DatePickerPopUp.scss';
import { EditButtons } from '../../../Buttons/EditButtons/EditButtons';

export const DatePickerPopUp = ({
  id,
  date,
  closePopUp,
  changeEndDate,
}: DatePickerPopUpProps) => {
  const [endDate, setEndDate] = useState<Date>(
    date.endDate ? new Date(date.endDate) : new Date()
  );
  const [error, setError] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(true);

  const onHandleChangeRaw = ({ target }: FocusEvent<HTMLInputElement>) => {
    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    const validRegex = dateRegex.test(target.value);
    const validDate = isValid(new Date(target.value));
    if (validRegex || validDate) {
      setError(true);
    }
  };

  const onClickClose = () => {
    if (closePopUp) closePopUp();
  };

  const onClickSave = () => {
    if (checkboxChecked) {
      changeEndDate(id, endDate.getTime());
    } else {
      changeEndDate(id, null);
    }

    if (closePopUp) closePopUp();
  };

  return (
    <div className="date-picker">
      <h4>Dates</h4>
      <DatePicker
        inline
        calendarClassName="date-picker__calendar"
        selected={endDate}
        onChange={(date) => {
          if (date) setEndDate(date);
        }}
      />
      <div className="error">{error && 'Invalid date format: mm/dd/yyyy'}</div>

      <div>Date of creation:</div>
      <DatePicker
        readOnly
        className="start-date"
        selected={new Date(date.createdDate)}
        onChange={(date) => {
          if (date) setEndDate(date);
        }}
      />

      <div>End date:</div>
      <div className="end-date">
        <input
          type="checkbox"
          checked={checkboxChecked}
          onChange={({ target }) => setCheckboxChecked(target.checked)}
        />
        <DatePicker
          disabled={!checkboxChecked}
          onChangeRaw={onHandleChangeRaw}
          calendarClassName="date-picker__input"
          autoFocus
          selected={endDate}
          onChange={(date) => {
            if (date) setEndDate(date);
          }}
        />
      </div>

      <EditButtons
        name="Save"
        onClickBtn={onClickSave}
        onClickClose={onClickClose}
      />
    </div>
  );
};

interface DatePickerPopUpProps {
  id: string;
  date: {
    createdDate: number;
    endDate: number | null;
  };
  changeEndDate: (id: string, endDate: number | null) => void;
  closePopUp?: () => void;
}
