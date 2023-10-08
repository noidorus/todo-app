import { DateTime, Duration } from 'luxon';

export const getDate = (date?: number): GetDate => {
  const dateTime = date ? DateTime.fromMillis(date) : DateTime.now();

  return {
    year: +dateTime.toFormat('yyyy'),
    full: dateTime.toLocaleString(DateTime.DATE_MED),
    noYear: dateTime
      .toLocaleString(DateTime.DATE_MED)
      .split(' ')
      .slice(0, 2)
      .join(' '),
    millis: dateTime.toMillis(),
  };
};

export const getDuration = (
  startedTime: number | null,
  millis: number
): string => {
  const duration = startedTime
    ? Duration.fromMillis(Date.now() - startedTime + millis)
    : Duration.fromMillis(millis);

  const dur = {
    sec: +duration.toFormat('s'),
    mins: +duration.toFormat('m'),
    hour: +duration.toFormat('h'),
    hours: duration.toFormat('h:m'),
    day: +duration.toFormat('d'),
    days: duration.toFormat('d:h'),
  };
  let string = `${dur.sec}s`;

  if (dur.sec >= 60 && dur.mins < 60) {
    string = `${dur.mins}m`;
  } else if (dur.hour >= 1 && dur.mins % 60 === 0) {
    string = `${dur.hour}h`;
  } else if (dur.day < 1 && dur.mins % 60 > 1) {
    const [h, m] = dur.hours.split(':');
    string = `${h}h ${m}m`;
  } else if (dur.day >= 1 && dur.hour % 24 === 0) {
    string = `${dur.day}d`;
  } else if (dur.day >= 1 && dur.hour % 24 > 0) {
    const [d, h] = dur.days.split(':');
    string = `${d}d ${h}h`;
  }

  return string;
};

interface GetDate {
  year: number;
  full: string;
  noYear: string;
  millis: number;
}
