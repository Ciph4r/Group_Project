import React from 'react'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';






export const InboxItem = ({data, userInbox_id ,onClick} ) => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    
    // const {img, receiver , date, messages ,read } = data
    const {timestamp , user , user_b, username, user_b_name ,messages ,date ,read} = data
    
    let sender = ""
    if (user !== userInbox_id){
        sender = username
    }else{
        sender = user_b_name
    }

    ///sender img
    const img = 'https://static.scientificamerican.com/sciam/cache/file/92E141F8-36E4-4331-BB2EE42AC8674DD3_source.jpg'


    
    return (
        <div className= 'inbox-item' onClick = {onClick}>
            <div className = 'info'>
                <div className= 'sender'>
                     <h3>{sender.split(' ')[0][0].toUpperCase()+sender.split(' ')[0].slice(1,sender.length) +' '+sender.split(' ')[1][0].toUpperCase()+sender.split(' ')[1].slice(1,sender.length) }</h3>
                </div>
                <div className = 'time'>
                    <h4>{date}</h4>
                </div>
            </div>

            <div className={!read.[userInbox_id] ? 'content' : 'content read'}  >
                <img  src={img} alt="Thumbnail"  />
                <div className= 'msg-content'>
                    <h4>{messages.[messages.length-1].messageText.length > 30 ? messages.[messages.length -1].messageText.slice(0,30) + ' ...' : messages.[messages.length -1].messageText}</h4>
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
                        <MenuItem onClick={handleClose}>...</MenuItem>
                        <MenuItem onClick={handleClose}>...</MenuItem>
                         </Menu>
                            
                </div>
            </div>

        </div>
    )
}


