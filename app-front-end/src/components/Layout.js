import React from 'react'
import Header from './header/Header'
import HistoryBar from './historyBar/HistoryBar'

export default function Layout (props) {
    return (
        <div>
            <Header/>
            <HistoryBar/>
            <div className={'page-item'}>
            {props.children}
            </div>
        </div>
    )
}