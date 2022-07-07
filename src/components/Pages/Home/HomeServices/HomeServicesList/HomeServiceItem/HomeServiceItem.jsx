import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';
import PropTypes from 'prop-types';

import Mam from '../../../../../../svg/mam.svg';
import Rin from '../../../../../../svg/rin.svg';
import Lip from '../../../../../../svg/lip.svg';
import Fac from '../../../../../../svg/fac.svg';

const HomeServiceItem = ({ link, title, icon }) => {
  const iconComponent =
    icon === 'rhinoplasty' ? (
      <Rin className="home-services__item--icon" />
    ) : icon === 'liposuction' ? (
      <Lip className="home-services__item--icon" />
    ) : icon === 'facial' ? (
      <Fac className="home-services__item--icon" />
    ) : icon === 'mammoplasty' ? (
      <Mam className="home-services__item--icon" />
    ) : null;

  return (
    <div className="home-services__item--wrapper">
      <Link to={link} className="home-services__item--link">
        {iconComponent}
        <span className="home-services__item--title">{title}</span>
      </Link>
    </div>
  );
};

HomeServiceItem.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
};

export default HomeServiceItem;
