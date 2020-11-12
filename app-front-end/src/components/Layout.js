import React from 'react'
import Header from './header/Header'
import HistoryBar from './historyBar/HistoryBar'

export default function Layout (props) {
    return (
        <div>
            <Header/>
            <div>
                <div className={'page-item'}>
                    <HistoryBar/>
                    <div className={'page-content'}>
                        {props.children}
                    </div> 
                </div>
            </div>

        </div>
    )
}