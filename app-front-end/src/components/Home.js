import { React, useState } from 'react';
import Card from './Card';
import Search from './Search';
import Filter from './Filter';
import CardModal from './CardModal';
import '../css/home.scss';

export default function Home() {
  const tempData = [
    {
      img:
        'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iho0QqgeF4K8/v1/-1x-1.jpg',
      year: '2011',
      make: 'Dodge',
      model: 'Charger',
      price: '$150',
    },
    {
      img:
        'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iho0QqgeF4K8/v1/-1x-1.jpg',
      year: '2011',
      make: 'Dodge',
      model: 'Charger',
      price: '$150',
    },
    {
      img:
        'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iho0QqgeF4K8/v1/-1x-1.jpg',
      year: '2011',
      make: 'Dodge',
      model: 'Charger',
      price: '$150',
    },
    {
      img:
        'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iho0QqgeF4K8/v1/-1x-1.jpg',
      year: '2011',
      make: 'Dodge',
      model: 'Charger',
      price: '$150',
    },
  ];

  const [openModal, setOpenModal] = useState(false);

  const closeModalHandler = () => setOpenModal(false);
  const openModalHandler = () => setOpenModal(true);
  const [data, setData] = useState({});

  return (
    <div className="home">
      <Search />
      <Filter />
      <div className="home-content">
        {tempData.map((data, key) => (
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
