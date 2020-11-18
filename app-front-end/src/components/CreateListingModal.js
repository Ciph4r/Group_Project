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




const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

export const CreateListingModal = ({showCreateModal}) => {
    const classes = useStyles();



    return (
        <Modal isOpen={showCreateModal} className='create-listing-modal' 
        ariaHideApp={false}
        >
            <div className='modal-header'>
                     <h2>Create Listing</h2>
                     <span className='close-modal-btn' onClick={() => {}}><h2>x</h2></span>
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
                            id="demo-simple-select"
                            value={1}
                            onChange={()=>{}}
                            >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Year</InputLabel>
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

                        <InputLabel id="demo-simple-select-label">Door #</InputLabel>
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

                        <InputLabel id="demo-simple-select-label">Size</InputLabel>
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
                   


                </div>
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