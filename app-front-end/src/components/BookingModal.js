import React,{useState} from 'react';
import Modal from 'react-modal';
import '../css/loginRegisterModal.scss'
import Alert from '@material-ui/lab/Alert';
import { useSelector, useDispatch } from 'react-redux'
import {CalanderBox} from './CalanderBox'
import Grid from '@material-ui/core/Grid'; 
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
// import {bookCar} from '../store/actions/cars'
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm'
import CheckoutPrice from '../helperFunctions/calculateCheckOutPrice'
import {fetchCars} from '../store/actions/cars'
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

export default function BookingModal ({openModal, closeModal,carData}) {
    const [selectedDate, setSelectedDate] = React.useState({
        from: {
            date :new Date(Date.now()),
            validation: false
        },
        to: {
            date:new Date(Date.now()),
            validation:false
        }
    });
    const [errMsg, setErrMsg] = useState('');
    const dispatch = useDispatch();
    const [modalType ,setModalType] = useState('book')
    const token = useSelector((state) => state.user.token)
 
    const {year, make, model, price,owner,dateLookUp , _id } = carData;

    const clearState = () =>{
        setSelectedDate(
            {
                from: {
                    date :new Date(Date.now()),
                    validation: false
                },
                to: {
                    date:new Date(Date.now()),
                    validation:false
                }
            }
        )
        setModalType('book')
    }
    
    const handleBookingSubmit = () => {
        if(selectedDate.to.date <= selectedDate.from.date ){
            return setErrMsg(`Your End Date Is Incorrect`)
        }
        if (!selectedDate.from.validation || !selectedDate.to.validation ){
            return setErrMsg(`Please Fill Out The Correct Dates`)
        }
        setModalType('payment')
    }

    const handlePayment = () => {
        setModalType('makingPayment')
        setTimeout(async function(){ 
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/cars/bookCar/${_id}`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({bookingDate : {from:selectedDate.from.date, to:selectedDate.to.date}}),
              });
              
              let jsonData = await response.json();
              if(jsonData.status ==='success'){
                dispatch(fetchCars())
                setModalType('payed') 
              }else{
                  setModalType('error')
              }  
    }, 5000);

        
    }
    const handleDateChange = (name,date) => {
        setErrMsg('')
        let newDate = {...selectedDate}
        newDate[name].date = Date.parse(date)
        newDate[name].validation = true
        const currentTime = new Date()
        const selectDate = date.getDate()
        const month = date.getMonth()
        const year = date.getFullYear()
        const dateKey = `${selectDate}/${month}/${year}`
        if(date < currentTime){
            return setErrMsg(`Select A Date That Is Current`)
        }
        if(dateKey in dateLookUp){
            if (dateLookUp[dateKey].booked === true){
                return setErrMsg(`${dateKey} Is Booked Already`)
            }
            if(name === 'to' && selectedDate.from.date >= Date.parse(date)){
                return setErrMsg(`Your To-Date Of ${dateKey} is Not Valid`)
            }
            setSelectedDate(
               newDate
            );
        }else{
            setErrMsg(`${dateKey} Is Not Available`)
        }
    };


  


    let main;

    if (modalType === 'book') {
      main = (
        <React.Fragment>
            <div className='modal-content book'>
                {errMsg && <Alert className ='error' severity="error">{errMsg}</Alert>}
                <div className='calender_book'>
                        <CalanderBox dateLookUp = {dateLookUp}/>
                        <div className = 'info'>
                            <div className = 'date_picker'>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <Grid container justify="space-around">
                                        <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        label="From"
                                        name ='from'
                                        value={selectedDate.from.date}
                                        onChange={ (e) => { handleDateChange('from' , e) }}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                        />
                                        <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        margin="normal"
                                        label="To"
                                        name='to'
                                        format="MM/dd/yyyy"
                                        value={selectedDate.to.date}
                                        onChange={ (e) => { handleDateChange('to' , e) }}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                        />
                                    </Grid>
                                </MuiPickersUtilsProvider>
                            </div>
                            <div className = 'total_price'>
                                <CheckoutPrice date = {selectedDate} price = {price}/>
                            </div>
                        </div>
                    </div>
                </div>
            <div className='create-btn' onClick = {()=> {handleBookingSubmit()}}>
                <h2>Book</h2>
            </div>
        </React.Fragment>
      );
    }
    if (modalType === 'payed'){
        main = (
            <React.Fragment>
                <div className='modal-content payed'>
                    <h1>Thank You for Your Payment</h1>
                    <h1>Your Order Has Been Successful</h1>
                </div>
            </React.Fragment>
          );
    }
    if (modalType === 'error'){
        main = (
            <React.Fragment>
                <div className='modal-content payed'>
                    <h1>Error In payment</h1>
                    <h1>Please Click Back and Try Again</h1>
                </div>
            </React.Fragment>
          );
    }
    if (modalType === 'makingPayment'){
        main = (
            <React.Fragment>
                <div className='modal-content loading'>
                    <h1>Payment is being Processed</h1>
                <img src="https://i.pinimg.com/originals/3f/9a/d4/3f9ad4e2e337e951217651e0e1f61832.gif" alt="Logo" />
                </div>
            </React.Fragment>
          );
    } 
    if (modalType === 'payment') {
      main = (
        <React.Fragment>
            <div className='modal-content book'>
                {errMsg && <Alert className ='error' severity="error">{errMsg}</Alert>}
                <div className = 'userPaymentInfo'>

                </div>
                <CheckoutForm handlePayment = {handlePayment}/>
                <button onClick = {() => {setModalType('book')}}>Back</button>
            </div>
        </React.Fragment>
      );
    }

    
    return (
        <Elements stripe={stripePromise}>
        <Modal isOpen={openModal} className='create-listing-modal bookingModal' 
            ariaHideApp={false}
            >
                <div className='modal-header'>
                     <h2>{year} {make} {model}</h2>
                        <span className='close-modal-btn' onClick={() => { 
                            clearState() 
                            closeModal(false)}}>
                                <h2>x</h2></span>
                </div>
                {main}
        </Modal>
        </Elements>
    )
}