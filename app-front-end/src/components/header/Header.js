import React from 'react';
import Account from './Account';
import Inbox from './Inbox';
import LeftNav from './LeftNav';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="top-bar">
      <div className="bar">
        <Link to="/" className="name">
          <h1>GroundRnR</h1>
        </Link>
        <div className="top-icons">
          <Link to=''>
            <Account />
          </Link>
          <Inbox />
        </div>
      </div>
      <div className="links">
        <LeftNav />
      </div>
    </div>
  );
}
