import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../css/listing.scss';
import Divider from '@material-ui/core/Divider';
import 'react-calendar/dist/Calendar.css';
import {CreateListingModal} from './CreateListingModal'

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


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

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    let {img,year,make,model,price} =data

    return(
        <div className='listing-card card'>
            <div className='calender'>
                <Calendar onChange={onChange}value={value}/>
            </div>
            <div className='card-group'>
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
       
            <div className='msg-options'>
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        <MoreHorizIcon fontSize="large"/>
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Delete</MenuItem>
                        {/* <MenuItem onClick={handleClose}>...</MenuItem>
                        <MenuItem onClick={handleClose}>...</MenuItem> */}
                    </Menu>    
                </div>

        </div>
    )
}



export default function Listing(props) {

    const [showCreateModal, setShowCreateModal] = useState(false);

    return (
        <div className='listing'>
            <div className="content">
                <div className='header'>
                  <h1> My Listing</h1>
                </div>           
                <div className='create-listing'>
                    <button onClick={()=> setShowCreateModal(true)}>Create New Listing</button>
                    <CreateListingModal showCreateModal={showCreateModal} setShowCreateModal={setShowCreateModal}/>
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
  