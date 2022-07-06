import React from 'react';
import { useLanguage } from '../../../../../../hooks/useLanguage';
import PropTypes from 'prop-types';

const AboutItem = ({ item }) => {
  return (
    <article className="fund-about__item">
      <h3 className="fund-about__item--title">
        {useLanguage(
          item.title_ua,
          item.title_en,
          item.title_de,
          item.title_ru
        )}
      </h3>
      <p className="fund-about__item--descr">
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

AboutItem.propTypes = {
  item: PropTypes.object,
};

export default AboutItem;
