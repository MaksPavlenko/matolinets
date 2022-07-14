import React from 'react';
import { graphql } from 'gatsby';
// import { useLanguage } from '../hooks/useLanguage';
import '../styles/styles.sass';

import Layout from '../components/Layout/layout';
import Seo from '../components/seo';
import { PageWrapper } from '../components/Ui/InterfaceSystem/InterfaceSystem';
import CaseTemplate from '../components/Pages/CaseTemplate/CaseTemplate';
import { FundDonate } from '../components/Pages/Fund';

// import { fundData } from '../db/fundData';
// import { caseInner } from '../db/caseInner';

const CasePage = ({data}) => {
  return (
    <Layout cls={'case'}>
      <Seo title={'Dr.Matolinets'} description={'Dr.Matolinets'} />
      <PageWrapper>
        <CaseTemplate caseData={data.strapiCases} />
        <FundDonate donate={data.strapiFunds.donate} />
      </PageWrapper>
    </Layout>
  );
};

export default CasePage;

export const query = graphql`
  query($language: String!, $id: String!) {
    strapiCases(id: { eq: $id }) {
      cover {
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
      title_ua
      title_en
      title_de
      title_ru
      description_ua
      description_en
      description_de
      description_ru
      slug
      main {
        title_ua
        title_ru
        title_en
        title_de
      }
      story {
        description_ua
        description_en
        description_de
        description_ru
      }
      problem {
        title_ua
        title_en
        title_de
        title_ru
        description_ua
        description_en
        description_de
        description_ru
      }
      done {
        title_ua
        title_ru
        title_en
        title_de
        description_ua
        description_ru
        description_en
        description_de
      }
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
      video {
        link
      }
    }
    strapiFunds {
      donate {
        title_ua
        title_ru
        title_en
        title_de
        qr_code {
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
        info {
          title_ua
          title_ru
          title_en
          title_de
          description_ua
          description_ru
          description_en
          description_de
        }
        thank {
          title_ua
          title_ru
          title_en
          title_de
        }
        items {
          marker_ua
          marker_ru
          marker_en
          marker_de
          value_ua
          value_ru
          value_en
          value_de
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
