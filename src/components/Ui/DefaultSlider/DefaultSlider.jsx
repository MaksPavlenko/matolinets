import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.scss';

import { ButtonNext, ButtonPrev } from '../InterfaceSystem/InterfaceSystem';

const DefaultSlider = ({ children }) => {
  const slider = React.createRef();

  // function handleAfterChange(index) {
  //   setCurrentSlide(index);
  // }
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    // afterChange: handleAfterChange,
    responsive: [
      {
        breakpoint: 576,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 1199.98,
        settings: { slidesToShow: 3, slidesToScroll: 3 },
      },
    ],
  };

  return (
    <div className="default-slider__wrapper">
      <Slider ref={slider} {...settings} className={'default-slider'}>
        {children}
      </Slider>
      <div className="default-slider__navigation">
        <div className="default-slider__navigation--buttons">
          <ButtonPrev hendler={() => slider.current.slickPrev()} />
          <ButtonNext hendler={() => slider.current.slickNext()} />
        </div>
      </div>
    </div>
  );
};

export default DefaultSlider;
