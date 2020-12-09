import { React, useState, useEffect } from 'react';
import { fetchFavorites } from '../../store/actions/users';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../Card';
import CardModal from '../CardModal';
// import '../../css/favoritesBar.scss';


export default function FavoritesBar() {
  const carData = useSelector(state => state.user.favoriteDetails);
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const closeModalHandler = () => setOpenModal(false);
  const openModalHandler = () => setOpenModal(true);
  const [carId, setCarId] = useState(null);

  useEffect(() => {
    dispatch(fetchFavorites());
  }, []);

  return (
    <div className="favorites-bar">
      <div className="content">
        <div className="items">
          <h3>Favorites</h3>
          {carData.map((data, key) => (
            <div className="box" key={key} onClick={openModalHandler}>
              <img src={data.img[0]} alt="Thumbnail" />
              <div className="info">
                <h3>{data.make} </h3>
                <h3>{data.model}</h3>
                <h5>PPD: {data.price}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
      {carId !== null && (
        <CardModal
          closeModal={closeModalHandler}
          carId={carId}
          openModal={openModal}
        />
      )}
    </div>
  );
}
