import React from 'react';
import PropTypes from 'prop-types';

import FooterContacts from './FooterContacts/FooterContacts';
import FooterMenu from './FooterMenu/FooterMenu';
import FooterServices from './FooterServices/FooterServices';
import FooterCharity from './FooterCharity/FooterCharity';

const FooterContent = ({ menu, services, contacts }) => {
  return (
    <div className="footer-content">
      <FooterCharity />
      <FooterMenu menu={menu} />
      <FooterServices services={services} />
      <FooterContacts contacts={contacts} />
    </div>
  );
};

FooterContent.propTypes = {
  menu: PropTypes.array,
  services: PropTypes.array,
  contacts: PropTypes.object,
};

export default FooterContent;
