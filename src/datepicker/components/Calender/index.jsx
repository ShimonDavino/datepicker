import React, { Component } from 'react';
import DatepickerContext from '../../DatepickerContext';
import { isAfter, addDays } from '../../utils';
import Day from '../Day';
import './style.scss';


class Calender extends Component {
  static contextType = DatepickerContext;
  constructor(props) {
    super(props);

    this.state = {};
  }
  renderDaysHeader = () => {
    return (
      <div className="days-header">
        <Day value="א'" className="day-header" />
        <Day value="ב'" className="day-header" />
        <Day value="ג'" className="day-header" />
        <Day value="ד'" className="day-header" />
        <Day value="ה'" className="day-header" />
        <Day value="ו'" className="day-header" />
        <Day value="ש'" className="day-header" />
      </div>
    );
  };
  renderWeek = ({ start, end }, index) => {
    const { weeks, today, activeMonth } = this.context.state;
    let days = [];
    const isLast = index === weeks.length - 1;
    for (let index = start; index <= end; index++) {
      const date = addDays(activeMonth, index - 1);
      const isActive = isAfter(date, today);
      days.push(
        <Day
          value={index}
          key={`day-${index}`}
          active={isActive}
          onClick={() => this.context.onClickDate(date)}
        />
      );
    }

    return <div key={`day-${index}`} className={isLast ? 'week last' : 'week'}>{days}</div>;
  };

  render() {
    const { weeks } = this.context.state;
    return (
      <div className="calender">
        {this.renderDaysHeader()}
        <div>{weeks.map(this.renderWeek)}</div>
      </div>
    );
  }
}

export default Calender;
