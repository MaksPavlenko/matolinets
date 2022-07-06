import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../../../hooks/useLanguage';

import { PriceList, PriceListItem } from './PriceItemSystem/PriceItemSystem';

const PriceItem = ({ items }) => {
  const langToggle = useLanguage;
  return (
    <PriceList>
      {items.map((item, index) => {
        return (
          <PriceListItem
            title={langToggle(
              item.title_ua,
              item.title_en,
              item.title_de,
              item.title_ru
            )}
            price={item.price}
            key={index}
          />
        );
      })}
    </PriceList>
  );
};

PriceItem.propTypes = {
  items: PropTypes.array,
};

export default PriceItem;
