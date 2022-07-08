import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../hooks/useLanguage';

import {
  ContentWrapper,
  SectionDefault,
} from '../../Ui/InterfaceSystem/InterfaceSystem';
import SectionHeaderMain from '../../Ui/SectionHeaderMain/SectionHeaderMain';
import ContactsInfo from './ContactsInfo/ContactsInfo';
import ContactsMap from './ContactsMap/ContactsMap';

const Contacts = ({ contacts }) => {
  return (
    <SectionDefault classes={'contacts-page'}>
      <ContentWrapper>
        <SectionHeaderMain
          title={useLanguage(
            contacts.title_ua,
            contacts.title_en,
            contacts.title_de,
            contacts.title_ru
          )}
        />
        <div className="contacts-wrapper">
          <ContactsInfo contacts={contacts} />
          <ContactsMap />
        </div>
      </ContentWrapper>
    </SectionDefault>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.object,
};

export default Contacts;
