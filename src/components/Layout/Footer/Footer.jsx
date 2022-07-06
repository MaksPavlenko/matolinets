import React from 'react';
import PropTypes from 'prop-types';

import { ContentWrapper } from '../../Ui/InterfaceSystem/InterfaceSystem';
import FooterBottom from './FooterBottom/FooterBottom';
import FooterContent from './FooterContent/FooterContent';

const Footer = ({ menu, services, contacts }) => {
  return (
    <footer className="footer" id="contacts">
      <ContentWrapper>
        <FooterContent menu={menu} services={services} contacts={contacts} />
        <FooterBottom />
      </ContentWrapper>
    </footer>
  );
};

Footer.propTypes = {
  menu: PropTypes.array,
  services: PropTypes.array,
  contacts: PropTypes.object,
};

export default Footer;
