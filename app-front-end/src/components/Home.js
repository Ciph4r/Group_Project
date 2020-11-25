import { React, useState,useEffect } from 'react';
import Card from './Card';
import Search from './Search';
import Filter from './Filter';
import CarCarousel from './carousel/CarCarousel';
import CardModal from './CardModal';
import '../css/home.scss';
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { fetchCars } from '../store/reducer/carReducer';


export default function Home() {
  const carData = useSelector((state) => state.car)
  const [openModal, setOpenModal] = useState(false);
  const closeModalHandler = () => setOpenModal(false);
  const openModalHandler = () => setOpenModal(true);
  const [data, setData] = useState({});
  const dispatch = useDispatch();

  // bindActionCreators(
  //   {
  //     fetchCars,
  //   },
  //   dispatch
  // );
  
  useEffect(()=> {
    dispatch(fetchCars())
});

  return (
    <div className="home">
      <Search />
      <Filter />
      <CarCarousel />
 
      <div className="home-content">
        {carData.map((data, key) => (
          <div
            className="box"
            key={key}
            onClick={() => {
              setData(data);
              openModalHandler();
            }}
          >
            <Card key={key} data={data} />
          </div>
        ))}
      </div>
      <CardModal
        closeModal={closeModalHandler}
        data={data}
        openModal={openModal}
      />
    </div>
  );
}

