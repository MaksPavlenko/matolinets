import React from 'react';
import { graphql } from 'gatsby';
// import { useLanguage } from '../hooks/useLanguage';
import '../styles/styles.sass';

import Layout from '../components/Layout/layout';
import Seo from '../components/seo';
import { PageWrapper } from '../components/Ui/InterfaceSystem/InterfaceSystem';
import Services from '../components/Pages/Services/Services';

import { servicesData } from '../db/servicesData';

const ServicesPage = () => {
  return (
    <Layout>
      <Seo title={'Dr.Matolinets'} description={'Dr.Matolinets'} />
      <PageWrapper>
        <Services services={servicesData} />
      </PageWrapper>
    </Layout>
  );
};

export default ServicesPage;

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
