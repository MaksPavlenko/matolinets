import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../hooks/useLanguage';
import {
  ContentWrapper,
  SectionDefault,
} from '../../Ui/InterfaceSystem/InterfaceSystem';
import SectionHeaderMain from '../../Ui/SectionHeaderMain/SectionHeaderMain';
import WorksInnerItem from './WorksInnerItem/WorksInnerItem';

const WorksInner = ({ works }) => {

  const langToggle = useLanguage;

  return (
    <SectionDefault classes={'works-inner__page'}>
      <ContentWrapper>
        <SectionHeaderMain
          title={langToggle(
            works.title_ua,
            works.title_en,
            works.title_de,
            works.title_ru
          )}
        />
        <div className="works-gallery">
          {works?.gallery.map((item, index) => {
            return (
              <WorksInnerItem
                key={index}
                img={item.img.localFile}
                title={langToggle(
                  works.title_ua,
                  works.title_en,
                  works.title_de,
                  works.title_ru
                )}
              />
            );
          })}
        </div>
      </ContentWrapper>
    </SectionDefault>
  );
};

WorksInner.propTypes = {
  works: PropTypes.object,
};

export default WorksInner;
