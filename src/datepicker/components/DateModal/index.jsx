import React, { Component } from 'react';
import DatepickerContext from '../../DatepickerContext';
import { Header, Calender, Footer } from '../index';
import './styles.scss';

class DateModal extends Component {
  static contextType = DatepickerContext;
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false
    };
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isVisible: true });
    }, 150);
  }

  handleClick = e => {
    if (!!e && this.node.contains(e.target)) {
      return;
    }
    this.setState({ isVisible: false });
    setTimeout(() => {
      this.context.onClickClose();
    }, 200);
  };

  renderClose() {
    return (
      <div
        tabIndex={0}
        role="button"
        onClick={() => this.handleClick()}
        className="close-button"
      />
    );
  }
  render() {
    const { isVisible } = this.state;
    return (
      <div
        className={isVisible ? 'datepicker open' : 'datepicker'}
        ref={node => (this.node = node)}
      >
        <div>
          <Header />
          <Calender />
        </div>
        <Footer />
        {this.renderClose()}
      </div>
    );
  }
}

export default DateModal;
