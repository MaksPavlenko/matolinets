import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../hooks/useLanguage';
import { useStaticQuery, graphql } from 'gatsby';

import {
  ContentWrapper,
  SectionDefault,
  StikyGrid,
  StikyGridColumn,
} from '../../Ui/InterfaceSystem/InterfaceSystem';
import SectionHeaderMain from '../../Ui/SectionHeaderMain/SectionHeaderMain';
// import AboutAside from './AboutAside/AboutAside';
// import AboutItems from './AboutItems/AboutItems';
import AsideDefault from '../../Ui/AsideDefault/AsideDefault';
import ServicesInnerAside from './ServicesInnerAside/ServicesInnerAside';
import ServicesInfo from './ServicesInfo/ServicesInfo';

const ServicesInner = ({ service, whatsApp }) => {
  const data = useStaticQuery(graphql`
    query {
      servCover: file(relativePath: { eq: "mam.jpeg" }) {
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
  return (
    <SectionDefault classes={'service-inner__page'}>
      <ContentWrapper>
        <SectionHeaderMain
          title={useLanguage(
            service.title_ua,
            service.title_en,
            service.title_de,
            service.title_ru
          )}
        />
        <StikyGrid>
          <StikyGridColumn>
            <AsideDefault offsetTop={140}>
              <ServicesInnerAside
                img={data.servCover.childImageSharp}
                whatsApp={whatsApp}
                alt={useLanguage(
                  service.title_ua,
                  service.title_en,
                  service.title_de,
                  service.title_ru
                )}
              />
            </AsideDefault>
          </StikyGridColumn>
          <StikyGridColumn>
            <ServicesInfo info={'op'} whatsApp={whatsApp} />
          </StikyGridColumn>
        </StikyGrid>
      </ContentWrapper>
    </SectionDefault>
  );
};

ServicesInner.propTypes = {
  service: PropTypes.object,
  whatsApp: PropTypes.string,
};

export default ServicesInner;
