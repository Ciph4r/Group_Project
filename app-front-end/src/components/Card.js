import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Rating from '@material-ui/lab/Rating';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorites } from '../store/actions/users';
import '../css/card.scss';

export default function Card({ data, carId, openModalHandler }) {
  const { img, year, make, model, price, description } = data;
  const [value, setValue] = React.useState(3);
  const favorites = useSelector(state => state.user.favorites);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="card-img">
        <IconButton
          className={
            favorites.indexOf(data._id) >= 0
              ? 'card-fav-icon active'
              : 'card-fav-icon'
          }
          onClick={() => {
            dispatch(toggleFavorites(data._id));
          }}
        >
          <FavoriteIcon />
        </IconButton>
        <img src={img[0]} alt="..." />
      </div>
      <div
        className="card-body"
        onClick={() => {
          openModalHandler();
        }}
      >
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
