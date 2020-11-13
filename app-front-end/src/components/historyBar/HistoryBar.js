import {React , useState} from 'react'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


export default function HistoryBar () {
    const dummyData = [
        {
            name:'Mercades',
            img:'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iho0QqgeF4K8/v1/-1x-1.jpg'
        },
        {
            name:'Mercades',
            img:'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iho0QqgeF4K8/v1/-1x-1.jpg'
        },
        {
            name:'Mercades',
            img:'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iho0QqgeF4K8/v1/-1x-1.jpg'
        },
        {
            name:'Mercades',
            img:'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iho0QqgeF4K8/v1/-1x-1.jpg'
        }
    ]


    const [hover , setHover] = useState(false)

    const handleMouseHover = () => setHover(!hover)
      
      


    return (
        <div className= 'history-bar'>
            
            <div className= 'content' onMouseEnter={handleMouseHover} onMouseLeave={handleMouseHover}>
                <ExpandLessIcon style={{ fontSize: '90' , visibility: hover ? 'visible' : 'hidden' }} />
                <div className= 'items'>
                    {dummyData.map((data,key)=>(
                        <div className= 'box' key={key}>
                        <img src={data.img} alt="Thumbnail" />
                        <div className='info'>
                        <h2>{data.name}</h2>
                        </div >  
                        </div>
                    ))}

                    {/* <div className= 'box'>
                    <img src='https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iho0QqgeF4K8/v1/-1x-1.jpg' alt="Thumbnail" />
                    <div className='info'>
                        <h2>Mercades</h2>
                    </div>
                    </div> */}

                </div>
                <ExpandMoreIcon style={{ fontSize: '90' , visibility: hover ? 'visible' : 'hidden'}} />
            </div>
        </div>
    )
}