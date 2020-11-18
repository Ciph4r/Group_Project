import React, { useState,useEffect } from 'react';
import Header from './header/Header'
import HistoryBar from './historyBar/HistoryBar'
import '../css/layout.scss'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function Layout (props) {
    const [logIn , setLogIn] = useState(false)
    const loginHandler = () => setLogIn(true)
    const logoutHandler = () => setLogIn(false)
    const [sidebarToggle,setSidebarToggle]=useState(false)
    

    let sideBar
    let arrowToggle
    


  if (sidebarToggle){
    sideBar = (    
      <React.Fragment>
          <HistoryBar/>
      </React.Fragment>
      )
    //   arrowToggle = (    
    //     <React.Fragment>
    //           <ArrowForwardIosIcon onClick={(handleSidebarToggle)}/>
    //     </React.Fragment>
    //   )
    }else{
        sideBar = (
        <React.Fragment>
            <div>
            </div>
        </React.Fragment>
      )
    //   arrowToggle = (
    //     <React.Fragment>
    //         <ArrowBackIosIcon onClick={(handleSidebarToggle)}/>
    //     </React.Fragment>
    //   )
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
                            {/* <ArrowForwardIosIcon onClick={() => console.log('gg')}/> */}
                            <div className='sidebar-toggle'>
                                {sidebarToggle ? <ArrowForwardIosIcon onClick={() => setSidebarToggle(false)}/> :<ArrowBackIosIcon onClick={() => setSidebarToggle(true)}/>}
                            </div>
                        </div> 
                        {sideBar}
                    </div>
            </div>
        )
}