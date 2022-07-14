import React from 'react';
import { graphql } from 'gatsby';
// import { useLanguage } from '../hooks/useLanguage';
import '../styles/styles.sass';

import Layout from '../components/Layout/layout';
import Seo from '../components/seo';
import { PageWrapper } from '../components/Ui/InterfaceSystem/InterfaceSystem';
import PriceItems from '../components/Pages/Price/PriceItems/PriceItems';

// import { priceData } from '../db/priceData';

const PricePage = ({data}) => {
  return (
    <Layout>
      <Seo title={'Dr.Matolinets'} description={'Dr.Matolinets'} />
      <PageWrapper>
        <PriceItems items={data.strapiPrices} />
      </PageWrapper>
    </Layout>
  );
};

export default PricePage;

export const query = graphql`
  query Prices($language: String!) {
      strapiPrices {
        title_ua
        title_ru
        title_en
        title_de
        prices
        accent
        price {
          title_ua
          title_ru
          title_en
          title_de
          items {
            title_ua
            title_ru
            title_en
            title_de
            price
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
