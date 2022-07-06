import React from 'react';
import PropTypes from 'prop-types';

import { ContentWrapper } from '../../../../Ui/InterfaceSystem/InterfaceSystem';

const FundMainContent = ({ title, description }) => {
  return (
    <ContentWrapper>
      <div className="main-content__wrapper">
        <p className="main-content__descr">{description}</p>
        <h1 className="h1 main-content__title">{title}</h1>
      </div>
    </ContentWrapper>
  );
};

FundMainContent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default FundMainContent;
