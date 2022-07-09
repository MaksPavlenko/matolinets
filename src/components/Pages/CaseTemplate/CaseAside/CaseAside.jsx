import React from 'react';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { scroller } from 'react-scroll';
import { useLanguage } from '../../../../hooks/useLanguage';
import PropTypes from 'prop-types';
import { DefaultButton } from '../../../Ui/ButtonsDefault/ButtonsDefault';

const CaseAside = ({ img }) => {
  const image = getImage(img);
  function scrollSection() {
    scroller.scrollTo('fund-donate', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOut',
    });
  }
  return (
    <div className="about-aside__wrapper case-aside">
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
      <DefaultButton
        title={useLanguage('Долучитись', 'Join', 'Verbinden', 'Присоединиться')}
        hendler={scrollSection}
      />
    </div>
  );
};

CaseAside.propTypes = {
  img: PropTypes.object,
};

export default CaseAside;
