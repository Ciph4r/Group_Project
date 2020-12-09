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


export function ListingCard({data , modalType,setShowCreateModal}){
    const [value, onChange] = useState(new Date());
    // const [showCreateModal, setShowCreateModal] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    let {img,year,make,model,price,_id ,dateList , dateLookUp} = data

    // fills calander
    const tileContent = ({ date, view }) => {
        const todayDate = date.getDate()
        const todayMonth = date.getMonth()
        const todayYear = date.getFullYear()
        const dateKey = `${todayDate}/${todayMonth}/${todayYear}`
        
        if (dateKey in dateLookUp){
            if(dateLookUp[dateKey].booked === false){
                return <p className = 'days_open'>Open</p>
            }else{
                return <p className = 'days_open'>Booked</p>
            }
        } 
        return <p className = 'days_close'>Closed</p>
    }

    
    /// set classname for color
    const titleClassName = ({ date, view }) => {
        const todayDate = date.getDate()
        const todayMonth = date.getMonth()
        const todayYear = date.getFullYear()
        const dateKey = `${todayDate}/${todayMonth}/${todayYear}`

        if (dateKey in dateLookUp){
            if(dateLookUp[dateKey].booked === false){
                return 'open'
            }
        }
        return 'closed'
    }

    return(
        <div className='listing-card card'>
            <div className='calender'>
                <Calendar 
                onChange={onChange}
                value={value}
                tileContent={tileContent}
                tileClassName = {titleClassName}
                />
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
                        <MenuItem onClick={()=> modalType(_id)}>Edit</MenuItem>
                        <MenuItem onClick={() => {console.log(_id)}}>Delete</MenuItem>
                    </Menu>    
                </div>
                {/* <CreateListingModal showCreateModal={showCreateModal} setShowCreateModal={setShowCreateModal} listingData={data}/> */}
        </div>
    )
}