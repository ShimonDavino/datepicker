import React, { Component } from 'react';
import DatepickerContext from '../../DatepickerContext';
import { isSame } from '../../utils';
import { MonthsSelect } from '../index';
import './style.scss';

class Header extends Component {
  static contextType = DatepickerContext;
  renderTitle = () => {
    return (
      <div className="title">
        <span>תאריך יציאה</span>
      </div>
    );
  };
  renderMonthsHeader = () => {
    const { onClickPrev, onClickNext, state } = this.context;
    const { months, activeMonth } = state;

    const isFirst = isSame(months[0], activeMonth);
    const isLast = isSame(months[months.length - 1], activeMonth);
    return (
      <div className="month-header">
        <button
          onClick={e => {
            e.preventDefault();
            onClickPrev();
          }}
          disabled={isFirst}
          className="month-button prev-button"
        >
          <i className="right" />
        </button>
        <MonthsSelect />
        <button
          onClick={e => {
            e.preventDefault();
            onClickNext();
          }}
          disabled={isLast}
          className="month-button next-button"
        >
          <i className="left" />
        </button>
      </div>
    );
  };

  render() {
    return (
      <div className="header">
        {this.renderTitle()}
        {this.renderMonthsHeader()}
      </div>
    );
  }
}

export default Header;
