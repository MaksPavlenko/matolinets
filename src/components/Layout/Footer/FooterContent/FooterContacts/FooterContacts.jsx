import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../../hooks/useLanguage';
import {
  FooterNavMarker,
  FooterNavWrapper,
} from '../FooterNavSystem/FooterNavSystem';
import {
  ContactsItem,
  ContactsLink,
  ContactsList,
} from './ContactsSystem/ContactsSystem';

const FooterContacts = ({ contacts }) => {
  const phone = `tel:` + contacts.phone.toString().replace(/[- )(]/g, '');
  const viber =
    `viber://chat?number=` + contacts.phone.toString().replace(/[- )(]/g, '');
  const whatsupp =
    `https://wa.me/` + contacts.phone.toString().replace(/[- )(]/g, '');

  const mail = 'mailto:' + contacts.mail;

  return (
    <FooterNavWrapper cls={'footer-nav__wrapper--contacts'}>
      <FooterNavMarker
        title={useLanguage('Контакти:', 'Contacts:', 'Kontakte:', 'Контакты:')}
      />
      <ContactsList>
        <ContactsItem>
          <ContactsLink link={phone} title={contacts.phone} blank={false} />
        </ContactsItem>
        <ContactsItem>
          <ContactsLink link={whatsupp} title={'WhatsApp'} blank={true} />
        </ContactsItem>
        <ContactsItem>
          <ContactsLink link={viber} title={'Viber'} blank={false} />
        </ContactsItem>
        <ContactsItem>
          <ContactsLink link={mail} title={contacts.mail} blank={false} />
        </ContactsItem>
        <ContactsItem>
          <ContactsLink
            link={contacts.address_link}
            title={useLanguage(
              contacts.address_ua,
              contacts.address_en,
              contacts.address_de,
              contacts.address_ru
            )}
            blank={true}
          />
        </ContactsItem>
        <ContactsItem>
          <ContactsLink
            link={contacts.instagram}
            title={'Instagram'}
            blank={true}
          />
        </ContactsItem>
      </ContactsList>
    </FooterNavWrapper>
  );
};

FooterContacts.propTypes = {
  contacts: PropTypes.object,
};

export default FooterContacts;
