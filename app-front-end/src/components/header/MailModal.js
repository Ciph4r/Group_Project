import {React} from 'react'
import Modal from 'react-modal'
import '../../css/mailModal.scss'
import {InboxItem} from './InboxItem'
import {changetoRead} from '../../store/actions/inbox'
import {useDispatch} from 'react-redux'


export const MailModal = ({openMail, closeMailHandler , inbox,OpenMessageHandler}) => {
    const dispatch = useDispatch()



    return (
            <Modal isOpen={openMail} className='modal' 
            ariaHideApp={false}
            >
                <div className='modal-header'>
                     <h2>Inbox</h2>
                     <span className='close-modal-btn' onClick={closeMailHandler}><h2>x</h2></span>
                </div>
                <div className='modal-content'>
                         {inbox.map((inbox, idx) => (
                             <InboxItem 
                              onClick = {() => OpenMessageHandler(inbox)}
                              key = {idx} 
                              data = {inbox}
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
