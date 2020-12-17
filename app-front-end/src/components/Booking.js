import React from 'react';
import { useSelector } from 'react-redux';
import { BookingCard } from './BookingCard';
import 'react-calendar/dist/Calendar.css';
import '../css/listing.scss';

export default function Booking () {
    const user = useSelector(state => state.user.user_id)
    const token = useSelector(state => state.user.token);

const cars = useSelector(state => state.car.cars).filter((car) => {
    const dateValue = Object.values(car.dateLookUp).filter(obj => obj.user === user)
    if (dateValue.length) return car

});

    if (token) {
        return (
          <div className="listing booking">
            <div className="header">
              <h1>My Bookings</h1>
            </div>

            {cars.length > 0 ? (
              <div className="main-content">
                {cars.map((data, key) => (
                  <BookingCard
                    data={data}
                    key={key}
                    user_Id = {user}
                  />

                ))}
              </div>
            ) : (
              <h1>You have no Booking</h1>
            )}
          </div>
        );
      } else {
        return (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <h1>My Listings</h1>
            <div style={{ margin: '2rem' }}>
              <h3>Login to see your Bookings</h3>
            </div>
          </div>
        );
      }
}