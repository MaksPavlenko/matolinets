import * as React from 'react';
import PropTypes from 'prop-types';
// import { StaticQuery, graphql } from 'gatsby';
import { Header, Footer } from './index';

import { menuData, servicesFooterData } from '../../db/menuData';
import { contactsData } from '../../db/contactsData';

const Layout = ({ children, cls }) => {
  return (
    <div className="app-container">
      <Header cls={cls} menu={menuData} />
      <main>{children}</main>
      <Footer
        menu={menuData}
        services={servicesFooterData}
        contacts={contactsData}
      />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
