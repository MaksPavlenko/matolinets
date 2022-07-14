import React from 'react';
import PropTypes from 'prop-types';
import CoverDefault from '../../../Ui/CoverDefault/CoverDefault';
import MainInfo from './MainInfo/MainInfo';

const HomeMain = ({ main, whatsApp }) => {

  return (
    <section className="home-main">
      <CoverDefault img={main.image.localFile} />
      <MainInfo whatsApp={whatsApp} main={main} />
    </section>
  );
};

HomeMain.propTypes = {
  main: PropTypes.object,
  whatsApp: PropTypes.string,
};

export default HomeMain;
