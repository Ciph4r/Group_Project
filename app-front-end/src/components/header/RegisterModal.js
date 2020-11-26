import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'react-modal';
import '../../css/loginRegisterModal.scss';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import { setToken } from '../../store/reducer/userReducer';

export const RegisterModal = ({ openRegister, closeRegisterHandler }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const dispatch = useDispatch();

  return (
    <Modal isOpen={openRegister} className="login-modal" ariaHideApp={false}>
      <div className="modal-header">
        <h2>Inbox</h2>
        <span className="close-modal-btn" onClick={closeRegisterHandler}>
          <h2>x</h2>
        </span>
      </div>
      <div className="modal-content">
        {errMsg && <Alert severity="error">{errMsg}</Alert>}
        <TextField
          label="FirstName"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <TextField
          label="LastName"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        <hr />
        <TextField
          label="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <hr />
        <TextField
          label="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <div
        className="login-btn"
        onClick={async () => {
          const response = await fetch(`${process.env.REACT_APP_API_URL}/users/register`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firstName, lastName, email, password }),
          });
          console.log(response);
          let jsonData = await response.json();
          if (jsonData.status === 'error') {
            setErrMsg(jsonData.message);
          } else {
            dispatch(setToken({ token: jsonData.token }));
            closeRegisterHandler();
          }
        }}
      >
        <h2>Register</h2>
      </div>
    </Modal>
  );
};
