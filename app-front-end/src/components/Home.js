import { React, useState,useEffect } from 'react';
import Card from './Card';
import Search from './Search';
import Filter from './Filter';
import CarCarousel from './carousel/CarCarousel';
import CardModal from './CardModal';
import { useSelector, useDispatch } from 'react-redux'
import { fetchCars } from '../store/actions/cars'
import '../css/home.scss';


export default function Home() {
  const carData = useSelector((state) => state.car.cars)
  const [openModal, setOpenModal] = useState(false);
  const closeModalHandler = () => setOpenModal(false);
  const openModalHandler = () => setOpenModal(true);
  const [carId,setCarId] = useState(null)
  const dispatch = useDispatch();


  useEffect(()=> {
    dispatch(fetchCars())
},[]);


  return (
    <div className="home">
      <Search />
      <Filter />
      <CarCarousel />

      <div className="home-content">
        {carData.map((data, key) => (
          <div
            className="box"
            key={data._id}
            onClick={() => {
              setCarId(data._id);
              /// add fetch update data
            }}
          >
            <Card key={key} data={data} carId={carId} openModalHandler={openModalHandler}/>
          </div>
        ))}
      </div>
        {carId !== null && <CardModal
        closeModal={closeModalHandler}
        carId={carId}
        openModal={openModal}
      />}
    </div>
  );
}


