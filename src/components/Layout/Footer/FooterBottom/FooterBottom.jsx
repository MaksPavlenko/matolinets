import React from 'react';

import Nunox from '../../../../svg/nunox.svg';

const FooterBottom = () => {
  function getYear() {
    return new Date().getFullYear();
  }
  return (
    <div className="footer-bottom">
      <span className="footer-bottom__copy">© {getYear()}</span>
      <a
        href="https://www.nunox.co/"
        terget="blank"
        className="footer-bottom__create"
      >
        <Nunox className="footer-bottom__create--logo" />
      </a>
    </div>
  );
};

export default FooterBottom;
