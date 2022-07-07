import React from 'react';
import { graphql } from 'gatsby';
// import { useLanguage } from '../hooks/useLanguage';
import '../styles/styles.sass';

import Layout from '../components/Layout/layout';
import Seo from '../components/seo';
import { PageWrapper } from '../components/Ui/InterfaceSystem/InterfaceSystem';
import HomeMain from '../components/Pages/Home/HomeMain/HomeMain';
import HomeAbout from '../components/Pages/Home/HomeAbout/HomeAbout';
import HomeServices from '../components/Pages/Home/HomeServices/HomeServices';

import { homeData } from '../db/homeData';
import { contactsData } from '../db/contactsData';
import { servicesData } from '../db/servicesData';

const IndexPage = () => {
  return (
    <Layout>
      <Seo title={'Dr.Matolinets'} description={'Dr.Matolinets'} />
      <PageWrapper>
        <HomeMain main={homeData.main} whatsApp={contactsData.whatsapp} />
        <HomeAbout about={homeData.about} />
        <HomeServices services={servicesData} />
      </PageWrapper>
    </Layout>
  );
};

export default IndexPage;

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
