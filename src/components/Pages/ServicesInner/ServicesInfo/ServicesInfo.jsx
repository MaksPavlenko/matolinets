import React from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import { useLanguage } from '../../../../hooks/useLanguage';

import { DefaultButtonLink } from '../../../Ui/ButtonsDefault/ButtonsDefault';
import ServicesInfoItem from './ServicesInfoItem/ServicesInfoItem';

const ServicesInfo = ({ whatsApp }) => {
  return (
    <div className="services-info__items">
      <ServicesInfoItem>
        <div className="service-inner__mark">
          <p>
            Увеличение груди (эндопротезирование груди) - эстетическая операция
            по изменению формы и размера молочных желез. Среди всех видов
            маммопластики эндопротезирование (увеличение имплантами) – самая
            распространенная коррекция, позволяющая не только восполнить
            недостающий объем, но и устранить асимметрию, незначительный птоз, а
            также усовершенствовать очертания желез.
          </p>
          <p>
            <strong>Показания к маммопластике:</strong>
          </p>
          <ul>
            <li>
              <p>Врожденное недоразвитие молочных желез или микромастия.</p>
            </li>
            <li>
              <p>Врожденное недоразвитие молочных желез или микромастия.</p>
            </li>
            <li>
              <p>Врожденное недоразвитие молочных желез или микромастия.</p>
            </li>
            <li>
              <p>Врожденное недоразвитие молочных желез или микромастия.</p>
            </li>
            <li>
              <p>Врожденное недоразвитие молочных желез или микромастия.</p>
            </li>
          </ul>
        </div>
      </ServicesInfoItem>
      <ServicesInfoItem>
        <div className="service-inner__mark">
          <p>
            Увеличение груди (эндопротезирование груди) - эстетическая операция
            по изменению формы и размера молочных желез. Среди всех видов
            маммопластики эндопротезирование (увеличение имплантами) – самая
            распространенная коррекция, позволяющая не только восполнить
            недостающий объем, но и устранить асимметрию, незначительный птоз, а
            также усовершенствовать очертания желез.
          </p>
          <p>
            <strong>Показания к маммопластике:</strong>
          </p>
          <ul>
            <li>
              <p>Врожденное недоразвитие молочных желез или микромастия.</p>
            </li>
            <li>
              <p>Врожденное недоразвитие молочных желез или микромастия.</p>
            </li>
            <li>
              <p>Врожденное недоразвитие молочных желез или микромастия.</p>
            </li>
            <li>
              <p>Врожденное недоразвитие молочных желез или микромастия.</p>
            </li>
            <li>
              <p>Врожденное недоразвитие молочных желез или микромастия.</p>
            </li>
          </ul>
        </div>
      </ServicesInfoItem>
      <ServicesInfoItem>
        <div className="service-inner__mark">
          <p>
            Увеличение груди (эндопротезирование груди) - эстетическая операция
            по изменению формы и размера молочных желез. Среди всех видов
            маммопластики эндопротезирование (увеличение имплантами) – самая
            распространенная коррекция, позволяющая не только восполнить
            недостающий объем, но и устранить асимметрию, незначительный птоз, а
            также усовершенствовать очертания желез.
          </p>
          <p>
            <strong>Показания к маммопластике:</strong>
          </p>
          <ul>
            <li>
              <p>Врожденное недоразвитие молочных желез или микромастия.</p>
            </li>
            <li>
              <p>Врожденное недоразвитие молочных желез или микромастия.</p>
            </li>
            <li>
              <p>Врожденное недоразвитие молочных желез или микромастия.</p>
            </li>
            <li>
              <p>Врожденное недоразвитие молочных желез или микромастия.</p>
            </li>
            <li>
              <p>Врожденное недоразвитие молочных желез или микромастия.</p>
            </li>
          </ul>
        </div>
      </ServicesInfoItem>
      <ServicesInfoItem>
        <div className="service-inner__mark">
          <p>
            Увеличение груди (эндопротезирование груди) - эстетическая операция
            по изменению формы и размера молочных желез. Среди всех видов
            маммопластики эндопротезирование (увеличение имплантами) – самая
            распространенная коррекция, позволяющая не только восполнить
            недостающий объем, но и устранить асимметрию, незначительный птоз, а
            также усовершенствовать очертания желез.
          </p>
          <p>
            <strong>Показания к маммопластике:</strong>
          </p>
          <ul>
            <li>
              <p>Врожденное недоразвитие молочных желез или микромастия.</p>
            </li>
            <li>
              <p>Врожденное недоразвитие молочных желез или микромастия.</p>
            </li>
            <li>
              <p>Врожденное недоразвитие молочных желез или микромастия.</p>
            </li>
            <li>
              <p>Врожденное недоразвитие молочных желез или микромастия.</p>
            </li>
            <li>
              <p>Врожденное недоразвитие молочных желез или микромастия.</p>
            </li>
          </ul>
        </div>
      </ServicesInfoItem>
      <MediaQuery maxWidth={991}>
        <div className="service-page__button--mobile">
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

ServicesInfo.propTypes = {
  whatsApp: PropTypes.string,
};

export default ServicesInfo;
