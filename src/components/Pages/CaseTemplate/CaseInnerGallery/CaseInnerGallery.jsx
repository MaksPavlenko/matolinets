import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';

const CaseInnerGallery = ({ gallery }) => {
  const galleryCases = useStaticQuery(graphql`
    query allGallaryCasesQuery {
      source: allFile(
        filter: { absolutePath: { regex: "/works/" } }
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

  const images = galleryCases.source.nodes;
  return (
    <div className="case-gallery">
      {images.map((item, index) => {
        const image = getImage(item.childImageSharp);
        return (
          <div className="case-gallery__image--wrapper" key={index}>
            {image && (
              <GatsbyImage
                className="case-gallery__image"
                image={image}
                alt="img"
                loading="eager"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

CaseInnerGallery.propTypes = {
  gallery: PropTypes.array,
};

export default CaseInnerGallery;
