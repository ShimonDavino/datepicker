import React, { Component } from 'react';
import { DateModal } from './components';
import { DatepickerProvider } from './DatepickerContext';
import {
  today,
  startOfMonth,
  increaseMonth,
  decreaseMonth,
  monthNumber,
  yearNumber,
  getWeeksInMonth,
  getArrayOfMonths
} from './utils';
import './style.scss';

class Datepicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: null,
      activeMonth: startOfMonth(),
      today: today(),
      weeks: [],
      months: [],
      isOpen: false
    };
  }

  componentDidMount() {
    const { activeMonth } = this.state;
    const months = getArrayOfMonths();
    this.updateActiveMonth(activeMonth);
    this.setState({ months });
  }

  toggleDatepicker = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  updateActiveMonth = date => {
    const month = monthNumber(date);
    const year = yearNumber(date);
    const weeks = getWeeksInMonth(year, month);
    this.setState({ activeMonth: date, weeks });
  };
  handleSelectDate = date => {
    const { onChange = () => {} } = this.props;
    this.toggleDatepicker();
    this.setState({ selectedDate: date });
    onChange(date);
  };
  handleClickPrev = () => {
    const { activeMonth } = this.state;
    const newDate = decreaseMonth(activeMonth);
    this.updateActiveMonth(newDate);
  };
  handleClickNext = () => {
    const { activeMonth } = this.state;
    const newDate = increaseMonth(activeMonth);
    this.updateActiveMonth(newDate);
  };

  renderInput() {
    const { selectedDate } = this.state;
    return (
      <div
        className="datepicker-input"
        tabIndex={0}
        role="button"
        onClick={this.toggleDatepicker}
      >
        <span>{selectedDate ? selectedDate.toString() : 'בחר תאריך'}</span>
      </div>
    );
  }
  render() {
    const { isOpen } = this.state;
    return (
      <DatepickerProvider
        value={{
          state: this.state,
          onClickDate: this.handleSelectDate,
          onClickMonth: this.updateActiveMonth,
          onClickPrev: this.handleClickPrev,
          onClickNext: this.handleClickNext,
          onClickClose: this.toggleDatepicker
        }}
      >
        <div className="datepicker-wrap">
          {this.renderInput()}
          {isOpen ? <DateModal /> : null}
        </div>
      </DatepickerProvider>
    );
  }
}

export default Datepicker;
