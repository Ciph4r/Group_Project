import React from 'react';
import Carousel from 'react-material-ui-carousel';
import CarouselItem from './CarouselItem';
import { useSelector, useDispatch } from 'react-redux';
import '../../css/carouselItem.scss';


export default function CarCarousel(props) {
  const carData = useSelector(state => state.car.cars);

  return (
    <div className="carousel">
      <Carousel animation="slide" interval="8000" timeout={800}>
        {carData.slice(0, 5).map((item, i) => (
          <CarouselItem key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
}
