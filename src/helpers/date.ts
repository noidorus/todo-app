import { DateTime } from 'luxon';

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

export const getDuration = (millis: number): Duration => {
  const nowTime = DateTime.now();
  const startTime = DateTime.fromMillis(millis);
  console.log('now: ', nowTime.toMillis());
  return nowTime.diff(startTime, ['days', 'hours', 'minutes']); //=>	15109.533487604167
};

interface GetDate {
  year: number;
  full: string;
  noYear: string;
  millis: number;
}
