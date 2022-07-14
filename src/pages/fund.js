import React from 'react';
import { graphql } from 'gatsby';
// import { useLanguage } from '../hooks/useLanguage';
import '../styles/styles.sass';

// import { fundData } from '../db/fundData';
// import { casesData } from '../db/casesData';

import Layout from '../components/Layout/layout';
import Seo from '../components/seo';
import { PageWrapper } from '../components/Ui/InterfaceSystem/InterfaceSystem';
import {
  FundMain,
  FundAbout,
  FundFacts,
  FundTeam,
  FundPhone,
  FundCases,
  FundDocs,
  FundDonate,
} from '../components/Pages/Fund';

const FundPage = ({data}) => {

  return (
    <Layout cls={'fund'}>
      <Seo title={'Dr.Matolinets'} description={'Dr.Matolinets'} />
      <PageWrapper>
        <FundMain main={data.strapiFunds.main} />
        <FundAbout about={data.strapiFunds.about} />
        <FundFacts facts={data.strapiFunds.facts} />
        <FundTeam team={data.strapiFunds.team} />
        <FundPhone phone={data.strapiFunds.tell_line} />
        <FundCases cases={data.strapiFunds.cases} items={data.allStrapiCases.nodes} />
        <FundDocs docs={data.strapiFunds.documents} />
        <FundDonate donate={data.strapiFunds.donate} />
      </PageWrapper>
    </Layout>
  );
};

export default FundPage;

export const query = graphql`
  query FundsPage($language: String!) {
    strapiFunds {
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
      }
      about {
        title_ua
        title_ru
        title_en
        title_de
        items {
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
      facts {
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
        items {
          marker
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
      team {
        title_ua
        title_ru
        title_en
        title_de
        items {
          title_ua
          title_ru
          title_en
          title_de
          description_ua
          description_ru
          description_en
          description_de
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
        }
      }
      tell_line {
        title_ua
        title_ru
        title_en
        title_de
        phone
        description_ua
        description_ru
        description_en
        description_de
      }
      cases {
        title_ua
        title_ru
        title_en
        title_de
      }
      documents {
        title_ua
        title_ru
        title_en
        title_de
        items {
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
          id
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
    allStrapiCases {
      nodes {
        title_ua
        title_en
        title_de
        title_ru
        description_ua
        description_ru
        description_en
        description_de
        slug
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
