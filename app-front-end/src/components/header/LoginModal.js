import {React , useState} from 'react'
import { useDispatch } from 'react-redux';
import Modal from 'react-modal'
import '../../css/loginRegisterModal.scss'
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import { setToken } from '../../store/reducer/userReducer';


export const LoginModal = ({openLogin , closeLoginHandler , loginHandler}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const dispatch = useDispatch();

    const handleLogin = async () => {
        // validated on client side if field are filled
    if(!email||!password){
        return setErrMsg('All field must be filled')
      }
      // send data to backend
      const response = await fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password }),
      });
      // console.log(response);
      let jsonData = await response.json();
      //place error in  message
      if (jsonData.status === 'error') {
        setErrMsg(jsonData.message);
      } else {
        // set token and auto login 
        console.log(jsonData)
        dispatch(setToken({ token: jsonData.token, user_id: jsonData.user }));
        closeLoginHandler();
      }
    }
    return (
        <Modal isOpen={openLogin} className='login-modal' 
        ariaHideApp={false}
        >
            <div className='modal-header'>
                     <h2>Login</h2>
                     <span className='close-modal-btn' onClick={closeLoginHandler}><h2>x</h2></span>
            </div>
            <div className='modal-content'>
            {errMsg && <Alert severity="error">{errMsg}</Alert>}
                <TextField
                    label="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <hr/>
                <TextField
                    label="Password"
                    value={password}
                    type = 'password'
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <div className='login-btn' onClick = {handleLogin}>
                <h2>Login</h2>
            </div>
        </Modal>
    )

}
