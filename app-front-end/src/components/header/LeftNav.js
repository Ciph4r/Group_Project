import React from 'react';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });

export default function LeftNav () {
    const classes = useStyles();
    const [state, setState] = React.useState({
      left: false,
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor) => (
      <div
        className={clsx(classes.list)}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        // How low you want it
        style = {{marginTop: '100px' , fontSize: '30px'}}
      >
        <List>
        <Link to="/listing">Listing</Link>
          <Divider />
          <Link to="/booking">Booking</Link>
          <Divider />
          <Link to="/favorites">Favorties</Link>
        </List>


      </div>
    );
  
    return (
      <div>
          <React.Fragment key={'left'}>
            <Button onClick={toggleDrawer('left', true)}><FormatListBulletedIcon/></Button>
            <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
              {list('left')}
            </Drawer>
          </React.Fragment>
      </div>
    );
}