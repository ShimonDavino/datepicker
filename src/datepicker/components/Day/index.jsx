import React from 'react';
import './style.scss';

function Day({ value, className, active, onClick }) {
  return (
    <div
      tabIndex={onClick ? 0 : -1}
      role="button"
      onClick={() => onClick && onClick()}
      className={className ? className : active ? 'day active' : 'day'}
    >
      <span>{value}</span>
    </div>
  );
}

export default Day;
