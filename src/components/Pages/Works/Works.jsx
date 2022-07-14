import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../hooks/useLanguage';

import {
  ContentWrapper,
  SectionDefault,
} from '../../Ui/InterfaceSystem/InterfaceSystem';
import SectionHeaderMain from '../../Ui/SectionHeaderMain/SectionHeaderMain';
import WorksItem from './WorksItem/WorksItem';

const Works = ({ works }) => {
  const langToggle = useLanguage;
  return (
    <SectionDefault classes={'works-page'}>
      <ContentWrapper>
        <SectionHeaderMain
          title={langToggle('Роботи', 'Works', 'Arbeit', 'Работы')}
        />
        <div className="works-gallery">
          {works.map((item, index) => {
            return (
              <WorksItem
                key={index}
                link={`${item.slug}/`}
                title={langToggle(
                  item.title_ua,
                  item.title_en,
                  item.title_de,
                  item.title_ru
                )}
                img={item?.gallery?.[0].img.localFile}
              />
            );
          })}
        </div>
      </ContentWrapper>
    </SectionDefault>
  );
};

Works.propTypes = {
  works: PropTypes.array,
};

export default Works;
