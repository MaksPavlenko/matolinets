import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../hooks/useLanguage';

import {
  ContentWrapper,
  SectionDefault,
} from '../../../Ui/InterfaceSystem/InterfaceSystem';
import TeamItemsList from './TeamItemsList/TeamItemsList';
import SectionHeader from '../../../Ui/SectionHeader/SectionHeader';

const FundTeam = ({ team }) => {
  return (
    <SectionDefault classes={'fund-facts'}>
      <ContentWrapper>
        <SectionHeader
          title={useLanguage(
            team.title_ua,
            team.title_en,
            team.title_de,
            team.title_ru
          )}
        />
        <TeamItemsList items={team.items} />
      </ContentWrapper>
    </SectionDefault>
  );
};

FundTeam.propTypes = {
  team: PropTypes.object,
};

export default FundTeam;
