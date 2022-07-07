import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';
// import PropTypes from 'prop-types';
import { useLanguage } from '../../../../../hooks/useLanguage';

import Mam from '../../../../../svg/mam.svg';
import Rin from '../../../../../svg/rin.svg';
import Lip from '../../../../../svg/lip.svg';
import Fac from '../../../../../svg/fac.svg';

export const ServicesItem = ({ slug, img, title, icon }) => {
  const iconComponent =
    icon === 'rhinoplasty' ? (
      <Rin className="services-item__image" />
    ) : icon === 'liposuction' ? (
      <Lip className="services-item__image" />
    ) : icon === 'facial' ? (
      <Fac className="services-item__image" />
    ) : icon === 'mammoplasty' ? (
      <Mam className="services-item__image" />
    ) : null;
  return (
    <Link to={slug} className="services-item services-item__link">
      <span className="services-item__title">{title}</span>
      {iconComponent}
    </Link>
  );
};

export const ServicesItemCategory = ({ title, img, category, icon }) => {
  const langToggle = useLanguage;
  const iconComponent =
    icon === 'rhinoplasty' ? (
      <Rin className="services-item__image services-item__image--category" />
    ) : icon === 'liposuction' ? (
      <Lip className="services-item__image services-item__image--category" />
    ) : icon === 'facial' ? (
      <Fac className="services-item__image services-item__image--category" />
    ) : icon === 'mammoplasty' ? (
      <Mam className="services-item__image services-item__image--category" />
    ) : null;
  return (
    <div className="services-item services-item__category">
      <div className="services-item__info">
        <span className="services-item__title">{title}</span>
        <ul className="services-category">
          {category.map((item, index) => {
            return (
              <li className="services-category__item" key={index}>
                <Link to={item.slug} className="services-category__link">
                  <span className="services-category__title">
                    {langToggle(
                      item.title_ua,
                      item.title_en,
                      item.title_de,
                      item.title_ru
                    )}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      {iconComponent}
    </div>
  );
};

// ServicesItem.propTypes = {};
// ServicesItemCategory.propTypes = {};
