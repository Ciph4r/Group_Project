import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatIcon from '@material-ui/icons/Chat';
import Rating from '@material-ui/lab/Rating';
import '../css/card.scss';

export default function Card(props) {
  const { img, year, make, model, price } = props.data;
  const [value, setValue] = React.useState(3);

  return (
    <div className="card">
      <div className="card-img">
        <IconButton className="card-fav-icon">
          <FavoriteIcon />
        </IconButton>
        <img src={img} alt="..." />
      </div>
      <div className="card-body">
        <div className="car-info">
          <h3 className="year-make">
            {year} {make}
          </h3>
          <h3 className="model">{model}</h3>
        </div>
        <div className="car-info">
          <h4 className="price">{price}</h4>
          <span>per day</span>
        </div>
      </div>

      {/* --- Card message and schedule buttons to be referanced: --- */}

      {/* <div className="card-icons">
        <div className="card-icon-group">
          <IconButton aria-label="message">
            <ChatIcon fontSize="large" />
          </IconButton>
          <span>Message Owner</span>
        </div>
        <div className="card-icon-group">
          <IconButton aria-label="schedule">
            <CalendarTodayIcon fontSize="large" />
          </IconButton>
          <span>Schedule Car</span>
        </div>
      </div> */}

      <div className="card-rating">
        <Rating name="read-only" value={value} readOnly />
      </div>
    </div>
  );
}
