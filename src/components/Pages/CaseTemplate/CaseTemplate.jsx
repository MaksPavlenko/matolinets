import React from 'react';
import { useLanguage } from '../../../hooks/useLanguage';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import {
  ContentWrapper,
  SectionDefault,
  StikyGrid,
  StikyGridColumn,
} from '../../Ui/InterfaceSystem/InterfaceSystem';
import SectionHeaderMain from '../../Ui/SectionHeaderMain/SectionHeaderMain';
import AsideDefault from '../../Ui/AsideDefault/AsideDefault';
import CaseAside from './CaseAside/CaseAside';
import CaseInfo from './CaseInfo/CaseInfo';
import CaseInnerGallery from './CaseInnerGallery/CaseInnerGallery';
import CaseInnerVideo from './CaseInnerVideo/CaseInnerVideo';

const CaseTemplate = ({ caseData }) => {
  const data = useStaticQuery(graphql`
    query {
      caseCover: file(relativePath: { eq: "case_cover_01.jpeg" }) {
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
    <SectionDefault classes={'case-inner__page'}>
      <ContentWrapper>
        <SectionHeaderMain
          title={useLanguage(
            caseData.main.title_ua,
            caseData.main.title_en,
            caseData.main.title_de,
            caseData.main.title_ru
          )}
        />
        <StikyGrid>
          <StikyGridColumn>
            <AsideDefault offsetTop={140}>
              <CaseAside img={data.caseCover.childImageSharp} />
            </AsideDefault>
          </StikyGridColumn>
          <StikyGridColumn>
            <CaseInfo caseData={caseData} />
            <CaseInnerGallery gallery={caseData.gallery} />
            <CaseInnerVideo videoItems={caseData.video} />
          </StikyGridColumn>
        </StikyGrid>
      </ContentWrapper>
    </SectionDefault>
  );
};

CaseTemplate.propTypes = {
  caseData: PropTypes.object,
};

export default CaseTemplate;
