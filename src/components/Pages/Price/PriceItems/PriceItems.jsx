import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../hooks/useLanguage';

import {
  ContentWrapper,
  SectionDefault,
} from '../../../Ui/InterfaceSystem/InterfaceSystem';
import SectionHeaderMain from '../../../Ui/SectionHeaderMain/SectionHeaderMain';
import PriceCategory from './PriceCategory/PriceCategory';
import PriceItem from './PriceCategory/PriceItem/PriceItem';
import {
  PriceList,
  PriceListItem,
} from './PriceCategory/PriceItem/PriceItemSystem/PriceItemSystem';

const PriceItems = ({ items }) => {
  const langToggle = useLanguage;
  return (
    <SectionDefault classes={'price-page'}>
      <ContentWrapper>
        <SectionHeaderMain
          title={langToggle('Прайс', 'Price', 'Preis', 'Прайс')}
        />
        {items.price.map((cat, index) => {
           return (
            <PriceCategory
              title={langToggle(
                cat.title_ua,
                cat.title_en,
                cat.title_de,
                cat.title_ru
              )}
              key={index}
            >
              <PriceItem items={cat.items} />
            </PriceCategory>
          );
        })}
         <PriceList>
                <PriceListItem
                  title={langToggle(
                    items.title_ua,
                    items.title_en,
                    items.title_de,
                    items.title_ru
                  )}
                  price={items.prices}
                  accent={items.accent}
                />
              </PriceList>
      </ContentWrapper>
    </SectionDefault>
  );
};

PriceItems.propTypes = {
  items: PropTypes.array,
};

export default PriceItems;
