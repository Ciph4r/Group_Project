import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../css/listing.scss';
import 'react-calendar/dist/Calendar.css';
import {CreateListingModal} from './CreateListingModal'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useSelector, useDispatch } from 'react-redux'



const ListingCard = (data , modalType,key ,setShowCreateModal) => {
    const [value, onChange] = useState(new Date());
    // const [showCreateModal, setShowCreateModal] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    let {img,year,make,model,price,id} = data

    return(
        <div className='listing-card card' key={key}>
            <div className='calender'>
                <Calendar onChange={onChange}value={value}/>
            </div>
            <div className='card-group'>
              <div className='img'>
                  <img src={img[0]} alt="..." />
              </div>
              <div className='card-content'>
                  <div className="car-info">
                      <h3 className="year-make">
                          {year} {make}
                      </h3>
                      <h3 className="model">{model}</h3>
                  </div>
                  <div className="car-info">
                      <h4 className="price">${price}</h4>
                      <span>per day</span>
                  </div>
              </div>
            </div>
       
            <div className='msg-options'>
              <div className='option-btn'>
                  <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        <MoreVertIcon fontSize="large"/>
                  </Button>
              </div>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={()=> modalType(id)}>Edit</MenuItem>
                        <MenuItem onClick={handleClose}>Delete</MenuItem>
                    </Menu>    
                </div>
                {/* <CreateListingModal showCreateModal={showCreateModal} setShowCreateModal={setShowCreateModal} listingData={data}/> */}
        </div>
    )
}



export default function Listing(props) {
    const carData = useSelector((state) => state.car)

    const [showCreateModal, setShowCreateModal] = useState(false);
    const [dataState , setData]= useState()
    // const [modalType , setModalType] = useState()
    
    // let modal = <CreateListingModal showCreateModal={showCreateModal} setShowCreateModal={setShowCreateModal} listingData={dataState} type = {'Create'} />


    // const modalType = (key) => {
    //   if (key ===false){
    //     setData({img:[]})
    //     modal = (
    //       <>
    //       <CreateListingModal showCreateModal={showCreateModal} setShowCreateModal={setShowCreateModal} listingData={dataState} type = {'Create'} />
    //       </>
    //     )
    //   }else{
    //     setData(carData[key])
    //     modal = (
    //       <>
    //       <CreateListingModal showCreateModal={showCreateModal} setShowCreateModal={setShowCreateModal} listingData={dataState} type = {'Edit'} />
    //       </>
    //     )
    //   }
    //   setShowCreateModal(true)
    // }
    const modalType = (id) => {
      setData(id)
      setShowCreateModal(true)
    }

    return (
        <div className='listing'>
            <div className="content">
                <div className='header'>
                  <h1> My Listing</h1>
                </div>           
                <div className='create-listing'>
                    <button onClick={()=> modalType(false)}>Create New Listing</button>
                    <CreateListingModal showCreateModal={showCreateModal} setShowCreateModal={setShowCreateModal} id={dataState}  />
                </div>
                <div className='main-content'>
                    {carData.map((data, key) => (
                    ListingCard(data ,modalType ,key ,setShowCreateModal)
                    ))}
                </div>
            </div>
        </div>
      
    );
  }
  