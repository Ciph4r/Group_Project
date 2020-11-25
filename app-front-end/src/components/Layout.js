import React, { useState } from 'react';
import Header from './header/Header'
import HistoryBar from './historyBar/HistoryBar'
import '../css/layout.scss'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function Layout (props) {
    const [logIn , setLogIn] = useState(false)
    const loginHandler = () => setLogIn(true)
    const [sidebarToggle,setSidebarToggle] =useState(false)
 
    
///////////////////// side bar arrow switch
    let sideBar
    let arrowToggle
  if (sidebarToggle){
    sideBar = (    
      <React.Fragment>
          <HistoryBar/>
      </React.Fragment>
      )
    }else{
        sideBar = (
        <React.Fragment>
            <div>
            </div>
        </React.Fragment>
      )
        }
////////////////////////
 
        return (
            <div className='Main'>
                <Header 
                loginHandler={loginHandler}

                />
                    <div className='page-item'>
                        <div className='page-content'>
                            {props.children}
                            <div className='sidebar-toggle'>
                                {sidebarToggle ? <ArrowForwardIosIcon className='arrow' onClick={() => setSidebarToggle(false)}/> :<ArrowBackIosIcon className='arrow' onClick={() => setSidebarToggle(true)}/>}
                            </div>
                        </div> 
                        {sideBar}
                    </div>
            </div>
        )
}