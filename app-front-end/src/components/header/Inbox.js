import {React , useState} from 'react'
import EmailIcon from '@material-ui/icons/Email';
import {MailModal} from './MailModal'




export default function Inbox () {

    const [openMail,setOpenMail] = useState(false)

    const closeMailHandler = () => setOpenMail(false)
    const openMailHandler = () => setOpenMail(true)

    return (
        <div>
            <MailModal closeMailHandler= {closeMailHandler} openMail={openMail}>

            </MailModal>
            <EmailIcon style={{ color: '#d9d9d9',cursor: 'pointer' }} onClick={openMailHandler} />
        </div>

    )
}