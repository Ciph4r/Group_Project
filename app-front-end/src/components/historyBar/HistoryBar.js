import {React , useState} from 'react'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


export default function HistoryBar () {
    const [hover , setHover] = useState(false)

    const handleMouseHover = () => setHover(!hover)
      
      


    return (
        <div className = 'history-bar'>
            
            <div className = 'content' onMouseEnter={handleMouseHover} onMouseLeave={handleMouseHover}>
                <ExpandLessIcon style={{ fontSize: '90' , visibility: hover ? 'visible' : 'hidden' }} />
                <div className= 'items'>
                    <h1>hover over me</h1>
                </div>
                <ExpandMoreIcon style={{ fontSize: '90' , visibility: hover ? 'visible' : 'hidden'}} />
            </div>
            
        </div>
    )
}