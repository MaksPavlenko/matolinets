import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../../hooks/useLanguage';

import DefaultSlider from '../../../../Ui/DefaultSlider/DefaultSlider';
import CasesItem from './CasesItem/CasesItem';

const CasessSlider = ({ items }) => {


  const langToggle = useLanguage;

  return (
    <div className="cases-slider__wrapper">
      <DefaultSlider>
        {items.map((item, index) => {
          return (
            <CasesItem
              key={index}
              title={langToggle(
                item.title_ua,
                item.title_en,
                item.title_de,
                item.title_ru
              )}
              description={langToggle(
                item.description_ua,
                item.description_en,
                item.description_de,
                item.description_ru
              )}
              slug={'/fund/' + item.slug + '/'}
              img={item.cover.localFile}
            />
          );
        })}
      </DefaultSlider>
    </div>
  );
};

CasessSlider.propTypes = {
  items: PropTypes.array,
};

export default CasessSlider;
