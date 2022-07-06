import React from 'react';
import PropTypes from 'prop-types';
import TeamItem from './TeamItem/TeamItem';
import DefaultSlider from '../../../../Ui/DefaultSlider/DefaultSlider';

const TeamItemsList = ({ items }) => {
  return (
    <div className="fund-team__list">
      <DefaultSlider>
        {items.map((item, index) => {
          return <TeamItem item={item} key={index} />;
        })}
      </DefaultSlider>
    </div>
  );
};

TeamItemsList.propTypes = {
  items: PropTypes.array,
};

export default TeamItemsList;
