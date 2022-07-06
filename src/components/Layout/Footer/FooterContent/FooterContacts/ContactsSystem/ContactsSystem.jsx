import React from 'react';
import PropTypes from 'prop-types';

export const ContactsList = ({ children }) => {
  return <ul className="contacts-list">{children}</ul>;
};

export const ContactsItem = ({ children }) => {
  return <li className="contacts-list__item">{children}</li>;
};

export const ContactsLink = ({ link, title, blank }) => {
  if (blank === true) {
    return (
      <a href={link} target="blank" className="contacts-list__item--link">
        {title}
      </a>
    );
  } else {
    return (
      <a href={link} className="contacts-list__item--link">
        {title}
      </a>
    );
  }
};

ContactsLink.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
};
