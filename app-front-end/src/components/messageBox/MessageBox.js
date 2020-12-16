import React, { useEffect,useState } from 'react';
import { Widget, addResponseMessage, addUserMessage, deleteMessages, renderCustomComponent} from 'react-chat-widget';
import { useSelector, useDispatch } from 'react-redux'
import 'react-chat-widget/lib/styles.css';
import '../../css/chatWindow.scss'
import moment from 'moment'
import {sendMsg} from '../../store/actions/inbox'


let logo = 'https://i.guim.co.uk/img/media/7a633730f5f90db3c12f6efc954a2d5b475c3d4a/0_138_5544_3327/master/5544.jpg?width=1920&quality=85&auto=format&fit=max&s=28e44fd4e328c9c30918ca277fb38308'

export default function MessageBox({userInbox_id ,messages_id}) {
    const messagesData = useSelector((state) => state.inbox.inbox.inboxItems.filter(items => items._id === messages_id))
    const [messageList , setMessageList] = useState()
    const {timestamp , user , user_b, username, user_b_name ,messages ,date ,read } = messagesData[0]
    const dispatch = useDispatch()
    // checks user && user_b to see who the sender is
    let sender = ""
    if (user === userInbox_id){
        sender = user_b
    }else{
        sender = user
    }

    const handleNewUserMessage = (newMessage) => {
        dispatch(sendMsg({messageText: newMessage , id:sender , user:'null'}))
        // Now send the message throught the backend API
      };

      // preload msg
      const preLoadMsg = () => {
        const ResponseMsg = (message) => {
          let timestamp = new moment(message.timestamp,'MMMM Do YYYY, h:mm:ss a').format('LT')
          return (<div className = 'responseMsg'>
                    <div className = 'time'>{timestamp}</div>
                    <div className = 'msg'> {message.messageText}</div>
                  </div>
          )}

        const UserResponseMsg = (message) => {
          let timestamp = new moment(message.timestamp,'MMMM Do YYYY, h:mm:ss a').format('LT')
          return (<div className = 'userresponseMsg'>
                    <div className = 'usertime'>{timestamp}</div>
                    <div className = 'usermsg'>{message.messageText}</div>
                  </div>
          )}
      
        

        // loops through messagelist
        for (let i = 0 ; i < messageList.length ; i++){
        // checks whos sending the message
          if (sender === messageList[i].userInbox_id){
            renderCustomComponent(ResponseMsg, messageList[i])
          }else{
            renderCustomComponent(UserResponseMsg, messageList[i])
              // );
          }
        }
      }

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
          showCloseButton = {false}
        >
          <h1>sdasda</h1>
          </Widget>
    );
}