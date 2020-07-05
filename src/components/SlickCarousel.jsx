import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import './SlickCarousel.scss';

/* eslint react/destructuring-assignment: 0 */
export const SlickCarousel = props => {
  const { children, containerClassName = 'carousel', sliderRef, settings } = props;

  // Pass sliderRef to parent component
  const sliderElement = useRef(null);

  useEffect(() => {
    if (sliderRef) {
      sliderRef(sliderElement);
    }
  }, [sliderRef]);

  return (
    <div className={containerClassName}>
      <Slider {...settings} ref={sliderRef ? sliderElement : null}>
        {children}
      </Slider>
    </div>
  );
};
