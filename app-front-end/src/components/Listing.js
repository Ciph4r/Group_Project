import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../css/listing.scss';
import Divider from '@material-ui/core/Divider';
import 'react-calendar/dist/Calendar.css';
import {CreateListingModal} from './CreateListingModal'

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




const ListingCard = (data) => {
    const [value, onChange] = useState(new Date());
    let {img,year,make,model,price} =data

    return(
        <div className='card'>
            <div className='calender'>
                <Calendar onChange={onChange}value={value}/>
            </div>
            <div className='img'>
                <img src={img} alt="..." />
            </div>
            <div className='card-content'>
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
        </div>
    )
}



export default function Listing(props) {

    const [showCreateModal, setShowCreateModal] = useState(false);

    return (
        <div className='listing'>
            <div className="content">
                <Divider />
                    <h1> My Listing</h1>
                <Divider />
                <div className='create-listing'>
                    <button onClick={()=> setShowCreateModal(true)}>Create New Listing</button>
                    <CreateListingModal showCreateModal={showCreateModal}/>
                </div>
                <div className='main-content'>
                    {tempData.map((data, key) => (
                    ListingCard(data)
                    ))}
                </div>
            </div>
        </div>
      
    );
  }
  