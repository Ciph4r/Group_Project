import React, { useEffect,useState } from 'react';
import { Widget, addResponseMessage, addUserMessage, deleteMessages, renderCustomComponent} from 'react-chat-widget';
import { useSelector, useDispatch } from 'react-redux'
import 'react-chat-widget/lib/styles.css';
import '../../css/chatWindow.scss'
import moment from 'moment'

let logo = 'https://i.guim.co.uk/img/media/7a633730f5f90db3c12f6efc954a2d5b475c3d4a/0_138_5544_3327/master/5544.jpg?width=1920&quality=85&auto=format&fit=max&s=28e44fd4e328c9c30918ca277fb38308'

export default function MessageBox({messagesData , userInbox_id}) {
    const [messageList , setMessageList] = useState()

    const {timestamp , user , user_b, username, user_b_name ,messages ,date ,read } = messagesData


   
    console.log(moment().format())



    const handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);
        console.log(messageList)
        // Now send the message throught the backend API
      };
      console.log(date)
      // preload msg
      const preLoadMsg = () => {
        
        const CurrentDate = ({date}) => {
          return new Date().getDate() !== new Date(date).getDate()
              ? new moment(date,'MMMM Do YYYY, h:mm:ss a').format('LT')
              : new moment(date,'MMMM Do YYYY, h:mm:ss a').format('ddd LT');

      };
      const ResponseMsg = (message) => {
        console.log(message)
        let timestamp = new moment(message.timestamp,'MMMM Do YYYY, h:mm:ss a').format('LT')
        return (<div className = 'responseMsg'>
                  <div className = 'time'>{timestamp}</div>
                  <hr className = 'userhr'/>
                  <div className = 'msg'> {message.messageText}</div>
                </div>
        )}

        const UserResponseMsg = (message) => {
          let timestamp = new moment(message.timestamp,'MMMM Do YYYY, h:mm:ss a').format('LT')
          return (<div className = 'userresponseMsg'>
                    <div className = 'usertime'>{timestamp}</div>
                    <hr className = 'userhr'/>
                    <div className = 'usermsg'>{message.messageText}</div>
                  </div>
          )}
      
        // checks user && user_b to see who the sender is
        let sender = ""
        if (user === userInbox_id){
            sender = user_b
        }else{
            sender = user
        }
        // loops through messagelist
        for (let i = 0 ; i < messageList.length ; i++){
        // checks whos sending the message
          if (sender === messageList[i].userInbox_id){
            // addResponseMessage(messageList[i].messageText);
            // renderCustomComponent(CurrentDate, {date: messageList[i].timestamp});
            renderCustomComponent(ResponseMsg, messageList[i])
          }else{
            // addUserMessage(messageList[i].messageText);
            // renderCustomComponent(
            //   CurrentDate, {date: messageList[i].timestamp }
            renderCustomComponent(UserResponseMsg, messageList[i])
              // );
          }
        }
      }

      // const custom userMsg = () =>{

      // }


      // sets data and clears all previous message
  useEffect(() => {
    setMessageList(messages)
    deleteMessages()
  });


  useEffect(() => {
    if(messageList){
        preLoadMsg()
    }
  },[messageList])




    return (
        <Widget
          handleNewUserMessage={handleNewUserMessage}
          profileAvatar={logo}
          title="My new awesome title"
          subtitle="And my cool subtitle"
          launcher={()=>{}}
          showTimeStamp= {false}
          
        >
          <h1>sdasda</h1>
          </Widget>
    );
}