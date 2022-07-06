import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { useLanguage } from '../../../../../../hooks/useLanguage';

const TeamItem = ({ item }) => {
  const data = useStaticQuery(graphql`
    query {
      fundTemItem: file(relativePath: { eq: "team_01.jpeg" }) {
        childImageSharp {
          gatsbyImageData(
            breakpoints: [576, 768, 992, 1200, 1920]
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            layout: FULL_WIDTH
          )
        }
      }
    }
  `);
  const image = getImage(data.fundTemItem.childImageSharp);
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
