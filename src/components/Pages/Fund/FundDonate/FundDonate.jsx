import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../hooks/useLanguage';
import {
  ContentWrapper,
  SectionDefault,
} from '../../../Ui/InterfaceSystem/InterfaceSystem';
import SectionHeader from '../../../Ui/SectionHeader/SectionHeader';
import FundDonateItems from './FundDonateItems/FundDonateItems';

const FundDonate = ({ donate }) => {
  return (
    <SectionDefault classes={'fund-donate'}>
      <ContentWrapper>
        <SectionHeader
          title={useLanguage(
            donate.title_ua,
            donate.title_en,
            donate.title_de,
            donate.title_ru
          )}
        />
        <FundDonateItems donate={donate} />
      </ContentWrapper>
    </SectionDefault>
  );
};

FundDonate.propTypes = {
  donate: PropTypes.object,
};

export default FundDonate;
