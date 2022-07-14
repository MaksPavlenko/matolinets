import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../../hooks/useLanguage';
import { DefaultButtonLink } from '../../../../Ui/ButtonsDefault/ButtonsDefault';
import Markdown from 'react-markdown'

const MainInfo = ({ whatsApp, main }) => {
  return (
    <div className="main-info">
      <Markdown className="main-info__title">
        {useLanguage(
          main.title_ua,
          main.title_en,
          main.title_de,
          main.title_ru
        )}
      </Markdown>
      <div className="main-info__button--wrapper">
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
    </div>
  );
};

MainInfo.propTypes = {
  whatsApp: PropTypes.string,
  main: PropTypes.object,
};

export default MainInfo;
