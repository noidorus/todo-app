import { FocusEvent, useState } from 'react';
import DatePicker from 'react-datepicker';
import { DateTime } from 'luxon';
import { EditButtons } from '../../../Buttons/EditButtons/EditButtons';

import './DatePickerPopUp.scss';

export const DatePickerPopUp = ({
  id,
  date,
  closePopUp,
  changeEndDate,
}: DatePickerPopUpProps) => {
  const [endDate, setEndDate] = useState<Date>(
    date.endDate ? new Date(date.endDate) : new Date()
  );
  const [error, setError] = useState('');
  const [checkboxChecked, setCheckboxChecked] = useState(true);

  const onHandleChangeRaw = ({ target }: FocusEvent<HTMLInputElement>) => {
    const currDate = DateTime.fromFormat(target.value, 'dd/MM/yyyy');
    const createdDate = DateTime.fromMillis(date.createdDate);
    const diff = currDate.diff(createdDate, 'days').days;

    if (!currDate.isValid) {
      setError('Write date in format: dd/MM/yyyy');
    } else if (diff < -1) {
      setError(`Min date: ${createdDate.toFormat('dd/MM/yyyy')}`);
    } else {
      setError('');
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
        minDate={new Date()}
        dateFormat="dd/MM/yyyy"
      />

      <div className="error">{error}</div>

      <div>Date of creation:</div>
      <DatePicker
        readOnly
        className="start-date"
        selected={new Date(date.createdDate)}
        dateFormat="dd/MM/yyyy"
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
          dateFormat="dd/MM/yyyy"
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
