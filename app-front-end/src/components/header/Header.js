import React, { useState } from 'react';
import Account from './Account';
import Inbox from './Inbox';
import LeftNav from './LeftNav';
import { Link } from 'react-router-dom';
import LoginRegister from './LoginRegister';



export default function Header({logIn , loginHandler,logoutHandler}) {

  /////temp switch for component


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
