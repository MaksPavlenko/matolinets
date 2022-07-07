import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../../hooks/useLanguage';

import SectionMarker from '../../../../Ui/SectionMarker/SectionMarker';
import { DefaultButtonLinkInner } from '../../../../Ui/ButtonsDefault/ButtonsDefault';
import HomeServiceItem from './HomeServiceItem/HomeServiceItem';

const HomeServicesList = ({ services }) => {
  const langToggle = useLanguage;
  return (
    <div className="home-services__content">
      <SectionMarker
        marker={useLanguage(
          services.title_ua,
          services.title_en,
          services.title_de,
          services.title_ru
        )}
      />
      <div className="home-services__items">
        {services.items.map((item, index) => {
          return (
            <HomeServiceItem
              key={index}
              link={item.slug}
              icon={item.icon}
              title={langToggle(
                item.title_ua,
                item.title_en,
                item.title_de,
                item.title_ru
              )}
            />
          );
        })}
      </div>
      <div className="home-services__button--wrapper">
        <DefaultButtonLinkInner
          title={useLanguage(
            'Докладніше...',
            'More...',
            'Mehr...',
            'Подробнее...'
          )}
          link={'/services/'}
        />
      </div>
    </div>
  );
};

HomeServicesList.propTypes = {
  services: PropTypes.object,
};

export default HomeServicesList;
