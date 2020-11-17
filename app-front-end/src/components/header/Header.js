import React, { useState } from 'react';
import Account from './Account';
import Inbox from './Inbox';
import LeftNav from './LeftNav';
import { Link } from 'react-router-dom';
import LoginRegister from './LoginRegister';



export default function Header() {

  /////temp switch for component
  const [logIn , setLogIn] = useState(false)
  const loginHandler = () => setLogIn(true)
  const logoutHandler = () => setLogIn(false)

  if (logIn){
    return (
      <div className="top-bar">
      <div className="bar">
        <Link to="/" className="name">
          <h1>GroundRnR</h1>
        </Link>

        
        <div className="top-icons">
          <Account  logoutHandler={logoutHandler}/>
          <Inbox />
        </div>

      </div>
      <div className="links">
        <LeftNav />
      </div>
    </div>

    )
  }

  return (
    <div className="top-bar">
    <div className="bar">
      <Link to="/" className="name">
        <h1>GroundRnR</h1>
      </Link>

      
      <div className="top-icons">
        <LoginRegister loginHandler = {loginHandler}/>
      </div>

    </div>
    <div className="links">
      <LeftNav />
    </div>
  </div>

  )
}
