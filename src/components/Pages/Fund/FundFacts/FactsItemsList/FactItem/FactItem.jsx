import React from 'react';
import { useLanguage } from '../../../../../../hooks/useLanguage';
import PropTypes from 'prop-types';

const FactItem = ({ item }) => {
  return (
    <article className="fund-facts__item">
      <span className="fund-facts__item--marker">{item.marker}</span>
      <h3 className="fund-facts__item--title">
        {useLanguage(
          item.title_ua,
          item.title_en,
          item.title_de,
          item.title_ru
        )}
      </h3>
      <p className="fund-facts__item--descr">
        {useLanguage(
          item.description_ua,
          item.description_en,
          item.description_de,
          item.description_ru
        )}
      </p>
    </article>
  );
};

FactItem.propTypes = {
  item: PropTypes.object,
};

export default FactItem;
