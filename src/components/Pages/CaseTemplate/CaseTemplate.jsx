import React from 'react';
import { useLanguage } from '../../../hooks/useLanguage';
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

const CaseTemplate = ({ caseData }) => {
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
              {/* <AboutAside
                img={data.aboutCover.childImageSharp}
                whatsApp={whatsApp}
              /> */}
              <CaseAside />
            </AsideDefault>
          </StikyGridColumn>
          <StikyGridColumn>
            {/* <AboutItems about={about} whatsApp={whatsApp} /> */}
            <CaseInfo />
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
