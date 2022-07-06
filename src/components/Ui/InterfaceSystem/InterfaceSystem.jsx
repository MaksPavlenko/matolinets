import React from 'react';
// import PropTypes from 'prop-types';

import Next from '../../../svg/arrow_right.svg';
import Prev from '../../../svg/arrow_left.svg';

export const ButtonNext = ({ hendler }) => {
  return (
    <button className="slider-button slider-button__next" onClick={hendler}>
      <Next className="slider-button__icon" />
    </button>
  );
};

export const ButtonPrev = ({ hendler }) => {
  return (
    <button className="slider-button slider-button__prev" onClick={hendler}>
      <Prev className="slider-button__icon" />
    </button>
  );
};

export const PageWrapper = ({ children }) => {
  return <div className="page-wrapper">{children}</div>;
};

export const ContentWrapper = ({ children }) => {
  return <div className="content-wrapper">{children}</div>;
};

export const SectionDefault = ({ children, classes }) => {
  return (
    <section className={`section ${classes && classes}`}>{children}</section>
  );
};

export const StikyGrid = ({ children }) => {
  return <div className="stiky-grid">{children}</div>;
};

export const StikyGridColumn = ({ children }) => {
  return <div className="stiky-grid__column">{children}</div>;
};

// InterfaceSystem.propTypes = {};
