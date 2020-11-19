import React from 'react';
import Carousel from 'react-material-ui-carousel';
import CarouselItem from './CarouselItem';
import '../../css/carouselItem.scss';

export default function CarCarousel(props) {
  const items = [
    {
      img:
        'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iho0QqgeF4K8/v1/-1x-1.jpg',
      year: '2011',
      make: 'Dodge',
      model: 'Charger',
      price: '$150',
    },
    {
      img:
        'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iho0QqgeF4K8/v1/-1x-1.jpg',
      year: '2011',
      make: 'Dodge',
      model: 'Charger',
      price: '$150',
    },
    {
      img:
        'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iho0QqgeF4K8/v1/-1x-1.jpg',
      year: '2011',
      make: 'Dodge',
      model: 'Charger',
      price: '$150',
    },
    {
      img:
        'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iho0QqgeF4K8/v1/-1x-1.jpg',
      year: '2011',
      make: 'Dodge',
      model: 'Charger',
      price: '$150',
    },
    {
      img:
        'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iho0QqgeF4K8/v1/-1x-1.jpg',
      year: '2011',
      make: 'Dodge',
      model: 'Charger',
      price: '$150',
    },
  ];

  return (
    <Carousel
      animation="slide"
      interval="6000"
      timeout={800}
    >
      {items.map((item, i) => (
        <CarouselItem key={i} item={item} />
      ))}
    </Carousel>
  );
}
