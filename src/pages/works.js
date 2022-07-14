import React from 'react';
import { graphql } from 'gatsby';
// import { useLanguage } from '../hooks/useLanguage';
import '../styles/styles.sass';

import Layout from '../components/Layout/layout';
import Seo from '../components/seo';
import { PageWrapper } from '../components/Ui/InterfaceSystem/InterfaceSystem';
import Works from '../components/Pages/Works/Works';


const WorksPage = ({data}) => {
  return (
    <Layout>
      <Seo title={'Dr.Matolinets'} description={'Dr.Matolinets'} />
      <PageWrapper>
        <Works works={data.allStrapiWorks.nodes} />
      </PageWrapper>
    </Layout>
  );
};

export default WorksPage;

export const query = graphql`
  query Category($language: String!) {
    allStrapiWorks {
      nodes {
        slug
        title_ua
        title_ru
        title_en
        title_de
        gallery {
          img {
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
