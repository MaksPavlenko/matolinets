import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown'
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
         <ReactMarkdown className="service-inner__mark">
          {useLanguage(
            caseData.story.description_ua,
            caseData.story.description_en,
            caseData.story.description_de,
            caseData.story.description_ru
          )}
          </ReactMarkdown>
      </CaseInfoItem>
      <CaseInfoItem
        title={useLanguage(
          caseData.problem.title_ua,
          caseData.problem.title_en,
          caseData.problem.title_de,
          caseData.problem.title_ru
        )}
      >
          <ReactMarkdown className="service-inner__mark">
            {useLanguage(
              caseData.problem.description_ua,
              caseData.problem.description_en,
              caseData.problem.description_de,
              caseData.problem.description_ru
            )}
          </ReactMarkdown>
          
      </CaseInfoItem>
      <CaseInfoItem
        title={useLanguage(
          caseData.done.title_ua,
          caseData.done.title_en,
          caseData.done.title_de,
          caseData.done.title_ru
        )}
      >
         <ReactMarkdown className="service-inner__mark">
            {useLanguage(
              caseData.done.description_ua,
              caseData.done.description_en,
              caseData.done.description_de,
              caseData.done.description_ru
            )}
          </ReactMarkdown>
        {/* <div className="service-inner__mark">
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
        </div> */}
      </CaseInfoItem>
    </div>
  );
};

CaseInfo.propTypes = {
  caseData: PropTypes.object,
};

export default CaseInfo;
