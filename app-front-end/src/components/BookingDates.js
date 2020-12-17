import React,{useState} from 'react';

    export default function BookingDates ({date,user})  {

       
       const datesBookedfilter = Object.values(date).filter(obj => obj.user === user)
       
        let datesBooked = []
    
        
            for (let i = datesBookedfilter[0].date ; i <= datesBookedfilter[datesBookedfilter.length -1].date ; i+=86400000){
                // daysBooked ++
                const selectDate = new Date(i)
                const month = selectDate.getMonth()
                const year = selectDate.getFullYear()
                const day = selectDate.getDate()
                let bookDate = {
                    date: `${month}/${day}/${year}`
                }
                datesBooked.push(bookDate)

            
        }

        return(
            <div className='bookingDates'>
                <div className='booked_header'>
                    <h1>Booked  Dates</h1>
                </div>
                <div className = 'dates'>
                    <div  >
                        <h5>From: {datesBooked[0].date}</h5>
                        <h5>To: {datesBooked[datesBooked.length-1].date}</h5>
                    </div>
                  
                </div>
            </div>

        ) 

    }

