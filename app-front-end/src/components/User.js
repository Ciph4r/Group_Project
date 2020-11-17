import {React , useState} from 'react'
import '../css/user.scss'
import TextField from '@material-ui/core/TextField';



export default function User(){

    const [firstName , setFirstName] = useState('')
    const [lastName , setLastName] = useState('')
    const [password , setPasswordName] = useState('')
    const [newPassword , setNewPasswordName] = useState('')


    return (
        <div className='content'>
            <div className='user-img'>
                <img className='img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/512px-Circle-icons-profile.svg.png' alt="Thumbnail"  />
            </div>
            <div className='user-info'>
                <div className='name-input'>
                <TextField id="standard-basic" label="First Name" value= {firstName} onChange={(e) => setFirstName(e.target.value)}/>
                <TextField id="standard-basic" label="Last Name"  value= {lastName} onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <TextField id="filled-read-only-input" label="Email" defaultValue="JOHNDOE@GOOGLE.COM" variant="filled"InputProps={{readOnly:true}}/>
                <TextField id="standard-basic" type="number" label="Phone #" />
                <TextField id="standard-basic" label="State" />
                <TextField id="standard-basic" type="password" label="Password" value= {password} onChange={(e) => setPasswordName(e.target.value)}/>
                <TextField id="standard-basic" type="password" label="New Password" value= {newPassword} onChange={(e) => setNewPasswordName(e.target.value)}/>
            </div>
            <div className ='submit-btn'>


            </div>
        </div>
    )
}