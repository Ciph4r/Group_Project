const Inbox = require('../models/Inbox')
const Message = require('../models/Message')
const User = require('../../users/models/User');
const moment = require('moment');

module.exports = {
    inbox: async(req,res,next) => {
        try{
            const inboxItems = await Inbox.findOne({owner: req.user.id}).
            populate('inboxItems').
            exec(function (err, inbox) {
              if (err) {
                return res.status(500).json({
                    status: 'error',
                    message: 'DataBase Error'
                  });
              }
              return res.status(200).json({
                status: 'success',
                message: 'InboxItem Sent',
                inbox
              });
              console.log(inbox);
              console.log('_______________________________')
              // prints "The author is Ian Fleming"
            });

        }
        catch(err){
            console.log(err)
            return res.status(500).json({
                status: 'error',
                message: 'Internal Server Error'
              });
        }
    },
    sendMsg: async(req,res,next) => {
        try{
            const currentUser = await User.findOne({_id: req.user.id})
            const recievingUser = await User.findOne({_id: req.params.id})
            const senderInbox = await Inbox.findOne({owner: req.user.id})
            // const senderInbox = await Inbox.findOne({owner: req.body.user})
            const receiverInbox = await Inbox.findOne({owner: req.params.id})
            //find if msg exist between users
            let existingMsg = await Message.findOne({ $or: [ {user: senderInbox._id , user_b: receiverInbox._id}, { user: receiverInbox._id , user_b: senderInbox._id} ] })
            let messageItem = {
                timestamp: moment().format('MMMM Do YYYY, h:mm:ss a'),
                name: currentUser.firstName,
                messageText: req.body.messageText
        }

            if(existingMsg){

                existingMsg.messages.push(messageItem)
                existingMsg.read = {
                    [senderInbox._id]: true, 
                    [receiverInbox._id]:false
                    }
                let saveExistingMsg = await existingMsg.save()
                return res.status(200).json({
                    status: 'success',
                    message: 'Message Sent',
                    senderInbox: senderInbox , 
                    receiverInbox: receiverInbox,
                    msg: saveExistingMsg
                  });
            }
            // if the msg doesnt exist
            let newMsg = await new Message()
            //set sender/receiver to inbox ID
            newMsg.user = senderInbox._id
            newMsg.user_b = receiverInbox._id
            newMsg.username = `${currentUser.firstName} ${currentUser.lastName}`
            newMsg.user_b_name = `${recievingUser.firstName} ${recievingUser.lastName}`
            // Msg Content
            newMsg.read = {
                [senderInbox._id]: true, 
                [receiverInbox._id]:false
                }
            // save MSG
            newMsg.messages.push(messageItem)
            const saveMsg = await newMsg.save()
            // SAVE Inbox
            senderInbox.inboxItems.push(newMsg._id)
            receiverInbox.inboxItems.push(newMsg._id)
            let saveSenderInbox = await senderInbox.save()
            let saveReceiverInbox = await receiverInbox.save()

            return res.status(200).json({
                status: 'success',
                message: 'Message Sent',
                senderInbox: saveSenderInbox , 
                receiverInbox: saveReceiverInbox,
                msg: saveMsg
              });
        }
        catch(err){
            console.log(err)
            return res.status(500).json({
                status: 'error',
                message: 'Internal Server Error'
              });
        }
    },

}