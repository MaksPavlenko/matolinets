import React from 'react';
import ReactPlayer from 'react-player';
import useIntersectionObserver from '@react-hook/intersection-observer';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types';

const CaseInnerVideo = ({ videoItems }) => {
  const containerRef = React.useRef();
  const lockRef = React.useRef(false);
  const { isIntersecting } = useIntersectionObserver(containerRef);
  if (isIntersecting) {
    lockRef.current = true;
  }

  return (
    <div className="case-video__gallery">
      {videoItems.map((item, index) => {
        return (
          <div className="case-video__item" key={index} ref={containerRef}>
            {lockRef.current && (
              <LazyLoadComponent>
                <ReactPlayer
                  className="react-player"
                  controls={true}
                  url={item.link}
                  width="100%"
                  height="100%"
                  allowFullScreen={true}
                  config={{
                    vimeo: {
                      playerVars: { origin: 'http://localhost:8000' },
                    },
                  }}
                />
              </LazyLoadComponent>
            )}
          </div>
        );
      })}
    </div>
  );
};

CaseInnerVideo.propTypes = {
  videoItems: PropTypes.array,
};

export default CaseInnerVideo;
