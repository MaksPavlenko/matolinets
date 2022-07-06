import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';
// import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';
import { useLanguage } from '../../../../../hooks/useLanguage';
// import Img from '../../../../../svg/mam.svg'

export const ServicesItem = ({ slug, img, title }) => {
  return (
    <Link to={slug} className="services-item services-item__link">
      <span className="services-item__title">{title}</span>
      {/* <StaticImage src={img} alt={title} className="services-item__image" /> */}
      <StaticImage
        src="../../../../../svg/mam.svg"
        alt={title}
        className="services-item__image"
      />
    </Link>
  );
};

export const ServicesItemCategory = ({ title, img, category }) => {
  const langToggle = useLanguage;
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
      {/* <StaticImage src={img} alt={title} className="services-item__image" /> */}
      <StaticImage
        src="../../../../../svg/fac.svg"
        className="services-item__image services-item__image--category"
        alt={title}
      />
    </div>
  );
};

// ServicesItem.propTypes = {};
// ServicesItemCategory.propTypes = {};
