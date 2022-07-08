import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../hooks/useLanguage';
import {
  ContentWrapper,
  SectionDefault,
} from '../../Ui/InterfaceSystem/InterfaceSystem';
import SectionHeaderMain from '../../Ui/SectionHeaderMain/SectionHeaderMain';
import WorksInnerItem from './WorksInnerItem/WorksInnerItem';

const WorksInner = ({ works }) => {
  const galleryWorks = useStaticQuery(graphql`
    query allGallaryWorkQuery {
      source: allFile(
        filter: { absolutePath: { regex: "/works/" } }
        sort: { fields: [name], order: ASC }
      ) {
        nodes {
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
    }
  `);

  const images = galleryWorks.source.nodes;

  const langToggle = useLanguage;

  return (
    <SectionDefault classes={'works-inner__page'}>
      <ContentWrapper>
        <SectionHeaderMain
          title={langToggle(
            works.title_ua,
            works.title_en,
            works.title_de,
            works.title_ru
          )}
        />
        <div className="works-gallery">
          {images.map((item, index) => {
            return (
              <WorksInnerItem
                key={index}
                img={item.childImageSharp}
                title={langToggle(
                  works.title_ua,
                  works.title_en,
                  works.title_de,
                  works.title_ru
                )}
              />
            );
          })}
        </div>
      </ContentWrapper>
    </SectionDefault>
  );
};

WorksInner.propTypes = {
  works: PropTypes.object,
};

export default WorksInner;
