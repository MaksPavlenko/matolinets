import React from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import { useLanguage } from '../../../../hooks/useLanguage';

import AboutItem from './AboutItem/AboutItem';
import { DefaultButtonLink } from '../../../Ui/ButtonsDefault/ButtonsDefault';

const AboutItems = ({ abouts, whatsApp }) => {
  const { doctor, about, certificates } = abouts;

  console.log(abouts);

  return (
    <div className="about-page__items">
      <AboutItem
        title={useLanguage(
          doctor.title_ua,
          doctor.title_en,
          doctor.title_de,
          doctor.title_ru
        )}
        description={useLanguage(
          doctor.description_ua,
          doctor.description_en,
          doctor.description_de,
          doctor.description_ru
        )}
      />
      <AboutItem
        title={useLanguage(
          about.title_ua,
          about.title_en,
          about.title_de,
          about.title_ru
        )}
        description={useLanguage(
          about.description_ua,
          about.description_en,
          about.description_de,
          about.description_ru
        )}
      />
      <AboutItem
        title={useLanguage(
          certificates.title_ua,
          certificates.title_en,
          certificates.title_de,
          certificates.title_ru
        )}
        description={useLanguage(
          certificates.description_ua,
          certificates.description_en,
          certificates.description_de,
          certificates.description_ru
        )}
      />
      <MediaQuery maxWidth={991}>
        <div className="about-page__button--mobile">
          <DefaultButtonLink
            title={useLanguage(
              'Записатись на консультацію',
              'Sign up for a consultation',
              'Melden Sie sich für eine Beratung an',
              'Записаться на консультацию'
            )}
            link={whatsApp}
          />
        </div>
      </MediaQuery>
    </div>
  );
};

AboutItems.propTypes = {
  about: PropTypes.object,
  whatsApp: PropTypes.string,
};

export default AboutItems;
