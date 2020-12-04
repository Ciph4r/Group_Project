const mongoose = require('mongoose')
const moment = require('moment')
const Schema = mongoose.Schema
const Message = require('../models/Message')

const InboxSchema = new mongoose.Schema({
    owner:{type: Schema.Types.ObjectId , ref: 'User'},
    // inboxItems: {type: Array},
    inboxItems: [{type: Schema.Types.ObjectId , ref: 'Message'}],
    block:{type:Array},
    timestamp: {type:String , default: ()=> moment().format('MMMM Do YYYY, h:mm:ss a')},
})

module.exports = mongoose.model('Inbox' , InboxSchema)



