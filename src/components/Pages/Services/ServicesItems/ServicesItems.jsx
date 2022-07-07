import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../hooks/useLanguage';

import {
  ServicesItem,
  ServicesItemCategory,
} from './ServicesItem/ServicesItem';

const ServicesItems = ({ servicesItems }) => {
  const langToggle = useLanguage;
  return (
    <div className="services-page__items">
      {servicesItems.map((item, index) => {
        if (item.category) {
          return (
            <ServicesItemCategory
              title={langToggle(
                item.title_ua,
                item.title_en,
                item.title_de,
                item.title_ru
              )}
              category={item.category}
              img={item.image}
              icon={item.icon}
              key={index}
            />
          );
        } else {
          return (
            <ServicesItem
              title={langToggle(
                item.title_ua,
                item.title_en,
                item.title_de,
                item.title_ru
              )}
              img={item.image}
              icon={item.icon}
              slug={item.slug}
              key={index}
            />
          );
        }
      })}
    </div>
  );
};

ServicesItems.propTypes = {
  servicesItems: PropTypes.array,
};

export default ServicesItems;
