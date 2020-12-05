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
                    message: err.message
                  });
              }
              return res.status(200).json({
                status: 'success',
                message: 'InboxItem Sent',
                inbox
              });
            });

        }
        catch(err){
            return res.status(500).json({
                status: 'error',
                message: err.message
              });
        }
    },
    sendMsg: async(req,res,next) => {
        try{    
                const currentUser = await User.findOne({_id: req.user.id})
                const senderInbox = await Inbox.findOne({owner: req.user.id})
                const receiverInbox = await Inbox.findOne({_id: req.params.id})
                const recievingUser = await User.findOne({_id: receiverInbox.owner})
                
                if(receiverInbox._id === senderInbox._id ){
                    return res.status(500).json({
                        status: 'error',
                        message: 'Cant Send A message to yourself'
                      });
                }

                //find if msg exist between users
                let existingMsg = await Message.findOne({ $or: [ {user: senderInbox._id , user_b: receiverInbox._id}, { user: receiverInbox._id , user_b: senderInbox._id} ] })
                let messageItem = {
                    timestamp: moment().format('MMMM Do YYYY, h:mm:ss a'),
                    userInbox_id: senderInbox._id,
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
                msg: saveMsg
              });
        }
        catch(err){
            return res.status(500).json({
                status: 'error',
                message: err.message
              });
        }
    },
    msgRead: async(req,res,next) => {
        try{
            const userInbox = await Inbox.findOne({owner: req.user.id})
            const messageItem = await Message.findOne({_id: req.params.id})

            //check if user is participant in this message
            if(`${userInbox._id}` === `${messageItem.user}` || `${userInbox._id}` === `${messageItem.user_b}`){
                messageItem.read[userInbox._id] = true
                console.log(userInbox._id)
                console.log(messageItem.read)
                // const savedMessage = await messageItem.save()
                return res.status(200).json({
                  status: 'success',
                  message: 'Message Read',
                  payload : {message_id : messageItem._id , inbox_id: userInbox._id}
                });
            }



        }
        catch(err){
            return res.status(500).json({
                status: 'error',
                message: err.message
              });
        }
    },

}