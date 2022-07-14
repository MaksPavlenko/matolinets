import React from 'react';
import { graphql } from 'gatsby';
// import { useLanguage } from '../hooks/useLanguage';
import '../styles/styles.sass';

import Layout from '../components/Layout/layout';
import Seo from '../components/seo';
import { PageWrapper } from '../components/Ui/InterfaceSystem/InterfaceSystem';
import About from '../components/Pages/About/About';

// import { aboutData } from '../db/aboutData';

const AboutPage = ({data}) => {

  return (
    <Layout>
      <Seo title={'Dr.Matolinets'} description={'Dr.Matolinets'} />
      <PageWrapper>
        <About abouts={data.strapiAboutDoctor} whatsApp={data.strapiContacts.whatsapp} />
      </PageWrapper>
    </Layout>
  );
};

export default AboutPage;

export const query = graphql`
  query AboutDoctor ($language: String!) {
    strapiAboutDoctor {
      doctor {
        title_ua
        title_ru
        title_en
        title_de
        description_ua
        description_ru
        description_en
        description_de
        image {
          localFile{
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
      }
      certificates {
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
