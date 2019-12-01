import React from 'react';
import './style.scss';

function Footer() {
  return (
    <div className="footer">
      <div className="row">
        <div className="circle-green small_circle" />
        <span>תאריכי יציאה וחזרה אפשריים</span>
      </div>
      <div className="row">
        <div className="circle-red small_circle" />
        <span>אפשרית טיסת צ'רטר בתאריכים אלו</span>
      </div>
    </div>
  );
}

export default Footer;
