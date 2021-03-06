import {React , useEffect, useState} from 'react';
import Modal from 'react-modal';
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
import { useSelector, useDispatch } from 'react-redux';
import {createCar,updateCar} from '../store/actions/cars';
import ImageUploading from 'react-images-uploading';
import { compressImageFile } from 'frontend-image-compress';
import Alert from '@material-ui/lab/Alert';
import {createListingValidation} from '../helperFunctions/inputValidation';
import {initialStateData, initialImageState} from '../initalState/createListing';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 100,
    },
    
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

export const CreateListingModal = ({showCreateModal,setShowCreateModal,id}) => {
    const today = Date.now()
    const carData = useSelector((state) => state.car.cars)
    const [selectedDate, setSelectedDate] = useState(today);
    const [selectedDateFrom, setSelectedDateFrom] = useState(today);
    const [data,setData] = useState({...initialStateData});
    const [images, setImages] = useState([...initialImageState]);
    const maxNumber = 4;
    const [errMsg, setErrMsg] = useState('');
    const dispatch = useDispatch();

    const setDataHandler = (e) => {
        let newData = data
        newData[e.name] = e.value
        setData({
           ...data,...newData
        });
    };

    const onChange = async (imageList, addUpdateIndex) => {
        // data for compression'
        const oldImageList = [...imageList]
        const file = oldImageList[addUpdateIndex].file;
        const compressedFile = await compressImageFile(file,.1)
        oldImageList[addUpdateIndex].file = compressedFile
        // if (oldImageList.length <4){
        //     oldImageList.push({data_url: "https://westville-nj.com/wp-content/uploads/2014/09/placeholder.png", name:'placeholder', file: File})
        // }
        setImages(oldImageList);
      };

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
    
    const handleDateFromChange = (date) => {
        setSelectedDateFrom(date);
      };
    const handleSendCarData = async () => {
            let validation = createListingValidation(data ,selectedDateFrom,selectedDate)
            if(validation === ''){
                setErrMsg('');
                const formData = new FormData();
                formData.append(
                    'data',
                    JSON.stringify(data)
                )
                for (let i = 0; i < images.length; i++){
                    if(images[i].file !== null){
                        formData.append(
                            `images[${i}]`, 
                            images[i].file,
                            )
                    }
                }
                if (!id){
                    // send data for create
                    formData.append(
                        'selectedDateFrom',
                        selectedDateFrom
                    )
                    formData.append(
                        'selectedDate',
                         selectedDate
                        )
                    dispatch(createCar({data ,selectedDateFrom ,selectedDate,formData}))
                    setImages(initialImageState)
                    setData(initialStateData)
                    setSelectedDate(today)
                    setSelectedDateFrom(today)
                    setShowCreateModal(false)
                }else{
                    // send data for edit
                    dispatch(updateCar({formData}))
                    setImages(initialImageState)
                    setSelectedDate(today)
                    setSelectedDateFrom(today)
                    setShowCreateModal(false)
                }
            }else{
                setErrMsg(validation)
            }

    }

    //////////create menuitem from 1950 to current year +1
    const carYear = []
    for (let i = 1950; i <= new Date().getFullYear() +1; i++) {
    carYear.push(<MenuItem key = {i+1} value={i}>{i}</MenuItem>)
      }
    carYear.push(<MenuItem key = {0} value={'----'}>{'----'}</MenuItem>)
    const classes = useStyles();

  

      useEffect(()=> {
            if(id){
            let editData = carData.find((car) =>{return car._id === id})
            setData({...editData})
              let imageData =[]
              for (let i = 0 ; i< 4 ; i++){
                  if(editData.img[i]){
                      imageData.push({data_url: editData.img[i], name:`user_Image_${[i]}` , file: null})
                  }else{
                    imageData.push({data_url: "https://westville-nj.com/wp-content/uploads/2014/09/placeholder.png", name:'placeholder',file: null})
                  }
                  
              }
              setImages(imageData)
          }else{
            setData({...initialStateData})
          }
          // eslint-disable-next-line react-hooks/exhaustive-deps
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
            {errMsg && <Alert className ='error' severity="error">{errMsg}</Alert>}
                <div className="make-model">
                <TextField  label="Make" name='make' value={data.make} onChange={(e)=>{setDataHandler(e.target)}}/>
                <TextField  label="Model" name='model' value={data.model} onChange={(e)=>{setDataHandler(e.target)}}/>
                </div>
                <div className='car-option'>
                    <FormControl className={classes.formControl}>
                        <InputLabel >Year</InputLabel>
                        <Select
                            className='year-select'
                            name='year'
                            id="Year"
                            value={data.year}                           
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
                            onChange={(e)=>{setDataHandler(e.target)}}
                            >
                            <MenuItem value={'----'}>----</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl className={classes.formControl}>
                        <InputLabel>Vehicle</InputLabel>
                        <Select
                            id="VehicleClass"
                            value={data.vehicleClass}
                            onChange={(e)=>{setDataHandler(e.target)}}
                            name='vehicleClass'                        
                            >
                            <MenuItem value={'----'}>----</MenuItem>
                            <MenuItem value={'sedan'}>Sedan</MenuItem>
                            <MenuItem value={'truck'}>Truck</MenuItem>
                            <MenuItem value={'suv'}>SUV</MenuItem>
                            <MenuItem value={'van'}>Van</MenuItem>
                            <MenuItem value={'roaster'}>Roaster</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField  className ='color' style={{marginTop:'8px'}} label="Color" name='color' value={data.color} onChange={(e)=>{setDataHandler(e.target)}}/>

                </div>
                <TextField
                    label="Description"
                    multiline
                    rows={3}
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
                            name='dateFrom'
                            label="From"
                            value={selectedDateFrom}
                            onChange={handleDateFromChange}
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
                    <div className="dollar">&#36;</div><TextField  type="number" label="Price Per Day" value={data.price}  name='price' onChange={(e)=>{setDataHandler(e.target)}}  />
                </div>
                <div className='img-upload'>
                <ImageUploading
                            multiple
                            value={images}
                            onChange={onChange}
                            maxNumber={maxNumber}
                            dataURLKey="data_url"
                        >
                            {({
                            imageList,
                            onImageUpload,
                            onImageRemoveAll,
                            onImageUpdate,
                            onImageRemove,
                            isDragging,
                            dragProps,
                            }) => (
                            <div className="upload__image-wrapper">
                                {imageList.map((image, index) => (
                                <div key={index} className="image-item">
                                    <img src={image['data_url']} alt="" />
                                    <div className="image-item__btn-wrapper">
                                    <button onClick={() => onImageUpdate(index)}>Update</button>
                                    {/* <button onClick={() => onImageRemove(index)}>Remove</button> */}
                                    </div>
                                </div>
                                ))}
                            </div>
                            )}
                </ImageUploading>                
                </div>
            </div>
            <div className='create-btn' onClick = {()=> {handleSendCarData()}}>
                        <h2>{id ? 'Edit' : 'Create'}</h2>
            </div>
        </Modal>
    )

};

