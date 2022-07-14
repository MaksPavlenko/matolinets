import React from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import { useLanguage } from '../../../../hooks/useLanguage';
import ReactMarkdown from 'react-markdown';
import { DefaultButtonLink } from '../../../Ui/ButtonsDefault/ButtonsDefault';
import ServicesInfoItem from './ServicesInfoItem/ServicesInfoItem';

const ServicesInfo = ({ info, whatsApp }) => {
  const langToggle = useLanguage;

  return (
    <div className="services-info__items">
      <ServicesInfoItem
        title={langToggle(
          'Про послугу:',
          'About the service:',
          'Über den Dienst',
          'Об услуге:'
        )}
      >
        <ReactMarkdown className="service-inner__mark">
          {langToggle(
            info.main.description_ua,
            info.main.description_en,
            info.main.description_de,
            info.main.description_ru
          )}
        </ReactMarkdown>
      </ServicesInfoItem>
      {info.about_services.map((item, i) => {
        return (
          <ServicesInfoItem
            title={langToggle(
              item.title_ua,
              item.title_en,
              item.title_de,
              item.title_ru
            )}
            key={i}
          >
            <ReactMarkdown className="service-inner__mark">
              {langToggle(
                item.description_ua,
                item.description_en,
                item.description_de,
                item.description_ru
              )}
            </ReactMarkdown>
          </ServicesInfoItem>
        );
      })}

      <MediaQuery maxWidth={991}>
        <div className="service-page__button--mobile">
          <DefaultButtonLink
            title={langToggle(
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

ServicesInfo.propTypes = {
  whatsApp: PropTypes.string,
};

export default ServicesInfo;
