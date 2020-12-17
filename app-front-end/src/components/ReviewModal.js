import React,{useState} from 'react';
import Modal from 'react-modal';
import '../css/loginRegisterModal.scss'
import Alert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';
import {useDispatch } from 'react-redux';
import {sendReview} from '../store/actions/cars'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

export default function ReviewModal ({openModal, closeModal,car_id}) {
    const [errMsg, setErrMsg] = useState('');
    const [message , setMesssage] = useState('')
    const [reviewData , setReviewData] =useState ({star:'----',message:'', tittle:''})
    const dispatch = useDispatch();

    const useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(1),
          minWidth: 100,
        },
        
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
      }));


    const setDataHandler = (e) => {
        setErrMsg('')
        let newData = reviewData
        newData[e.name] = e.value
        setReviewData({
           ...reviewData,...newData
        });
        console.log(reviewData)
    };

    const handleSendMsg = (msg) => {
        setErrMsg('')
        if (reviewData.message.length < 10){
          return  setErrMsg('Require Atleast 10 Word')
        }
        if(reviewData.star === '----'){
            return  setErrMsg('Must Input rating')
        }
        if(reviewData.tittle.length < 1){
            return  setErrMsg('Must Include A Tittle')
        }
        dispatch(sendReview({reviewData: reviewData , id: car_id}))
        // closeModal(false)
    }
    const classes = useStyles();

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
                    <FormControl className={classes.formControl}>
                        <InputLabel >Rating</InputLabel>
                        <Select
                            className='star-select'
                            name='star'
                            id="star"
                            value={reviewData.star}                           
                            onChange={(e)=>{setDataHandler(e.target)}}
                            >
                            <MenuItem value={'----'}>----</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={4}>5</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField  label="tittle" name='tittle' value={reviewData.tittle} onChange={(e)=>{setDataHandler(e.target)}}/>
                    <TextField
                        label="Message"
                        multiline
                        rows={5}
                        defaultValue=""
                        name='message'
                        value={reviewData.message}
                        onChange={(e)=>{setDataHandler(e.target)}}
                    />
                </div>
                <div className='create-btn' onClick = {()=> {handleSendMsg(message)}}>
                            <h2>Post Review</h2>
                </div>
        </Modal>
    )
}