import React from 'react'
import Account from './Account'
import Inbox from './Inbox'
import LeftNav from './LeftNav'


export default function Header () {
    return (
        <div>
            <LeftNav/>
            <Account/>
            <Inbox/>
        </div>
    )
}