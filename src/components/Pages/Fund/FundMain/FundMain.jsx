import React from 'react';
import { useLanguage } from '../../../../hooks/useLanguage';
import PropTypes from 'prop-types';

import CoverDefault from '../../../Ui/CoverDefault/CoverDefault';
import FundMainContent from './FundMainContent/FundMainContent';

const FundMain = ({ main }) => {

  return (
    <section className="fund-main">
      <CoverDefault img={main.cover.localFile} />
      <FundMainContent
        title={useLanguage(
          main.description_ua,
          main.description_en,
          main.description_de,
          main.description_ru
        )}
        description={useLanguage(
          main.title_ua,
          main.title_en,
          main.title_de,
          main.title_ru
        )}
      />
    </section>
  );
};

FundMain.propTypes = {
  main: PropTypes.object,
};

export default FundMain;
