import React, { useState } from 'react';
import Header from './header/Header'
import HistoryBar from './historyBar/HistoryBar'
import '../css/layout.scss'



export default function Layout (props) {

    const [logIn , setLogIn] = useState(false)
    const loginHandler = () => setLogIn(true)
    const logoutHandler = () => setLogIn(false)


    
  let sideBar

  if (logIn){
    sideBar = (    
      <React.Fragment>
          <HistoryBar/>
      </React.Fragment>
      )
    }else{
        sideBar = (
        <React.Fragment>
        </React.Fragment>
      )
    }

 
        return (
            <div className='Main'>
                <Header 
                logIn={logIn}
                loginHandler={loginHandler}
                logoutHandler={logoutHandler}
                />
                    <div className='page-item'>
                        <div className='page-content'>
                            {props.children}
                        </div> 
                        {sideBar}
                    </div>
            </div>
        )
}