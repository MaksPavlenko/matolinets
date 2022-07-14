import React from 'react';
import { graphql } from 'gatsby';
import { useLanguage } from '../hooks/useLanguage';
import '../styles/styles.sass';

import Layout from '../components/Layout/layout';
import Seo from '../components/seo';
import { PageWrapper } from '../components/Ui/InterfaceSystem/InterfaceSystem';
import ServicesInner from '../components/Pages/ServicesInner/ServicesInner';

// import { servicesInner } from '../db/servicesInner';
// import { contactsData } from '../db/contactsData';

const ServicesInnerPage = ({data}) => {
const langToggle = useLanguage;
const seo = data.strapiServices.SEO
  return (
    <Layout>
      <Seo 
        title={langToggle(seo.title_ua, seo.title_en, seo.title_de, seo.title_ru)} 
        description={langToggle(seo.description_ua, seo.description_en, seo.description_de, seo.description_ru)} 
      />
      <PageWrapper>
        <ServicesInner
          service={data.strapiServices}
          whatsApp={data.strapiContacts.whatsapp}
        />
      </PageWrapper>
    </Layout>
  );
};

export default ServicesInnerPage;

export const query = graphql`
  query ServicesInner($language: String!, $id: String!) {
    strapiServices(id: { eq: $id }){
      SEO {
        title_ua
        title_ru
        title_en
        title_de
        description_ua
        description_ru
        description_en
        description_de
      }
      main {
        title_ua
        title_ru
        title_en
        title_de
        description_ua
        description_ru
        description_en
        description_de
      }
      title_ua
      title_ru
      title_en
      title_de
      slug
      about_services {
        title_ua
        title_ru
        title_en
        title_de
        description_ua
        description_ru
        description_en
        description_de
      }
    }
    strapiContacts {
      whatsapp
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
