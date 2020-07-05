import React from 'react';
import shortid from 'shortid';
import { SlickCarousel, Image } from 'components';
import './Carousel.scss';

export const Carousel = ({ data: { items } }) => {
  const carouselSettings = {
    slidesToShow: 5,
    arrows: true,
    dots: false,
    adaptiveHeight: true,
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
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <SlickCarousel settings={carouselSettings}>
      {items?.map(item => (
        <Image image={item.image} key={shortid.generate()} className="carousel-image" />
      ))}
    </SlickCarousel>
  );
};