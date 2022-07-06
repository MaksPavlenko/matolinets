import React from 'react';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import MediaQuery from 'react-responsive';
import { useLanguage } from '../../../../hooks/useLanguage';
import PropTypes from 'prop-types';

import { DefaultButtonLink } from '../../../Ui/ButtonsDefault/ButtonsDefault';

const AboutAside = ({ img, whatsApp }) => {
  const image = getImage(img);
  return (
    <div className="about-aside__wrapper">
      <div className="about-aside__image--wrapper">
        {img && (
          <GatsbyImage
            className="about-aside__image"
            image={image}
            alt="Тарас Матолинец"
            loading="eager"
          />
        )}
      </div>
      <MediaQuery minWidth={992}>
        <DefaultButtonLink
          title={useLanguage(
            'Записатись на консультацію',
            'Sign up for a consultation',
            'Melden Sie sich für eine Beratung an',
            'Записаться на консультацию'
          )}
          link={whatsApp}
        />
      </MediaQuery>
    </div>
  );
};

AboutAside.propTypes = {
  img: PropTypes.object,
  whatsApp: PropTypes.string,
};

export default AboutAside;
