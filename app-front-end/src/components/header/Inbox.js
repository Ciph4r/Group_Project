import {React , useState ,  useEffect} from 'react'
import {MailModal} from './MailModal'
import { useSelector} from 'react-redux'
import MessageBox from '../messageBox/MessageBox'
import {changetoRead} from '../../store/actions/inbox'
import {useDispatch} from 'react-redux'
import { toggleWidget } from 'react-chat-widget';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';


export default function Inbox () {
    const inboxItem = useSelector((state) => state.inbox)
    const [mailCount, setMailCount] =useState(0);
    const [openMail,setOpenMail] = useState(false)
    const closeMailHandler = () => setOpenMail(false)
    const openMailHandler = () => setOpenMail(true)
    const dispatch = useDispatch()

    const OpenMessageHandler = (inbox) =>{
        if (inbox.read === false){
        dispatch(changetoRead(inbox.id));
        }
        toggleWidget()
    }

    const loadNotification = () => {
        let num = 0
        for (let i = 0; i < inboxItem.length; i++) {
            if (inboxItem[i].read === false){
                num++
            }
          }
          setMailCount(num)
    }
    
    useEffect(() => {
        loadNotification()
      });


    return (
        <div>
            {/* <MailModal closeMailHandler= {closeMailHandler} openMail={openMail} inbox = {inboxItem} messageRead= {messageHandler}> */}
            <MailModal closeMailHandler= {closeMailHandler} openMail={openMail} inbox = {inboxItem} OpenMessageHandler={OpenMessageHandler}>
            </MailModal>
            <div className="notification" onClick={openMailHandler}>
                <Badge color="secondary" badgeContent={mailCount}>
                    <MailIcon style={{ color: '#d9d9d9' }}/>
                </Badge>
            </div>
            <MessageBox/>
        </div>

    )
    
    }


