import React from 'react';
import Modal from 'react-modal';
import ModalCarousel from './ModalCarousel';
import ChatIcon from '@material-ui/icons/Chat';
import IconButton from '@material-ui/core/IconButton';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { makeStyles } from '@material-ui/core/styles';
import '../css/cardModal.scss';
import { useSelector, useDispatch } from 'react-redux'

const useStyles = makeStyles(theme => ({
  cardModal: {
    width: '70%',
    backgroundColor: 'white',
    boxShadow: theme.shadows[5],
    outline: 'none',
  },
}));


export default function CardModal({ openModal, closeModal,carId }) {
  const carData = useSelector((state) => state.car.cars.find(car => car._id === `${carId}`))
  const classes = useStyles();

  const { img, year, make, model, price } = carData;

  return (
    <Modal isOpen={openModal} className={classes.cardModal}>
      <div className="close-modal">
        <button onClick={closeModal}>close</button>
      </div>
      <div className="card-modal">
        <div className="card-modal-main">
          <div className="card-modal-col1">
            <ModalCarousel />
            <div className="info-body">
              <div className="car-info-left">
                <h2 className="year-make">
                  {year} {make}
                </h2>
                <h2 className="model">{model}</h2>
              </div>
              <div className="car-info-right">
                <h3 className="price">${price}</h3>
                <h3>per day</h3>
              </div>
            </div>
          </div>
          <div className="card-modal-col2">
            <div className="description">
              <h3>Car Description:</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="card-icons">
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
            </div>
          </div>
        </div>
        <div className="card-modal-ratings">
          <h1>Ratings will go here</h1>
        </div>
      </div>
    </Modal>
  );
}
