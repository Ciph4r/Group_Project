import React from 'react'
import Modal from 'react-modal'
import '../../css/mailModal.scss'
import {InboxItem} from './InboxItem'
import {changetoRead} from '../../store/actions/inbox'
import {useDispatch} from 'react-redux'


export const MailModal = ({openMail, closeMailHandler , userInbox, userInbox_id , OpenMessageHandler,setMessages}) => {
    const dispatch = useDispatch()
    console.log(userInbox)
    
    let InboxContent;
    if (userInbox.length === 0 ) {
        InboxContent= (
            <React.Fragment>
                <h1>Your Inbox Is Empty</h1>
            </React.Fragment>
      );
    } else {
        InboxContent = (
        <React.Fragment>
            {userInbox.map((inbox, idx) => (
            <InboxItem 
            onClick = {() => {
            setMessages(inbox)
            OpenMessageHandler(inbox)
            }}
            key = {idx} 
            data = {inbox}
            userInbox_id = {userInbox_id}
            />
            ))}
        </React.Fragment>

        );
    }

    return (
            <Modal isOpen={openMail} className='modal' 
            ariaHideApp={false}
            >
                <div className='modal-header'>
                     <h2>Inbox</h2>
                     <span className='close-modal-btn' onClick={closeMailHandler}><h2>x</h2></span>
                </div>
                <div className='modal-content'>
                {InboxContent}
                </div>
                {/* <div className='modal-content'>
                         {userInbox.map((inbox, idx) => (
                             <InboxItem 
                              onClick = {() => {
                                setMessages(inbox)
                                OpenMessageHandler(inbox)
                            }}
                              key = {idx} 
                              data = {inbox}
                              userInbox_id = {userInbox_id}
                             />
                         ))}
                 </div> */}
            </Modal>

    )
}






// export const MailModal = ({openMail, closeMailHandler}) => {
//     return (
//         <div className='modal'
//         style={{
//             opacity: openMail ? '1' : '0'
//         }}
//         >
//             <div className='modal-header'>
//                 <h2>dfsdfsdf</h2>
//                 <span className='close-modla-btn' onClick={closeMailHandler}>x</span>
//             </div>
//             <div className='moda-content'>
//                 <h1>sadfsfsdfsdfsdfsdf</h1>
//                 <h1>sadfsfsdfsdfsdfsdf</h1>
//                 <h1>sadfsfsdfsdfsdfsdf</h1>
//                 <h1>sadfsfsdfsdfsdfsdf</h1>
//                 <h1>sadfsfsdfsdfsdfsdf</h1>

//             </div>
//         </div>

//     )
// }
