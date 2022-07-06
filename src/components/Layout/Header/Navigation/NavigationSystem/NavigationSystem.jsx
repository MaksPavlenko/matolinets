import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby-plugin-react-i18next';

export const NavList = ({ children }) => {
  return <ul className="menu">{children}</ul>;
};

export const NavItem = ({ children }) => {
  return <li className="menu-item">{children}</li>;
};

export const NavLink = ({ link, title }) => {
  return (
    <Link to={link} className="menu-item__link">
      <span className="menu-item__title">{title}</span>
    </Link>
  );
};

NavLink.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
};
