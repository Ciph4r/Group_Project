import {React , useState} from 'react'
import Modal from 'react-modal'
import '../../css/mailModal.scss'


export const MailModal = ({openMail, closeMailHandler}) => {
    return (
            <Modal isOpen={openMail} className='modal' 
            shouldCloseOnOverlayClick={true}
            >
                <div className='modal-header'>
                     <h2>Inbox</h2>
                     <span className='close-modla-btn' onClick={closeMailHandler}><h2>x</h2></span>
                </div>
                <div className='moda-content'>
                     <h1>sadfsfsdfsdfsdfsdf</h1>
                    <h1>sadfsfsdfsdfsdfsdf</h1>
                    <h1>sadfsfsdfsdfsdfsdf</h1>
                    <h1>sadfsfsdfsdfsdfsdf</h1>
                    <h1>sadfsfsdfsdfsdfsdf</h1>
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
