import React from 'react';

export default function CarouselItem(props) {
  return (
    <div className="carousel-item">
      <img src={props.item.img} alt="..." />
      <h2>
        {props.item.year} {props.item.make} {props.item.model}
      </h2>
      <h4>{props.item.price} per day</h4>
    </div>
  );
}
