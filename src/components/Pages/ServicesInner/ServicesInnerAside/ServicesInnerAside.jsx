import React from 'react';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import MediaQuery from 'react-responsive';
import { useLanguage } from '../../../../hooks/useLanguage';
import PropTypes from 'prop-types';

import { DefaultButtonLink } from '../../../Ui/ButtonsDefault/ButtonsDefault';

const ServicesInnerAside = ({ img, whatsApp, alt }) => {
  const image = getImage(img);
  return (
    <div className="service-aside__wrapper">
      <div className="service-aside__image--wrapper">
        {img && (
          <GatsbyImage
            className="service-aside__image"
            image={image}
            alt={alt}
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

ServicesInnerAside.propTypes = {
  img: PropTypes.object,
  whatsApp: PropTypes.string,
  alt: PropTypes.string,
};

export default ServicesInnerAside;
