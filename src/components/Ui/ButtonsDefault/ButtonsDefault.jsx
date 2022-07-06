import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';
// import PropTypes from 'prop-types';

export const DefaultButton = ({ hendler, title, children }) => {
  return (
    <button className="default-button" onClick={hendler}>
      <span className="default-button__title">{title}</span>
      {children && (
        <span className="default-button__icon--wrapper">{children}</span>
      )}
    </button>
  );
};

export const DefaultButtonLinkInner = ({ link, title, children }) => {
  return (
    <Link to={link} className="default-button default-button__link">
      <span className="default-button__title">{title}</span>
      {children && (
        <span className="default-button__icon--wrapper">{children}</span>
      )}
    </Link>
  );
};

export const DefaultButtonLink = ({ link, title, children }) => {
  return (
    <a
      href={link}
      target="blank"
      className="default-button default-button__link"
    >
      <span className="default-button__title">{title}</span>
      {children && (
        <span className="default-button__icon--wrapper">{children}</span>
      )}
    </a>
  );
};

// ButtonsDefault.propTypes = {};
