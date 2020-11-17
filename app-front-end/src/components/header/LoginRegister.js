import React, { useState } from 'react';
import {LoginModal} from './LoginModal'
import {RegisterModal} from './RegisterModal'


export default function LoginRegister({loginHandler}) {
    const [openLogin,setOpenLogin] = useState(false)
    const closeLoginHandler = () => setOpenLogin(false)
    const openLoginHandler = () => setOpenLogin(true)

    const [openRegister,setOpenRegister] = useState(false)
    const closeRegisterHandler = () => setOpenRegister(false)
    const openRegisterHandler = () => setOpenRegister(true)

    return (
        <div className = 'login-register'>
            <LoginModal closeLoginHandler = {closeLoginHandler} openLogin ={openLogin} loginHandler= {loginHandler}/>
            <button
            onClick={openLoginHandler}
            class="btn"
            >Login</button>
            <RegisterModal closeRegisterHandler = {closeRegisterHandler} openRegister ={openRegister}/>
            <button 
            class="btn"
            onClick={openRegisterHandler}
            >Register</button>
        </div>
    )

}
