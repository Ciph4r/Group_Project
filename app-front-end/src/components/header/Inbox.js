import {React , useState ,  useEffect} from 'react'
import EmailIcon from '@material-ui/icons/Email';
import {MailModal} from './MailModal'


const tempData = [
    {
         name:'Dave',
         date:'11:45 PM',
         read: false,
         message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
         img: 'https://c7.alamy.com/comp/P9MYWR/man-avatar-profile-P9MYWR.jpg'

    },
    {
         name:'Jim',
         date:'11:45 PM',
         read: false,
         message: 'Hello World 2',
         img: 'https://c7.alamy.com/comp/P9MYWR/man-avatar-profile-P9MYWR.jpg'
    },
    {
         name:'Jim',
         date:'11:45 PM',
         read: true,
         message: 'Hello World 2',
         img: 'https://c7.alamy.com/comp/P9MYWR/man-avatar-profile-P9MYWR.jpg'
    },
    {
         name:'Jim',
         date:'11:45 PM',
         read: true,
         message: 'Hello World 2',
         img: 'https://c7.alamy.com/comp/P9MYWR/man-avatar-profile-P9MYWR.jpg'
    },
    {
         name:'Jim',
         date:'11:45 PM',
         read: true,
         message: 'Hello World 2',
         img: 'https://c7.alamy.com/comp/P9MYWR/man-avatar-profile-P9MYWR.jpg'
    },
    {
         name:'Jim',
         date:'11:45 PM',
         read: true,
         message: 'Hello World 2',
         img: 'https://c7.alamy.com/comp/P9MYWR/man-avatar-profile-P9MYWR.jpg'
    },

]



export default function Inbox () {
    const [mailCount, setMailCount] =useState(0);
    const [openMail,setOpenMail] = useState(false)
    const closeMailHandler = () => setOpenMail(false)
    const openMailHandler = () => setOpenMail(true)

    
    useEffect(() => {
        let num = 0
        for (let i = 0; i < tempData.length; i++) {
            if (tempData[i].read === true){
                num++
            }
          }
          setMailCount(num)
      });


    return (
        <div>
            <MailModal closeMailHandler= {closeMailHandler} openMail={openMail} tempData = {tempData}>

            </MailModal>
            <div class="notification" onClick={openMailHandler}>
                <EmailIcon style={{ color: '#d9d9d9' }} />
                 <span class="badge">{mailCount}</span>
            </div>
            {/* <EmailIcon style={{ color: '#d9d9d9',cursor: 'pointer' }} onClick={openMailHandler} /> */}
        </div>

    )
}