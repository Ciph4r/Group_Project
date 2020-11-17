import React from 'react';
import Card from './Card';
import Search from './Search';
import Filter from './Filter';
import '../css/home.scss';

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

export default function Home() {
  return (
    <>
      <Search />
      <Filter />
      <div className="home-content">
        {tempData.map((data, key) => (
          <Card key={key} data={data} />
        ))}
      </div>
    </>
  );
}
