import {React , useState} from 'react'
import '../css/user.scss'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import PropTypes from 'prop-types';
import TextMaskCustom from '../helperFunctions/textMaskCuston'



TextMaskCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
  };


export default function User(){
    const [userData,setUserData] = useState({})
    const setDataHandler = (e) => {
        let newUserData = userData
        newUserData[e.name] = e.value
        setUserData({
           ...userData,newUserData
        })
    }


    return (
        <div className='content'>
            <div className='user-img'>
                <img className='img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/512px-Circle-icons-profile.svg.png' alt="Thumbnail"  />
            </div>
            <div className='user-info'>
                <div className='name-input'>
                <TextField  label="First Name" name='firstName' value= {userData.firstName} onChange={(e)=>{setDataHandler(e.target)}}/>
                <TextField  label="Last Name"  name='lastName' value= {userData.lastName} onChange={(e)=>{setDataHandler(e.target)}}/>
                </div>
                <TextField id="filled-read-only-input" name='email' label="Email" defaultValue="JOHNDOE@GOOGLE.COM" variant="filled"InputProps={{readOnly:true}}/>
                
                <FormControl>
                    <InputLabel htmlFor="formatted-text-mask-input">react-text-mask</InputLabel>
                    <Input
                    value={userData.phone}
                    onChange={(e)=>{setDataHandler(e.target)}}
                    name="phone"
                    inputComponent={TextMaskCustom}
                    />
                </FormControl>

                <TextField  label="State" value= {userData.state} name='state' onChange={(e)=>{setDataHandler(e.target)}}/>
                <TextField  type="password" label="Password" name='password' value= {userData.password} onChange={(e)=>{setDataHandler(e.target)}}/>
                <TextField  type="password" label="New Password" name='newPassword' value= {userData.newPassword} onChange={(e)=>{setDataHandler(e.target)}}/>
            </div>
            <div className ='submit-btn'>
            </div>
        </div>
    )
}