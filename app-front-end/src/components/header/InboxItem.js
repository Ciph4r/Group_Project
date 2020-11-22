import React from 'react'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';






export const InboxItem = ({data,onClick} ) => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };


    
    const {img, receiver , date, messages ,read } = data

    return (
        <div className= 'inbox-item' onClick = {onClick}>
            <div className = 'info'>
                <div className= 'sender'>
                     <h2>{receiver}</h2>
                </div>
                <div className = 'time'>
                    <h2>{date}</h2>
                </div>
            </div>

            <div className={read ? 'content' : 'content read'}  >
                <img  src={img} alt="Thumbnail"  />
                <div className= 'msg-content'>
                    <h4>{messages.[messages.length-1].message.length > 30 ? messages.[messages.length -1].message.slice(0,30) + ' ...' : messages.[messages.length -1].message}</h4>
                </div>
                <div className='msg-options'>
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        <MoreHorizIcon fontSize="large"/>
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Delete</MenuItem>
                        {/* <MenuItem onClick={handleClose}>...</MenuItem>
                        <MenuItem onClick={handleClose}>...</MenuItem> */}
                    </Menu>
                            
                </div>
            </div>

        </div>
    )
}


