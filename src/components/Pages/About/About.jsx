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
import AboutAside from './AboutAside/AboutAside';
import AboutItems from './AboutItems/AboutItems';
import AsideDefault from '../../Ui/AsideDefault/AsideDefault';

const About = ({ about, whatsApp }) => {
  const data = useStaticQuery(graphql`
    query {
      aboutCover: file(relativePath: { eq: "team_01.jpeg" }) {
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
    <SectionDefault classes={'about-page'}>
      <ContentWrapper>
        <SectionHeaderMain
          title={useLanguage(
            'Про Доктора',
            'About Doctor',
            'Über Doktor',
            'О Докторе'
          )}
        />
        <StikyGrid>
          <StikyGridColumn>
            <AsideDefault offsetTop={140}>
              <AboutAside
                img={data.aboutCover.childImageSharp}
                whatsApp={whatsApp}
              />
            </AsideDefault>
          </StikyGridColumn>
          <StikyGridColumn>
            <AboutItems about={about} whatsApp={whatsApp} />
          </StikyGridColumn>
        </StikyGrid>
      </ContentWrapper>
    </SectionDefault>
  );
};

About.propTypes = {
  about: PropTypes.object,
  whatsApp: PropTypes.string,
};

export default About;
