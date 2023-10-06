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
  };
};

interface GetDate {
  year: number;
  full: string;
  noYear: string;
}
