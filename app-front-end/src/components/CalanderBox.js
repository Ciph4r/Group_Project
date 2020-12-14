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


export function CalanderBox ({dateLookUp}){
    const [value, onChange] = useState(new Date());
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
                <Calendar 
                onChange={onChange}
                value={value}
                tileContent={tileContent}
                tileClassName = {titleClassName}
                />
    )
}