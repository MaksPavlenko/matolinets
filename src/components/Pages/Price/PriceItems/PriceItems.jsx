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
        {items.map((cat, index) => {
          if (cat.accent === true) {
            return (
              <PriceList key={index}>
                <PriceListItem
                  title={langToggle(
                    cat.title_ua,
                    cat.title_en,
                    cat.title_de,
                    cat.title_ru
                  )}
                  price={cat.price}
                  accent={cat.accent}
                />
              </PriceList>
            );
          } else {
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
          }
        })}
      </ContentWrapper>
    </SectionDefault>
  );
};

PriceItems.propTypes = {
  items: PropTypes.array,
};

export default PriceItems;
