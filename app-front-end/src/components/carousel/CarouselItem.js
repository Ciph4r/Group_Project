import React from 'react';
import { capitalize } from '../../helperFunctions/capitalize';

export default function CarouselItem(props) {
  return (
    <div className="carousel-item">
      <img src={props.item.img[0]} alt="..." />
      <div className="carousel-item-body">
        <div className="carousel-item-header">
          <div className="carousel-item-info">
            <h2>
              {props.item.year} {capitalize(props.item.make)}
            </h2>
            <h2>{capitalize(props.item.model)}</h2>
          </div>
          <div className="carousel-item-price">
            <h4>${props.item.price}</h4>
            <h4>per day</h4>
          </div>
        </div>
        <div className="carousel-item-description">
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit. */}
          {capitalize(props.item.description)}
        </div>
      </div>
    </div>
  );
}
