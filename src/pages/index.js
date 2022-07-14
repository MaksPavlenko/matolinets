import React from 'react';
import { graphql } from 'gatsby';
import { useLanguage } from '../hooks/useLanguage';
import '../styles/styles.sass';

import Layout from '../components/Layout/layout';
import Seo from '../components/seo';
import { PageWrapper } from '../components/Ui/InterfaceSystem/InterfaceSystem';
import HomeMain from '../components/Pages/Home/HomeMain/HomeMain';
import HomeAbout from '../components/Pages/Home/HomeAbout/HomeAbout';
import HomeServices from '../components/Pages/Home/HomeServices/HomeServices';

// import { homeData } from '../db/homeData';
// import { contactsData } from '../db/contactsData';
import { servicesData } from '../db/servicesData';


const IndexPage = ({data}) => {
const langToggle = useLanguage;
const seo = data.strapiHomePage.SEO
  return (
    <Layout>
      <Seo title={langToggle(seo.title_ua,seo.title_en,seo.title_de,seo.title_ru)} 
            description={langToggle(seo.description_ua,seo.description_en,seo.description_de,seo.description_ru)} 
      />
      <PageWrapper>
        <HomeMain main={data.strapiHomePage.main} whatsApp={data.strapiContacts.whatsapp} />
        <HomeAbout about={data.strapiHomePage.about} />
        <HomeServices services={servicesData} />
      </PageWrapper>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query HomePage ($language: String!) {
    strapiHomePage {
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
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                layout: FULL_WIDTH
              )
            }
          }
        }
      }
      about {
        title_ua
        title_ru
        title_en
        title_de
        description_ua
        description_ru
        description_en
        description_de
        image {
          localFile  {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
                layout: FULL_WIDTH
              )
            }
          }
        }
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
