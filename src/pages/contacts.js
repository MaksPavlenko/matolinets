import React from 'react';
import { graphql } from 'gatsby';
import { useLanguage } from '../hooks/useLanguage';
import '../styles/styles.sass';

import Layout from '../components/Layout/layout';
import Seo from '../components/seo';
import { PageWrapper } from '../components/Ui/InterfaceSystem/InterfaceSystem';

// import { contactsData } from '../db/contactsData';
import Contacts from '../components/Pages/Contacts/Contacts';

const ContactsPage = ({data}) => {
  const langToggle = useLanguage;
  const seo = data.strapiContacts
  return (
    <Layout>
      <Seo title={langToggle(seo.title_ua, seo.title_en, seo.title_de, seo.title_ru)} description={'Dr.Matolinets'} />
      <PageWrapper>
        <Contacts contacts={data.strapiContacts} />
      </PageWrapper>
    </Layout>
  );
};

export default ContactsPage;

export const query = graphql`
  query Contacts($language: String!) {
    strapiContacts {
      title_ua
      title_ru
      title_en
      title_de
      whatsapp
      viber
      phone
      mail
      instagram
      address_ua
      address_ru
      address_en
      address_de
      address_link
    }
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
