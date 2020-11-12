import React from 'react'
import Header from './header/Header'
import HistoryBar from './historyBar/HistoryBar'
import '../css/layout.scss'



export default function Layout (props) {
    return (
        <div classNme='main'>
            <Header/>
            <div>
                <div className='page-item'>
                    <HistoryBar/>
                    <div className='page-content'>
                        {props.children}
                    </div> 
                </div>
            </div>

        </div>
    )
}