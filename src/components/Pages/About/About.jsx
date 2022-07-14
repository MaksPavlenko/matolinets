import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../hooks/useLanguage';

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

const About = ({ abouts, whatsApp }) => {

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
                img={abouts.doctor.image.localFile}
                whatsApp={whatsApp}
              />
            </AsideDefault>
          </StikyGridColumn>
          <StikyGridColumn>
            <AboutItems abouts={abouts} whatsApp={whatsApp} />
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
