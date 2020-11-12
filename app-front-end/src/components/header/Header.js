import React from 'react';
import Account from './Account';
import Inbox from './Inbox';
import LeftNav from './LeftNav';

export default function Header() {
  return (
    <div className="top-bar">
      <div className="bar">
        <h1>GroundRnR</h1>
        <div className='top-icons'>
          <Account />
          <Inbox />
        </div>
      </div>
      <div className="links">
        <LeftNav />
      </div>
    </div>
  );
}
