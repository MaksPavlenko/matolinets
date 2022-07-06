import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../hooks/useLanguage';

import SectionHeader from '../../../Ui/SectionHeader/SectionHeader';
import {
  ContentWrapper,
  SectionDefault,
} from '../../../Ui/InterfaceSystem/InterfaceSystem';
import AboutItemsList from './AboutItemsList/AboutItemsList';

const FundAbout = ({ about }) => {
  return (
    <SectionDefault classes={'fund-about'}>
      <ContentWrapper>
        <SectionHeader
          title={useLanguage(
            about.title_ua,
            about.title_en,
            about.title_de,
            about.title_ru
          )}
        />
        <AboutItemsList items={about.items} />
      </ContentWrapper>
    </SectionDefault>
  );
};

FundAbout.propTypes = {
  about: PropTypes.object,
};

export default FundAbout;
