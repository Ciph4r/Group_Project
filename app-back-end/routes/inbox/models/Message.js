const mongoose = require('mongoose')
const moment = require('moment')
const Schema = mongoose.Schema

const MessageSchema = new mongoose.Schema({
    // sender:{type: Schema.Types.ObjectId , ref: 'Inbox'},
    // receiver:{type: Schema.Types.ObjectId , ref: 'Inbox'},
    user:{type: Schema.Types.ObjectId , ref: 'Inbox'},
    user_b:{type: Schema.Types.ObjectId , ref: 'Inbox'},
    username: {type: String},
    user_b_name: {type: String},
    read: {type: Object},
    date: {type: String},
    messages: {type:Array},
    timestamp: {type:String , default: ()=> moment().format('MMMM Do YYYY, h:mm:ss a')},
})
MessageSchema.pre('save', function (next) {
    const inbox = this;
    if (!inbox.isModified('messages')) return next();
    inbox.date = moment().format('MMMM Do YYYY, h:mm:ss a');
    // inbox.read = false;
    next()
  });

module.exports = mongoose.model('Message' , MessageSchema)