import React, { useState } from 'react';
import '../css/listing.scss';
import 'react-calendar/dist/Calendar.css';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MsgModal from './MsgModal';
import BookingDates from './BookingDates'



export function BookingCard({data ,user_Id}){

    const [msgModal,SetMsgModal] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    let {img,year,make,model,price,_id ,dateLookUp,owner} = data

    return(
        <div className='listing-card card booking-card'>
            <div className='dateBooked'>
                    <BookingDates date = {dateLookUp} user = {user_Id}/>
                {/* <CalanderBox dateLookUp = {dateLookUp}/> */}
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
                      {/* <h4 className="price">${price}</h4>
                      <span>per day</span> */}
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
                        <MenuItem onClick={() => {SetMsgModal(true)}}>Message Host</MenuItem>
                        <MenuItem onClick={() => {console.log(_id)}}>Cancel Reservation</MenuItem>
                    </Menu>    
                </div>
                <MsgModal openModal = {msgModal} closeModal = {SetMsgModal} id = {owner}/>
        </div>
    )
}