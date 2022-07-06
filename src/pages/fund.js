import React from 'react';
import { graphql } from 'gatsby';
import { useLanguage } from '../hooks/useLanguage';
import '../styles/styles.sass';

import { fundData } from '../db/fundData';
import { casesData } from '../db/casesData';

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

const FundPage = () => {
  const {
    main,
    about,
    facts,
    team,
    tell_line: tell,
    cases,
    documents,
    donate,
  } = fundData;

  return (
    <Layout cls={'fund'}>
      <Seo
        title={useLanguage(
          'nunox: маркетингове агентство: Київ, Україна. (uk)',
          'nunox: marketing agency, Kyiv, Ukraine',
          'nunox: agenzia di marketing: Kiev, Ucraina',
          'nunox: маркетинговое агентство: Киев, Украина'
        )}
        description={useLanguage(
          'Створюємо та розвиваємо бренди. Володіючи власними бізнесами ми пропонуємо підприємцям наш досвід.',
          'We create and develop brands. By owning our own businesses, we offer entrepreneurs our experience.',
          'Creiamo e sviluppiamo marchi. Possedendo le nostre attività, offriamo agli imprenditori la nostra esperienza.',
          'Создаем и развиваем бренды. Владея собственными бизнесами, мы предлагаем предпринимателям наш опыт.'
        )}
      />
      <PageWrapper>
        <FundMain main={main} />
        <FundAbout about={about} />
        <FundFacts facts={facts} />
        <FundTeam team={team} />
        <FundPhone phone={tell} />
        <FundCases cases={cases} items={casesData} />
        <FundDocs docs={documents} />
        <FundDonate donate={donate} />
      </PageWrapper>
    </Layout>
  );
};

export default FundPage;

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
