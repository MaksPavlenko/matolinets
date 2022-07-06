import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';

export const FooterNavWrapper = ({ children, cls }) => {
  return <nav className={`footer-nav__wrapper ${cls}`}>{children}</nav>;
};

export const FooterNavMarker = ({ title }) => {
  return <span className="footer-nav__marker">{title}</span>;
};

export const FooterNav = ({ children }) => {
  return <ul className="footer-nav">{children}</ul>;
};

export const FooterNavItem = ({ children }) => {
  return <ul className="footer-nav__item">{children}</ul>;
};

export const FooterNavLink = ({ link, title }) => {
  return (
    <Link to={link} className="footer-nav__link">
      <span className="footer-nav__link--title">{title}</span>
    </Link>
  );
};
