import React from 'react';
import { graphql } from 'gatsby';
// import { useLanguage } from '../hooks/useLanguage';
import '../styles/styles.sass';

import Layout from '../components/Layout/layout';
import Seo from '../components/seo';
import { PageWrapper } from '../components/Ui/InterfaceSystem/InterfaceSystem';
import WorksInner from '../components/Pages/WorksInner/WorksInner';

import { workInnerData } from '../db/worksData';

const WorksInnerPage = () => {
  return (
    <Layout>
      <Seo title={'Dr.Matolinets'} description={'Dr.Matolinets'} />
      <PageWrapper>
        <WorksInner works={workInnerData} />
      </PageWrapper>
    </Layout>
  );
};

export default WorksInnerPage;

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
