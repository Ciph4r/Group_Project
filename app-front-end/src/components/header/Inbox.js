import {React , useState ,  useEffect} from 'react'
import {MailModal} from './MailModal'
import { useSelector} from 'react-redux'
import MessageBox from '../messageBox/MessageBox'
import {changetoRead, fetchInbox, setToRead} from '../../store/actions/inbox'
import {useDispatch} from 'react-redux'
import { toggleWidget } from 'react-chat-widget';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';


export default function Inbox () {
    const userInbox = useSelector((state) => state.inbox.inbox)
    const [mailCount, setMailCount] =useState(0);
    const [openInbox,setOpenInbox] = useState(false)
    const [messages_id,setMessages_id] = useState({})
    const [chatWidget , setChatWidget] =useState(false)
    const dispatch = useDispatch()
    const closeInboxHandler = () => {
        // also close chat widget  might change later to have chat persistent
        setChatWidget(false)
        toggleWidget()
        setOpenInbox(false)
    }
    const openInboxHandler = () => setOpenInbox(true)
    // const setMessages_idHandler = (id) => setMessages_id(id)

    const OpenMessageHandler = (message) =>{
        if (!message.read[userInbox._id]){
            setMailCount(mailCount-1)
            setMessages_id(message._id)
            dispatch(setToRead(message._id))
        }
        if(!chatWidget){
            setChatWidget(true)
            toggleWidget()
        }
        setMessages_id(message._id)
    }
    const loadNotification = () => {
        let num = 0
        if(userInbox.inboxItems.length > 0){
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
        dispatch(fetchInbox())
      },[]);


    return (
        <div>
            {/* <MailModal closeMailHandler= {closeMailHandler} openMail={openMail} inbox = {inboxItem} messageRead= {messageHandler}> */}
            <MailModal 
            closeInboxHandler= {closeInboxHandler} 
            openInbox={openInbox} 
            userInbox = {userInbox.inboxItems} 
            OpenMessageHandler={OpenMessageHandler}
            userInbox_id = {userInbox._id}
            // setMessages_id = {setMessages_id}
            >
            </MailModal>
            <div className="notification" onClick={openInboxHandler}>
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


