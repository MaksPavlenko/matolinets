import React from 'react';
import PropTypes from 'prop-types';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { useLanguage } from '../../../../../../hooks/useLanguage';

const TeamItem = ({ item }) => {

  const image = getImage(item.cover.localFile);
  return (
    <article className="fund-team__item">
      <div className="team-item__image--wrapper">
        <GatsbyImage
          className="team-item__image"
          image={image}
          alt={useLanguage(
            item.title_ua,
            item.title_en,
            item.title_de,
            item.title_ru
          )}
          loading="eager"
        />
      </div>
      <div className="team-item__info">
        <h3 className="team-item__info--title">
          {useLanguage(
            item.title_ua,
            item.title_en,
            item.title_de,
            item.title_ru
          )}
        </h3>
        <p className="team-item__info--descr">
          {useLanguage(
            item.description_ua,
            item.description_en,
            item.description_de,
            item.description_ru
          )}
        </p>
      </div>
    </article>
  );
};

TeamItem.propTypes = {
  item: PropTypes.object,
};

export default TeamItem;
