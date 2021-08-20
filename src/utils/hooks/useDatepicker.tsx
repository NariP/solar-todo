import { useState } from 'react';
import moment, { Moment } from 'moment';
import { getKST } from '../index';

const useDatepicker = () => {
  const [date, setDate] = useState<string>(
    `${moment(getKST()).format(YYYY_MM_DD)}`,
  );

  const disabledDate = (current: Moment): boolean => {
    return current && current < moment(getKST()).subtract(1, 'days');
  };
  const handleDateChange = (date: Moment | null, dateString: string) => {
    setDate(dateString);
  };
  return { date, disabledDate, handleDateChange };
};
const YYYY_MM_DD: string = 'YYYY-MM-DD';
export default useDatepicker;
