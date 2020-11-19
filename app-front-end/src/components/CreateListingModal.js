import {React , useState} from 'react'
import Modal from 'react-modal'
import TextField from '@material-ui/core/TextField';
import '../css/loginRegisterModal.scss'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
  import DateFnsUtils from '@date-io/date-fns';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 100,
    },
    
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));


export const CreateListingModal = ({showCreateModal,setShowCreateModal}) => {

    
    const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };



    //////////create menuitem from 1950 to current year +1
    const carYear = []
    for (let i = 1950; i <= new Date().getFullYear() +1; i++) {
    carYear.push(<MenuItem value={i}>{i}</MenuItem>)
      }



    const classes = useStyles();

    return (
        <Modal isOpen={showCreateModal} className='create-listing-modal' 
        ariaHideApp={false}
        >
            <div className='modal-header'>
                     <h2>Create Listing</h2>
                     <span className='close-modal-btn' onClick={() => {setShowCreateModal(false)}}><h2>x</h2></span>
            </div>
            <div className='modal-content'>
                <TextField id="standard-basic" label="Maker" />
                <TextField id="standard-basic" label="Model" />
                <hr/>
                <div className='car-option'>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Year</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            className='year-select'
                            id="year-select"
                            value={1}
                            onChange={()=>{}}
                            >
                           {carYear.reverse()}
                        </Select>
                    </FormControl>
                    
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Door #</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={1}
                            onChange={()=>{}}
                            >
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Vehicle Class</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={1}
                            onChange={()=>{}}
                            >
                            <MenuItem value={'Sedan'}>Sedan</MenuItem>
                            <MenuItem value={'Truck'}>Truck</MenuItem>
                            <MenuItem value={'SUV'}>SUV</MenuItem>
                            <MenuItem value={'Van'}>Van</MenuItem>
                            <MenuItem value={'Roaster'}>Roaster</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Color</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={1}
                            onChange={()=>{}}
                            >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                   


                </div>
                <TextField
                    id="standard-multiline-static"
                    label="Description"
                    multiline
                    rows={4}
                    defaultValue=""
                />
                     
                <div className='calender'>
                    <div className='calender-header'>
                        <h3>Availability</h3>
                    </div>
                    <div className='calender-content'>
                        <MuiPickersUtilsProvider className='calender-option' utils={DateFnsUtils}>
                            <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="From"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            />
                        </MuiPickersUtilsProvider>
                        <MuiPickersUtilsProvider className='calender-option' utils={DateFnsUtils}>
                            <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="To"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                </div>

                <div className='price-input'>
                    <TextField id="standard-basic" type="number" label="Price Per Day" />
                </div>
                <div className='img-upload'>
                <img className='img' src='https://westville-nj.com/wp-content/uploads/2014/09/placeholder.png' alt="Thumbnail"  />
                <img className='img' src='https://westville-nj.com/wp-content/uploads/2014/09/placeholder.png' alt="Thumbnail"  />
                <img className='img' src='https://westville-nj.com/wp-content/uploads/2014/09/placeholder.png' alt="Thumbnail"  />
                <img className='img' src='https://westville-nj.com/wp-content/uploads/2014/09/placeholder.png' alt="Thumbnail"  />

                </div>
            </div>



            <div className='create-btn' onClick = {() =>{}}>
                <h2>Create</h2>
            </div>
        </Modal>
    )

}