import React, { useState } from 'react';
import Account from './Account';
import Inbox from './Inbox';
import LeftNav from './LeftNav';
import { Link } from 'react-router-dom';
import LoginRegister from './LoginRegister';



export default function Header({logIn , loginHandler,logoutHandler}) {


  let main

  if (logIn){
    main = (    
      <React.Fragment>
          <Account  logoutHandler={logoutHandler}/>
          <Inbox />
      </React.Fragment>
      )
    }else{
      main = (
        <React.Fragment>
            <LoginRegister loginHandler = {loginHandler}/>
        </React.Fragment>
      )
    }


    return (
      <div className="top-bar">
      <div className="bar">
        <Link to="/" className="name">
          <h1>GroundRnR</h1>
        </Link>      
        <div className="top-icons">
          {main}
        </div>
      </div>
      <div className="links">
        <LeftNav />
      </div>
    </div>

    )
  }


