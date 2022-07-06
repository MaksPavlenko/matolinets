import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../../hooks/useLanguage';
import { useStaticQuery, graphql } from 'gatsby';

import SectionHeader from '../../../Ui/SectionHeader/SectionHeader';
import {
  ContentWrapper,
  SectionDefault,
} from '../../../Ui/InterfaceSystem/InterfaceSystem';
import DocsItemsList from './DocsItemsList/DocsItemsList';
import LightBox from '../../../Ui/LightBox/LightBox';

const FundDocs = ({ docs }) => {
  const gallery = useStaticQuery(graphql`
    query allGallaryQuery {
      source: allFile(
        filter: { absolutePath: { regex: "/documents/" } }
        sort: { fields: [name], order: ASC }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData(
              breakpoints: [576, 768, 992, 1200, 1920]
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              layout: FULL_WIDTH
            )
          }
        }
      }
    }
  `);

  const items = gallery.source.nodes;
  const [showLightbox, setShowLightbox] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(0);
  function handleClick(e, index) {
    e.preventDefault();
    setShowLightbox(!showLightbox);
    setSelectedImage(index);
  }

  function closeModal() {
    setShowLightbox(false);
    setSelectedImage(0);
  }

  function goBack() {
    setSelectedImage(selectedImage - 1);
  }

  function goForward() {
    setSelectedImage(selectedImage + 1);
  }

  React.useEffect(() => {
    window.addEventListener('keyup', handleKeyUp, false);

    return () => {
      window.removeEventListener('keyup', handleKeyUp, false);
    };
  });

  function handleKeyUp(e) {
    e.preventDefault();
    const { keyCode } = e;
    if (showLightbox) {
      if (keyCode === 37) {
        // Left Arrow Key
        if (selectedImage > 0) {
          setSelectedImage(selectedImage - 1);
        }
      }
      if (keyCode === 39) {
        // Right Arrow Key
        if (selectedImage < items.length - 1) {
          setSelectedImage(selectedImage + 1);
        }
      }
      if (keyCode === 27) {
        // Escape key
        setShowLightbox(false);
      }
    }
  }

  return (
    <>
      <SectionDefault classes={'fund-docs'}>
        <ContentWrapper>
          <SectionHeader
            title={useLanguage(
              docs.title_ua,
              docs.title_en,
              docs.title_de,
              docs.title_ru
            )}
          />
          <DocsItemsList items={items} handleClick={handleClick} />
        </ContentWrapper>
      </SectionDefault>
      <LightBox
        dinamicImage={items[selectedImage].childImageSharp}
        closeModal={closeModal}
        goBack={goBack}
        goForward={goForward}
        selectedImage={selectedImage}
        images={items}
        showLightbox={showLightbox}
      />
    </>
  );
};

FundDocs.propTypes = {
  docs: PropTypes.object,
};

export default FundDocs;
