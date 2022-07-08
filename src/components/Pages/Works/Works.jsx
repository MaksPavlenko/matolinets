import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../hooks/useLanguage';
import { useStaticQuery, graphql } from 'gatsby';

import {
  ContentWrapper,
  SectionDefault,
} from '../../Ui/InterfaceSystem/InterfaceSystem';
import SectionHeaderMain from '../../Ui/SectionHeaderMain/SectionHeaderMain';
import WorksItem from './WorksItem/WorksItem';

const Works = ({ works }) => {
  const data = useStaticQuery(graphql`
    query {
      workImage: file(relativePath: { eq: "works.jpeg" }) {
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
    <SectionDefault classes={'works-page'}>
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
          {works.items.map((item, index) => {
            console.log(item);
            return (
              <WorksItem
                key={index}
                link={item.slug}
                title={langToggle(
                  item.title_ua,
                  item.title_en,
                  item.title_de,
                  item.title_ru
                )}
                img={data.workImage.childImageSharp}
              />
            );
          })}
        </div>
      </ContentWrapper>
    </SectionDefault>
  );
};

Works.propTypes = {
  works: PropTypes.object,
};

export default Works;
