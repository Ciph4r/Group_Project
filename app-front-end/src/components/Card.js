import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Rating from '@material-ui/lab/Rating';
import '../css/card.scss';


export default function Card({data}) {
  const { img, year, make, model, price } = data;
  const [value, setValue] = React.useState(3);
  return (
    <div className="card">
      <div className="card-img">
        <IconButton className="card-fav-icon">
          <FavoriteIcon />
        </IconButton>
        <img src={img[0]} alt="..." />
      </div>
      <div className="card-body">
        <div className="car-info-left">
          <h3 className="year-make">
            {year} {make}
          </h3>
          <h3 className="model">{model}</h3>
        </div>
        <div className="car-info-right">
          <h4 className="price">${price}</h4>
          <span>per day</span>
        </div>
      </div>
      <div className="card-rating">
        <Rating name="read-only" value={value} readOnly />
      </div>
    </div>
  );
}
