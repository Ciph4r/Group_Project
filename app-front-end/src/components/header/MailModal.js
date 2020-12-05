import React from 'react'
import Modal from 'react-modal'
import '../../css/mailModal.scss'
import {InboxItem} from './InboxItem'


export const MailModal = ({openInbox, closeInboxHandler , userInbox, userInbox_id , OpenMessageHandler,setMessages_id}) => {

    let InboxContent;
    if (userInbox.length < 1){
        InboxContent= (
            <React.Fragment>
                <h1 style ={{textAlign:'center'}}>Your Inbox Is Empty</h1>
            </React.Fragment>
      );
    } else {
        InboxContent = (
        <React.Fragment>
            {userInbox.map((message, idx) => (
            <InboxItem 
            onClick = {() => {
            // setMessages_id(message._id)
            OpenMessageHandler(message)
            }}
            key = {idx} 
            data = {message}
            userInbox_id = {userInbox_id}
            />
            ))}
        </React.Fragment>

        );
    }

    return (
            <Modal isOpen={openInbox} className='modal' 
            ariaHideApp={false}
            >
                <div className='modal-header'>
                     <h2>Inbox</h2>
                     <span className='close-modal-btn' onClick={closeInboxHandler}><h2>x</h2></span>
                </div>
                <div className='modal-content'>
                {InboxContent}
                </div>
            </Modal>

    )
}

