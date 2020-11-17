import {React , useState} from 'react'
import Modal from 'react-modal'
import '../../css/loginRegisterModal.scss'
import TextField from '@material-ui/core/TextField';



export const LoginModal = ({openLogin , closeLoginHandler , loginHandler}) => {

    return (
        <Modal isOpen={openLogin} className='login-modal' 
        ariaHideApp={false}
        >
            <div className='modal-header'>
                     <h2>Login</h2>
                     <span className='close-modal-btn' onClick={closeLoginHandler}><h2>x</h2></span>
            </div>
            <div className='modal-content'>
                <TextField id="standard-basic" label="Email" />
                <hr/>
                <TextField id="standard-basic" label="Password" />
            </div>
            <div className='login-btn' onClick = {() => loginHandler()}>
                <h2>Login</h2>
            </div>
        </Modal>
    )

}
