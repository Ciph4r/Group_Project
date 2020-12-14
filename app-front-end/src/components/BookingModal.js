import React,{useState} from 'react';
import Modal from 'react-modal';
import '../css/loginRegisterModal.scss'
import Alert from '@material-ui/lab/Alert';
import {useDispatch } from 'react-redux';
import {CalanderBox} from './CalanderBox'
import Grid from '@material-ui/core/Grid'; 
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function BookingModal ({openModal, closeModal,carData}) {
    const [selectedDate, setSelectedDate] = React.useState({
        from:new Date(Date.now()),
        to: new Date(Date.now())
    });
    const [selectedDateTo, setSelectedDateTo] = React.useState(new Date(Date.now()));
    const [errMsg, setErrMsg] = useState('');
    const dispatch = useDispatch();

    const { img, year, make, model, price, description ,owner, dateLookUp } = carData;

    const handleDateChange = (name,date) => {
        setErrMsg('')
        let newDate = {...selectedDate}
        newDate[name] = Date.parse(date)
    
        const selectDate = date.getDate()
        const month = date.getMonth()
        const year = date.getFullYear()
        const dateKey = `${selectDate}/${month}/${year}`

        if(dateKey in dateLookUp){
            if (dateLookUp[dateKey].booked === true){
                return setErrMsg(`${dateKey} Is Booked Already`)
            }

            console.log('match')
            console.log(Date.parse(date))
            if(name === 'to' && selectedDate.from >= Date.parse(date)){
                return setErrMsg(`Your To-Date Of ${dateKey} is Not Valid`)
            }
            setSelectedDate(
               newDate
            );
            
        }else{
            setErrMsg(`${dateKey} Is Not Available`)
        }
    };
    console.log(selectedDate)
    // const handleDateChangeTo = (date) => {
    //     console.log('Date.parse(date)')
    //   setSelectedDateTo(Date.parse(date));
    // };
  



    
    return (
        <Modal isOpen={openModal} className='create-listing-modal bookingModal' 
            ariaHideApp={false}
            >
                <div className='modal-header'>
                     <h2>{year} {make} {model}</h2>
                        <span className='close-modal-btn' onClick={() => {closeModal(false)}}><h2>x</h2></span>
                </div>
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
                                        value={selectedDate.from}
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
                                        value={selectedDate.to}
                                        onChange={ (e) => { handleDateChange('to' , e) }}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                        />
                                    </Grid>
                                </MuiPickersUtilsProvider>
                            </div>
                            <div className = 'total_price'>
                                <h1>asdasda</h1>
                                <h2>500</h2>
                            </div>
                        </div>
                    </div>
 
                </div>
                <div className='create-btn' onClick = {()=> {}}>
                            <h2>Book</h2>
                </div>
        </Modal>
    )
}