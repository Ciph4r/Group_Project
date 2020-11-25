import React, { useEffect,useState } from 'react';
import { Widget, addResponseMessage, addUserMessage } from 'react-chat-widget';
import { useSelector, useDispatch } from 'react-redux'
import 'react-chat-widget/lib/styles.css';

let logo = 'https://i.guim.co.uk/img/media/7a633730f5f90db3c12f6efc954a2d5b475c3d4a/0_138_5544_3327/master/5544.jpg?width=1920&quality=85&auto=format&fit=max&s=28e44fd4e328c9c30918ca277fb38308'

export default function MessageBox() {
    const carData = useSelector((state) => state.car.cars)

    const [messageList , setMessageList] = useState([
        {John: 'Hi'},
        {Dave: 'Hi Back'}
    ])

    const handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);
        // Now send the message throught the backend API
      };

 
  useEffect(() => {
    addResponseMessage(messageList[0].John);
    addUserMessage(messageList[1].Dave)
    
  }, []);




    return (
        <Widget
          handleNewUserMessage={handleNewUserMessage}
          profileAvatar={logo}
          title="My new awesome title"
          subtitle="And my cool subtitle"
          launcher={()=>{}}
        />
    );
}