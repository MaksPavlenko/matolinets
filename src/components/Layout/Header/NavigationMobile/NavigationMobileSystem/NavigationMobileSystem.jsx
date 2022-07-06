import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby-plugin-react-i18next';

export const NavListMobile = ({ children }) => {
  return <ul className="mobile-menu">{children}</ul>;
};

export const NavItemMobile = ({ children }) => {
  return <li className="mobile-menu__item">{children}</li>;
};

export const NavLinkMobile = ({ link, title }) => {
  return (
    <Link to={link} className="mobile-menu__item--link">
      <span className="mobile-menu__item--title">{title}</span>
    </Link>
  );
};

NavLinkMobile.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
};
