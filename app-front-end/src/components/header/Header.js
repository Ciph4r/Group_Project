import React, { useState } from 'react';
import Account from './Account';
import Inbox from './Inbox';
import LeftNav from './LeftNav';
import { Link } from 'react-router-dom';
import LoginRegister from './LoginRegister';
import { useSelector } from 'react-redux';

export default function Header({ loginHandler, logoutHandler }) {
  const token = useSelector(state => state.user.token);

  let main;

  if (token) {
    main = (
      <React.Fragment>
        <Account logoutHandler={logoutHandler} />
        <Inbox />
      </React.Fragment>
    );
  } else {
    main = (
      <React.Fragment>
        <LoginRegister loginHandler={loginHandler} />
      </React.Fragment>
    );
  }

  return (
    <div className="top-bar">
      <div className="bar">
        <Link to="/" className="logo">
          <img
            className="img"
            src="https://www.freelogoservices.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6kifGErhZOmBrNwXs1M3EMoAJtliAogfRt...fU7PExevg9C3ktKMcs8"
            alt="LOGO"
          />
        </Link>
        <div className="top-icons">{main}</div>
      </div>
      <div className="links">
        <LeftNav />
      </div>
    </div>
  );
}
