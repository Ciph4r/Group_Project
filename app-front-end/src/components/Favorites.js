import { React, useState, useEffect } from 'react';
import { fetchFavorites } from '../store/actions/users';
import { useSelector, useDispatch } from 'react-redux';
import Card from './Card';
import CardModal from './CardModal';
import '../css/favorites.scss';

export default function Favorties() {
  const carData = useSelector(state => state.user.favoriteDetails);
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const closeModalHandler = () => setOpenModal(false);
  const openModalHandler = () => setOpenModal(true);
  const [carId, setCarId] = useState(null);

  useEffect(() => {
    dispatch(fetchFavorites());
  }, []);

  if (!carData.length) {
    return (
      <div className="favorites-main">
        <h1>Favorites</h1>
        <div className="favorites-content">
          <h3>Your favorite listings will show here.</h3>
        </div>
      </div>
    );
  } else {
    return (
      <div className="favorites-main">
        <h1>Favorites</h1>
        <div className="favorites-content">
          {carData.map((data, key) => (
            <div
              className="box"
              key={data._id}
              onClick={() => {
                setCarId(data._id);
                /// add fetch update data
              }}
            >
              <Card
                key={key}
                data={data}
                carId={carId}
                openModalHandler={openModalHandler}
              />
            </div>
          ))}
          {carId !== null && (
            <CardModal
              closeModal={closeModalHandler}
              carId={carId}
              openModal={openModal}
            />
          )}
        </div>
      </div>
    );
  }
}
