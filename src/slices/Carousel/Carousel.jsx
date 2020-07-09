import React from 'react';
import shortid from 'shortid';
import OnVisible from 'react-on-visible';
import { SlickCarousel, Image } from 'components';
import './Carousel.scss';

export const Carousel = ({ data: { items } }) => {
  const carouselSettings = {
    slidesToShow: 5,
    arrows: true,
    dots: false,
    adaptiveHeight: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <OnVisible wrappingElement="section" percent={20}>
      <SlickCarousel settings={carouselSettings}>
        {items?.map(item => (
          <Image image={item.image} key={shortid.generate()} className="carousel-image" />
        ))}
      </SlickCarousel>
    </OnVisible>
  );
};
