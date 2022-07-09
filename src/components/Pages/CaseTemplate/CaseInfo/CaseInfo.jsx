import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../hooks/useLanguage';

import CaseInfoItem from './CaseInfoItem/CaseInfoItem';

const CaseInfo = ({ caseData }) => {
  return (
    <div className="case-info__items">
      <CaseInfoItem
        title={useLanguage(
          caseData.title_ua,
          caseData.title_en,
          caseData.title_de,
          caseData.title_ru
        )}
      >
        <div className="service-inner__mark">
          <p>
            Потрапила під обстріл під час виїзду із Запорізької області. Кульові
            та безліч осколкових поранень.
          </p>
        </div>
      </CaseInfoItem>
      <CaseInfoItem
        title={useLanguage(
          caseData.problem.title_ua,
          caseData.problem.title_en,
          caseData.problem.title_de,
          caseData.problem.title_ru
        )}
      >
        <div className="service-inner__mark">
          <ul>
            <li>
              <p>Аутоиммунные заболевания</p>
            </li>
            <li>
              <p>Болезни сердечно-сосудистой системы, печени, почек</p>
            </li>
            <li>
              <p>Аллергическая реакция на препараты анестезии</p>
            </li>
            <li>
              <p>Онкология</p>
            </li>
            <li>
              <p>Проблемы свертываемости крови Временные</p>
            </li>
            <li>
              <p>Инфекционные заболевания в стадии обострения</p>
            </li>
            <li>
              <p>
                Хронические заболевания в острой фазе Беременность, лактация
              </p>
            </li>
            <li>
              <p>Венерические заболевания</p>
            </li>
            <li>
              <p>Гормональные нарушения</p>
            </li>
            <li>
              <p>
                Менструация Операция по увеличению груди занимает около часа
                времени, а современные способы наложения швов делают их
                впоследствии практически незаметными!
              </p>
            </li>
          </ul>
        </div>
      </CaseInfoItem>
      <CaseInfoItem
        title={useLanguage(
          caseData.done.title_ua,
          caseData.done.title_en,
          caseData.done.title_de,
          caseData.done.title_ru
        )}
      >
        <div className="service-inner__mark">
          <ol>
            <li>
              <p>Отказаться от алкоголя и курения за 2 недели до пластики;</p>
            </li>
            <li>
              <p>
                При приеме антикоагулянтов отменить их прием за неделю. Способ
                (место) установки импланта Имплант может быть установлен в
                разных слоях тканей груди. Выбор методики зависит от состояния
                тканей пациентки и ее образа жизни. Существует три варианта
                размещения эндопротеза:
              </p>
            </li>
            <li>
              <p>
                Под молочной железой: данный способ, по мнению некоторых
                хирургов, позволяет создать очень красивую форму груди.
              </p>
            </li>
            <li>
              <p>
                Под большой грудной мышцей: установка под мышечный слой создает
                эффект амортизации, грудь отличается мягкостью, а также
                отмечается более низкий риск возникновения капсулярной
                контрактуры.
              </p>
            </li>
            <li>
              <p>
                В двух плоскостях (верх под мышцей, низ под железой): данный
                способ объединил в себе преимущества обоих подходов.
              </p>
            </li>
          </ol>
        </div>
      </CaseInfoItem>
    </div>
  );
};

CaseInfo.propTypes = {
  caseData: PropTypes.object,
};

export default CaseInfo;
