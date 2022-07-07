import React from 'react';
import { graphql } from 'gatsby';
// import { useLanguage } from '../hooks/useLanguage';
import '../styles/styles.sass';

import Layout from '../components/Layout/layout';
import Seo from '../components/seo';
import { PageWrapper } from '../components/Ui/InterfaceSystem/InterfaceSystem';
import About from '../components/Pages/About/About';

import { aboutData } from '../db/aboutData';
import { contactsData } from '../db/contactsData';

const AboutPage = () => {
  console.log(aboutData);

  return (
    <Layout>
      <Seo title={'Dr.Matolinets'} description={'Dr.Matolinets'} />
      <PageWrapper>
        <About about={aboutData} whatsApp={contactsData.whatsapp} />
      </PageWrapper>
    </Layout>
  );
};

export default AboutPage;

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
