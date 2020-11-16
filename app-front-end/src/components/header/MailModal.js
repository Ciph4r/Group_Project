import {React , useState} from 'react'
import Modal from 'react-modal'
import '../../css/mailModal.scss'
import {InboxItem} from './InboxItem'

const tempData = [
     {
          name:'Dave',
          date:'11:45 PM',
          read: false,
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          img: 'https://c7.alamy.com/comp/P9MYWR/man-avatar-profile-P9MYWR.jpg'

     },
     {
          name:'Jim',
          date:'11:45 PM',
          read: true,
          message: 'Hello World 2',
          img: 'https://c7.alamy.com/comp/P9MYWR/man-avatar-profile-P9MYWR.jpg'
     },
     {
          name:'Jim',
          date:'11:45 PM',
          read: true,
          message: 'Hello World 2',
          img: 'https://c7.alamy.com/comp/P9MYWR/man-avatar-profile-P9MYWR.jpg'
     },
     {
          name:'Jim',
          date:'11:45 PM',
          read: true,
          message: 'Hello World 2',
          img: 'https://c7.alamy.com/comp/P9MYWR/man-avatar-profile-P9MYWR.jpg'
     },
     {
          name:'Jim',
          date:'11:45 PM',
          read: true,
          message: 'Hello World 2',
          img: 'https://c7.alamy.com/comp/P9MYWR/man-avatar-profile-P9MYWR.jpg'
     },
     {
          name:'Jim',
          date:'11:45 PM',
          read: true,
          message: 'Hello World 2',
          img: 'https://c7.alamy.com/comp/P9MYWR/man-avatar-profile-P9MYWR.jpg'
     },


]


export const MailModal = ({openMail, closeMailHandler}) => {
    return (
            <Modal isOpen={openMail} className='modal' 
            shouldCloseOnOverlayClick={true}
            >
                <div className='modal-header'>
                     <h2>Inbox</h2>
                     <span className='close-modla-btn' onClick={closeMailHandler}><h2>x</h2></span>
                </div>
                <div className='modal-content'>
                         {tempData.map((data, key) => (
                             <InboxItem key = {key}
                              data = {data}
                              
                             />
                         ))}
                 </div>
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
