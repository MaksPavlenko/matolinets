import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../../hooks/useLanguage';
import { useStaticQuery, graphql } from 'gatsby';

import DefaultSlider from '../../../../Ui/DefaultSlider/DefaultSlider';
import CasesItem from './CasesItem/CasesItem';

const CasessSlider = ({ items }) => {
  const data = useStaticQuery(graphql`
    query {
      fundCaseItem: file(relativePath: { eq: "case_cover_01.jpeg" }) {
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

  const langToggle = useLanguage;

  return (
    <div className="cases-slider__wrapper">
      <DefaultSlider>
        {items.map((item, index) => {
          return (
            <CasesItem
              key={index}
              title={langToggle(
                item.title_ua,
                item.title_en,
                item.title_de,
                item.title_ru
              )}
              description={langToggle(
                item.description_ua,
                item.description_en,
                item.description_de,
                item.description_ru
              )}
              slug={item.slug}
              img={data.fundCaseItem.childImageSharp}
            />
          );
        })}
      </DefaultSlider>
    </div>
  );
};

CasessSlider.propTypes = {
  items: PropTypes.array,
};

export default CasessSlider;
