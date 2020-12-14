import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../css/listing.scss';
import 'react-calendar/dist/Calendar.css';


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
                return <p className = 'days_booked'>Booked</p>
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
            if(dateLookUp[dateKey].booked === true){
                return 'booked'
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