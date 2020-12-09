import React,{useState} from 'react';
import Modal from 'react-modal';
import '../css/loginRegisterModal.scss'
import Alert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';
import {useDispatch } from 'react-redux';
import {sendMsg} from '../store/actions/inbox'


export default function MsgModal ({openModal, closeModal,id}) {
    const [errMsg, setErrMsg] = useState('');
    const [message , setMesssage] = useState('')
    const dispatch = useDispatch();


    const handleSendMsg = (msg) => {
        if (message.length < 1){
          return  setErrMsg('Message Is empty')
        }
        dispatch(sendMsg({messageText: message , user: id , id: 'null'}))
        closeModal(false)
    }

    return (
        <Modal isOpen={openModal} className='create-listing-modal' 
            ariaHideApp={false}
            >
                <div className='modal-header'>
                        <h2>Message</h2>
                        <span className='close-modal-btn' onClick={() => {closeModal(false)}}><h2>x</h2></span>
                </div>
                <div className='modal-content'>
                {errMsg && <Alert className ='error' severity="error">{errMsg}</Alert>}
                    <TextField
                        label="Message"
                        multiline
                        rows={5}
                        defaultValue=""
                        name='message'
                        value={message}
                        onChange={(e)=>{setMesssage(e.target.value)}}
                    />
                </div>
                <div className='create-btn' onClick = {()=> {handleSendMsg(message)}}>
                            <h2>Send Message</h2>
                </div>
        </Modal>
    )
}