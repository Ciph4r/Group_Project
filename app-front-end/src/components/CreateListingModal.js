import {React , useEffect, useState} from 'react'
import Modal from 'react-modal'
import TextField from '@material-ui/core/TextField';
import '../css/loginRegisterModal.scss'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { useSelector, useDispatch } from 'react-redux'

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 100,
    },
    
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));


  ///////PLACEHOLDER IMAGE
  const placeholderImg = 'https://westville-nj.com/wp-content/uploads/2014/09/placeholder.png'




export const CreateListingModal = ({showCreateModal,setShowCreateModal,id}) => {
    const initialStateData={
        model:'',
        make:'',
        year:1950,
        door:2,
        vehicle:'Sedan',
        color:10,
        img:[]
    }

    const carData = useSelector((state) => state.car.cars)
    const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));
    const [data,setData] = useState({...initialStateData})
    


  
    const setDataHandler = (e) => {
        let newData = data
        newData[e.name] = e.value
        setData({
           ...data,newData
        })
    }


    const handleDateChange = (date) => {
      setSelectedDate(date);
    };



    //////////create menuitem from 1950 to current year +1
    const carYear = []
    for (let i = 1950; i <= new Date().getFullYear() +1; i++) {
    carYear.push(<MenuItem key = {i} value={i}>{i}</MenuItem>)
      }
    
      const classes = useStyles();



      useEffect(()=> {
            if(id){
            let editData = carData.find((car) =>{return car.id === id})
            setData({...editData})  
          }else{
            setData({...initialStateData})
          }
     },[id])


    return (
        <Modal isOpen={showCreateModal} className='create-listing-modal' 
        ariaHideApp={false}
        >
            <div className='modal-header'>
                    <h2>{id ? 'Edit Listing' :'Create Listing'}</h2>
                     <span className='close-modal-btn' onClick={() => {setShowCreateModal(false)}}><h2>x</h2></span>
            </div>
            <div className='modal-content'>
                <TextField  label="Maker" name='make' value={data.make} onChange={(e)=>{setDataHandler(e.target)}}/>
                <TextField  label="Model" name='model' value={data.model} onChange={(e)=>{setDataHandler(e.target)}}/>
                <hr/>
                <div className='car-option'>
                    <FormControl className={classes.formControl}>
                        <InputLabel >Year</InputLabel>
                        <Select
                            
                            className='year-select'
                            name='year'
                            id="Year"
                            value={data.year}
                            defaultValue={1950}
                            onChange={(e)=>{setDataHandler(e.target)}}
                            >
                           {carYear.reverse()}
                        </Select>
                    </FormControl>
                    
                    <FormControl className={classes.formControl}>
                        <InputLabel>Door #</InputLabel>
                        <Select
                            
                            id="Door"
                            name='door'
                            value={data.door}
                            defaultValue={2}
                            onChange={(e)=>{setDataHandler(e.target)}}
                            >
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <InputLabel>Vehicle</InputLabel>
                        <Select
                            
                            id="VehicleClass"
                            value={data.vehicle}
                            onChange={(e)=>{setDataHandler(e.target)}}
                            name='vehicleclass'
                            defaultValue={'Sedan'}
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
                            
                            id="Color"
                            value={data.color}
                            onChange={(e)=>{setDataHandler(e.target)}}
                            name='color'
                            defaultValue={10}
                            >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                   


                </div>
                <TextField
                    
                    label="Description"
                    multiline
                    rows={4}
                    defaultValue=""
                    name='description'
                    value={data.description}
                    onChange={(e)=>{setDataHandler(e.target)}}
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
                    <TextField  type="number" label="Price Per Day" value={data.price}  name='price' onChange={(e)=>{setDataHandler(e.target)}}  />
                </div>
                <div className='img-upload'>
                    <img className='img' src= {data.img.length > 0 ? data.img[0] : placeholderImg} alt="Thumbnail"  />
                    <img className='img' src= {data.img.length > 1 ? data.img[1] : placeholderImg} alt="Thumbnail"  />
                    <img className='img' src= {data.img.length > 2 ? data.img[2] : placeholderImg}  alt="Thumbnail"  />
                    <img className='img' src= {data.img.length > 3 ? data.img[3] : placeholderImg}  alt="Thumbnail"  />
                </div>
            </div>



            <div className='create-btn' onClick = {() =>{}}>
                        <h2>{id ? 'Edit' : 'Create'}</h2>
            </div>
        </Modal>
    )

}