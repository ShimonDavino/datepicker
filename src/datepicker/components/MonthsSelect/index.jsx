import React, { Component } from 'react';
import DatepickerContext from '../../DatepickerContext';
import { monthFormat } from '../../utils';
import './style.scss';

class MonthsSelect extends Component {
  static contextType = DatepickerContext;
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleMouseClick, false);
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleMouseClick, false);
  }

  toggleOptions = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  handleMouseClick = e => {
    if (!this.state.isOpen || this.node.contains(e.target)) {
      return;
    }
    this.toggleOptions();
  };
  handleClick = date => {
    const { onClickMonth } = this.context;
    onClickMonth(date);
    this.toggleOptions();
  };

  renderOptions() {
    const { isOpen } = this.state;
    const { months } = this.context.state;

    return (
      <div
        className={isOpen ? 'months-options open' : 'months-option'}
        // style={{ display: isOpen ? 'block' : 'none' }}
      >
        {isOpen &&
          months.map((item, index) => (
            <div
              tabIndex={0}
              role="button"
              onClick={() => this.handleClick(item)}
              key={`month-${index}`}
              className="month-option"
            >
              <span>{monthFormat(item)}</span>
            </div>
          ))}
      </div>
    );
  }

  renderInput() {
    const { isOpen } = this.state;
    const { activeMonth } = this.context.state;
    return (
      <div
        tabIndex={0}
        role="button"
        onClick={this.toggleOptions}
        className="months-select-input"
      >
        <span>{monthFormat(activeMonth)}</span>
        <div className={isOpen ? 'arrow-down' : 'arrow-up'} />
      </div>
    );
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div
        className={`months-select ${isOpen ? 'open' : 'close'}`}
        ref={node => (this.node = node)}
      >
        {this.renderInput()}
        {this.renderOptions()}
      </div>
    );
  }
}

export default MonthsSelect;
