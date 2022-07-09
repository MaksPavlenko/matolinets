import React from 'react';
import { graphql } from 'gatsby';
// import { useLanguage } from '../hooks/useLanguage';
import '../styles/styles.sass';

import Layout from '../components/Layout/layout';
import Seo from '../components/seo';
import { PageWrapper } from '../components/Ui/InterfaceSystem/InterfaceSystem';
import CaseTemplate from '../components/Pages/CaseTemplate/CaseTemplate';
import { FundDonate } from '../components/Pages/Fund';

import { fundData } from '../db/fundData';
import { caseInner } from '../db/caseInner';

const CasePage = () => {
  return (
    <Layout cls={'case'}>
      <Seo title={'Dr.Matolinets'} description={'Dr.Matolinets'} />
      <PageWrapper>
        <CaseTemplate caseData={caseInner} />
        <FundDonate donate={fundData.donate} />
      </PageWrapper>
    </Layout>
  );
};

export default CasePage;

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
