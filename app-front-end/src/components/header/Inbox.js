import {React , useState ,  useEffect} from 'react'
import {MailModal} from './MailModal'
import { useSelector} from 'react-redux'
import MessageBox from '../messageBox/MessageBox'
import {changetoRead, fetchInbox} from '../../store/actions/inbox'
import {useDispatch} from 'react-redux'
import { toggleWidget } from 'react-chat-widget';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';


export default function Inbox () {
    const userInbox = useSelector((state) => state.inbox.inbox)
    const [mailCount, setMailCount] =useState(0);
    const [openMail,setOpenMail] = useState(false)
    const [messages_id,setMessages_id] = useState({})
    const [chatWidget , setChatWidget] =useState(false)
    const dispatch = useDispatch()
    console.log(messages_id)
    const closeMailHandler = () => {
        // also close chat widget  might change later to have chat persistent
        setChatWidget(false)
        toggleWidget()
        setOpenMail(false)
    }
    const openMailHandler = () => setOpenMail(true)
    

    const OpenMessageHandler = (inbox) =>{
        if (inbox.read === false){
        dispatch(changetoRead(inbox.id));
        }
        if(!chatWidget){
            setChatWidget(true)
            toggleWidget()
        }
        
    }

    const loadNotification = () => {
        let num = 0
        if(userInbox.length > 0){
            for (let i = 0; i < userInbox.inboxItems.length; i++) {
                if (userInbox.inboxItems[i].read.[userInbox._id] === false){
                    num++
                }
              }
        }
          setMailCount(num)
    }
 

    useEffect(() => {
        loadNotification()
        dispatch(fetchInbox('fetching'))
      },[mailCount]);


    return (
        <div>
            {/* <MailModal closeMailHandler= {closeMailHandler} openMail={openMail} inbox = {inboxItem} messageRead= {messageHandler}> */}
            <MailModal 
            closeMailHandler= {closeMailHandler} 
            openMail={openMail} 
            userInbox = {userInbox.inboxItems} 
            OpenMessageHandler={OpenMessageHandler}
            userInbox_id = {userInbox._id}
            setMessages_id = {setMessages_id}
            >
            </MailModal>
            <div className="notification" onClick={openMailHandler}>
                <Badge color="secondary" badgeContent={mailCount}>
                    <MailIcon style={{ color: '#d9d9d9' }}/>
                </Badge>
            </div>
            {chatWidget ? 
            <MessageBox messages_id ={messages_id} messagesData = {messages_id} userInbox_id = {userInbox._id}/>
            :
            null
            }
            
        </div>

    )
    
    }


