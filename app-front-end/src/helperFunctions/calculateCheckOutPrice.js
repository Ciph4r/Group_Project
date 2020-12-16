import React,{useState} from 'react';

    export default function CheckoutPrice ({date,price})  {
        const {from,to} = date
        let priceStat = []
        if(from.date < to.date){
            for (let i = from.date ; i <= to.date ; i+=86400000){
                // daysBooked ++
                const selectDate = new Date(i)
                const month = selectDate.getMonth()
                const year = selectDate.getFullYear()
                const day = selectDate.getDate()
                let bookDate = {
                    date: `${month}/${day}/${year}`
                }
                priceStat.push(bookDate)

            }
        }
        console.log(priceStat)
        if (priceStat.length<1) {
            return (
                <div>
                    <h2>Price: $0</h2>
                    <h2>Total: $0</h2>
                </div>
            )
        }
        return(
            <div>
                <div className = 'price'>
                    <h2>Price</h2>
                    {priceStat.map((data,key) => (
                        <div  key={key}>
                            <h4>Date: {data.date} Price: ${price}</h4>
                        </div>
                    ))}
                </div>
                <div>
                    <h2>Total</h2>
                    <h4>${priceStat.length *price}</h4>
                </div>
            </div>

        ) 

    }


