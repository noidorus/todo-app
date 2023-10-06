import classNames from 'classnames';
import { getDate } from '../../../helpers/date';
import './DateBadge.scss';

export const DateBadge = ({ date }: DateBadgeProps) => {
  const startDate = getDate(date.createdDate);
  const dateNow = getDate();
  const formattedStartDate =
    dateNow.year > startDate.year ? startDate.full : startDate.noYear;

  if (!date.endDate) {
    return <span className="date-badge">Created at: {formattedStartDate}</span>;
  }

  const endDate = getDate(date.endDate);
  const formattedEndDate =
    dateNow.year < endDate.year ? endDate.full : endDate.noYear;

  const classes = classNames({
    'date-badge': true,
    'date-timeout': dateNow.millis > endDate.millis,
  });

  return (
    <span className={classes}>
      {formattedStartDate} - {formattedEndDate}
    </span>
  );
};

interface DateBadgeProps {
  date: {
    createdDate: number;
    endDate: number | null;
  };
}
