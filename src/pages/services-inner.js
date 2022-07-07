import React from 'react';
import { graphql } from 'gatsby';
// import { useLanguage } from '../hooks/useLanguage';
import '../styles/styles.sass';

import Layout from '../components/Layout/layout';
import Seo from '../components/seo';
import { PageWrapper } from '../components/Ui/InterfaceSystem/InterfaceSystem';
import ServicesInner from '../components/Pages/ServicesInner/ServicesInner';

import { servicesInner } from '../db/servicesInner';
import { contactsData } from '../db/contactsData';

const ServicesInnerPage = () => {
  return (
    <Layout>
      <Seo title={'Dr.Matolinets'} description={'Dr.Matolinets'} />
      <PageWrapper>
        <ServicesInner
          service={servicesInner}
          whatsApp={contactsData.whatsapp}
        />
      </PageWrapper>
    </Layout>
  );
};

export default ServicesInnerPage;

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
