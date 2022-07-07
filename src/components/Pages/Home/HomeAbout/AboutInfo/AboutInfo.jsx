import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../../hooks/useLanguage';

import SectionMarker from '../../../../Ui/SectionMarker/SectionMarker';
import { DefaultButtonLinkInner } from '../../../../Ui/ButtonsDefault/ButtonsDefault';

const AboutInfo = ({ about }) => {
  return (
    <article className="home-about__info">
      <SectionMarker
        marker={useLanguage(
          'Про Доктора',
          'About Doctor',
          'Über Doktor',
          'О Докторе'
        )}
      />
      <div className="home-about__info--content">
        <h2 className="home-about__info--title">
          {useLanguage(
            about.title_ua,
            about.title_en,
            about.title_de,
            about.title_ru
          )}
        </h2>
        <p className="home-about__info--descr">
          {useLanguage(
            about.description_ua,
            about.description_en,
            about.description_de,
            about.description_ru
          )}
        </p>
        <div className="home-about__info-buuton">
          <DefaultButtonLinkInner
            title={useLanguage(
              'Докладніше...',
              'More...',
              'Mehr...',
              'Подробнее...'
            )}
            link={'/about-doctor/'}
          />
        </div>
      </div>
    </article>
  );
};

AboutInfo.propTypes = {
  about: PropTypes.object,
};

export default AboutInfo;
