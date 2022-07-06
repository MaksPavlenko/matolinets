import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../hooks/useLanguage';

import {
  ContentWrapper,
  SectionDefault,
} from '../../../Ui/InterfaceSystem/InterfaceSystem';
import SectionHeader from '../../../Ui/SectionHeader/SectionHeader';
import CasessSlider from './CasessSlider/CasessSlider';

const FundCases = ({ cases, items }) => {
  return (
    <SectionDefault classes={'fund-cases'}>
      <ContentWrapper>
        <SectionHeader
          title={useLanguage(
            cases.title_ua,
            cases.title_en,
            cases.title_de,
            cases.title_ru
          )}
        />
        <CasessSlider items={items} />
      </ContentWrapper>
    </SectionDefault>
  );
};

FundCases.propTypes = {
  cases: PropTypes.object,
  items: PropTypes.array,
};

export default FundCases;
