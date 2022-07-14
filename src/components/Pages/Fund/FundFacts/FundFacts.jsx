import React from 'react';
import PropTypes from 'prop-types';

import {
  ContentWrapper,
  SectionDefault,
} from '../../../Ui/InterfaceSystem/InterfaceSystem';
import CoverDefault from '../../../Ui/CoverDefault/CoverDefault';
import FactsItemsList from './FactsItemsList/FactsItemsList';

const FundFacts = ({ facts }) => {
 
  return (
    <SectionDefault classes={'fund-facts'}>
      <div className="fund-facts__wrapper">
        <CoverDefault img={facts.cover.localFile} />
        <ContentWrapper>
          <FactsItemsList items={facts.items} />
        </ContentWrapper>
      </div>
    </SectionDefault>
  );
};

FundFacts.propTypes = {
  facts: PropTypes.object,
};

export default FundFacts;
