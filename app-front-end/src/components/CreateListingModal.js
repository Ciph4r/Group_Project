import {React , useState} from 'react'
import Modal from 'react-modal'
import TextField from '@material-ui/core/TextField';
import '../css/loginRegisterModal.scss'


export const CreateListingModal = ({showCreateModal}) => {

    return (
        <Modal isOpen={showCreateModal} className='create-listing-modal' 
        ariaHideApp={false}
        >
            <div className='modal-header'>
                     <h2>Create Listing</h2>
                     <span className='close-modal-btn' onClick={() => {}}><h2>x</h2></span>
            </div>
            <div className='modal-content'>
                <TextField id="standard-basic" label="FirstName" />
                <TextField id="standard-basic" label="LastName" />
                <hr/>
                <TextField id="standard-basic" label="Email" />
                <hr/>
                <TextField id="standard-basic" label="Password" />
            </div>
            <div className='create-btn' onClick = {() =>{}}>
                <h2>Create</h2>
            </div>
        </Modal>
    )

}