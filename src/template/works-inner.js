import React from 'react';
import { graphql } from 'gatsby';
// import { useLanguage } from '../hooks/useLanguage';
import '../styles/styles.sass';

import Layout from '../components/Layout/layout';
import Seo from '../components/seo';
import { PageWrapper } from '../components/Ui/InterfaceSystem/InterfaceSystem';
import WorksInner from '../components/Pages/WorksInner/WorksInner';

// import { workInnerData } from '../db/worksData';

const WorksInnerPage = ({ data }) => {
  return (
    <Layout>
      <Seo title={'Dr.Matolinets'} description={'Dr.Matolinets'} />
      <PageWrapper>
        <WorksInner works={data.strapiWorks} />
      </PageWrapper>
    </Layout>
  );
};

export default WorksInnerPage;

export const queryCategory = graphql`
  query WorksInners($language: String!, $id: String!) {
    strapiWorks(id: { eq: $id }) {
      slug
      title_ua
      title_ru
      title_en
      title_de
      gallery {
        img {
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
