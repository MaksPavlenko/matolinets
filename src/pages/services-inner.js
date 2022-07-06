import React from 'react';
import { graphql } from 'gatsby';
import { useLanguage } from '../hooks/useLanguage';
import '../styles/styles.sass';

import Layout from '../components/Layout/layout';
import Seo from '../components/seo';
import { PageWrapper } from '../components/Ui/InterfaceSystem/InterfaceSystem';
import ServicesInner from '../components/Pages/ServicesInner/ServicesInner';

import { servicesInner } from '../db/servicesInner';
import { contactsData } from '../db/contactsData';

const ServicesInnerPage = () => {
  return (
    <Layout>
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
        <ServicesInner
          service={servicesInner}
          whatsApp={contactsData.whatsapp}
        />
      </PageWrapper>
    </Layout>
  );
};

export default ServicesInnerPage;

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
