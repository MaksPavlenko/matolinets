import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../hooks/useLanguage';

import {
  ContentWrapper,
  SectionDefault,
} from '../../Ui/InterfaceSystem/InterfaceSystem';
import SectionHeaderMain from '../../Ui/SectionHeaderMain/SectionHeaderMain';
import ServicesItems from './ServicesItems/ServicesItems';

const Services = ({ services }) => {
  return (
    <SectionDefault classes={'services-page'}>
      <ContentWrapper>
        <SectionHeaderMain
          title={useLanguage(
            services.title_ua,
            services.title_en,
            services.title_de,
            services.title_ru
          )}
        />
        <ServicesItems servicesItems={services.items} />
      </ContentWrapper>
    </SectionDefault>
  );
};

Services.propTypes = {
  services: PropTypes.object,
};

export default Services;
