import React, { useState } from 'react';
import { CreateListingModal } from './CreateListingModal';
import { useSelector } from 'react-redux';
import { ListingCard } from './listingCard';
import 'react-calendar/dist/Calendar.css';
import '../css/listing.scss';

export default function Listing(props) {
  const user = useSelector(state => state.user.user_id);
  const token = useSelector(state => state.user.token);
  const carData = useSelector(state => state.car.cars).filter(
    car => car.owner === user
  );
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [dataState, setData] = useState();

  const modalType = id => {
    setData(id);
    setShowCreateModal(true);
  };

  if (token) {
    return (
      <div className="listing">
        <div className="header">
          <h1>My Listings</h1>
        </div>
        <div className="create-listing">
          <button onClick={() => modalType(false)}>Create New Listing</button>
          <CreateListingModal
            showCreateModal={showCreateModal}
            setShowCreateModal={setShowCreateModal}
            id={dataState}
          />
        </div>

        {carData.length > 0 ? (
          <div className="main-content">
            {carData.map((data, key) => (
              <ListingCard
                data={data}
                modalType={modalType}
                key={key}
                setShowCreateModal={setShowCreateModal}
              />
              // ListingCard(data ,modalType ,key ,setShowCreateModal)
            ))}
          </div>
        ) : (
          <h1>You have no Listings</h1>
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
          <h3>Login to see your listings</h3>
        </div>
      </div>
    );
  }
}
