import React from 'react';
import { graphql } from 'gatsby';
// import { useLanguage } from '../hooks/useLanguage';
import '../styles/styles.sass';

import Layout from '../components/Layout/layout';
import Seo from '../components/seo';
import { PageWrapper } from '../components/Ui/InterfaceSystem/InterfaceSystem';

import { contactsData } from '../db/contactsData';
import Contacts from '../components/Pages/Contacts/Contacts';

const ContactsPage = () => {
  return (
    <Layout>
      <Seo title={'Dr.Matolinets'} description={'Dr.Matolinets'} />
      <PageWrapper>
        <Contacts contacts={contactsData} />
      </PageWrapper>
    </Layout>
  );
};

export default ContactsPage;

export const query = graphql`
  query($language: String!) {
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
