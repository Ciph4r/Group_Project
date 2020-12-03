const mongoose = require('mongoose')
const moment = require('moment')
const Schema = mongoose.Schema

const InboxSchema = new mongoose.Schema({
    owner:{type: Schema.Types.ObjectId , ref: 'User'},
    inboxItems: {type: Array},
    block:{type:Array},
})

module.exports = mongoose.model('Inbox' , InboxSchema)



