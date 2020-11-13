import React from 'react'
import Header from './header/Header'
import HistoryBar from './historyBar/HistoryBar'
import '../css/layout.scss'



export default function Layout (props) {
    return (
        <div className='Main'>
            <Header/>
                <div className='page-item'>
                    <div className='page-content'>
                        {props.children}
                    </div> 
                    <hr/>
                    <HistoryBar/>
                </div>
        </div>
    )
}