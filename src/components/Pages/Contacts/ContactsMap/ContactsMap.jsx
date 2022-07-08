import React from 'react';
import useIntersectionObserver from '@react-hook/intersection-observer';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const ContactsMap = () => {
  const containerRef = React.useRef();
  const lockRef = React.useRef(false);
  const { isIntersecting } = useIntersectionObserver(containerRef);
  if (isIntersecting) {
    lockRef.current = true;
  }
  return (
    <div className="contacts-map__wrapper" ref={containerRef}>
      {lockRef.current && (
        <LazyLoadComponent>
          <iframe
            title="Matolinets"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.036414073116!2d30.560122615730343!3d50.42179317947144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf707b75503b%3A0x50595a3af007d30e!2z0YPQuy4g0JzQuNGH0YPRgNC40L3QsCwgNTIsINCa0LjQtdCyLCDQo9C60YDQsNC40L3QsCwgMDIwMDA!5e0!3m2!1sru!2sit!4v1607023583773!5m2!1sru!2sit"
            width="100%"
            height="450"
            frameBorder="0"
            style={{
              border: 0,
            }}
            aria-hidden="false"
          ></iframe>
        </LazyLoadComponent>
      )}
    </div>
  );
};

export default ContactsMap;
