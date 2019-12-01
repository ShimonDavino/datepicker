import moment from './moment';

const getWeeksInMonth = (year, month) => {
  const weeks = [];
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();

  let dayOfWeek = firstDay.getDay();
  let start;
  let end;

  for (let index = 1; index < daysInMonth + 1; index++) {
    if (dayOfWeek === 0 || index === 1) {
      start = index;
    }
    if (dayOfWeek === 6 || index === daysInMonth) {
      end = index;
      weeks.push({
        start: start,
        end: end
      });
    }
    dayOfWeek = new Date(year, month, index + 1).getDay();
  }

  return weeks;
};

const monthFormat = date => {
  return moment(date).format('MMMM YYYY');
};

const dayFormat = date => {
  return moment(date).daysInMonth();
};

const today = () => {
  return moment()
    .startOf('day')
    .toDate();
};
const startOfMonth = () => {
  return moment()
    .startOf('month')
    .toDate();
};
const increaseMonth = date => {
  return moment(date)
    .add(1, 'M')
    .toDate();
};
const decreaseMonth = date => {
  return moment(date)
    .add(-1, 'M')
    .toDate();
};

const monthNumber = date => {
  return moment(date).format('M') * 1 - 1;
};

const yearNumber = date => {
  return moment(date).format('YYYY') * 1;
};

const getArrayOfMonths = () => {
  let months = [];
  const firstMonth = moment().startOf('month');
  months.push(firstMonth.toDate());
  for (let index = 1; index <= 12; index++) {
    const date = moment(firstMonth)
      .add(index, 'M')
      .toDate();
    months.push(date);
  }
  return months;
};

const isAfter = (date1, date2) => {
  return moment(date1).isSameOrAfter(date2);
};

const isSame = (date1, date2) => {
  return moment(date1).isSame(date2, 'd');
};

const addDays = (date, numberOfDays) => {
  return moment(date)
    .add(numberOfDays, 'd')
    .toDate();
};

export {
  monthFormat,
  dayFormat,
  today,
  addDays,
  startOfMonth,
  monthNumber,
  yearNumber,
  increaseMonth,
  decreaseMonth,
  getWeeksInMonth,
  getArrayOfMonths,
  isAfter,
  isSame
};
