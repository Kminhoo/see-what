import { format } from 'date-fns';

export const getDateRange = () => {
  const date = new Date();

  const endDate = new Date().setDate(date.getDate() + 30);

  return {
    startDate: format(date, 'yyyyMMdd'),
    endDate: format(endDate, 'yyyyMMdd')
  };
};
