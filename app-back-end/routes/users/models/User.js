const mongoose = require('mongoose');
const moment = require('moment');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    required: true,
    lowercase: true,
    default: '',
  },
  lastName: {
    type: String,
    trim: true,
    required: true,
    lowercase: true,
    default: '',
  },
  phone: {
    type: String,
    trim: true,
    default: '',
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    require: true,
    lowercase: true,
    default: '',
  },
  favorite: {
    type:Array
  },
  profilePic:{
    type: String, default:'https://groundrtr.s3.amazonaws.com/default/placeholder.png'
  },
  active:{
    type:Boolean,
    default:true
  },
  password: { type: String, min: 6, required: true },
  timestamp: {
    type: String,
    default: () => moment().format('MMMM Do YYYY, h:mm:ss a'),
  },
});

UserSchema.pre('save', function (next) {
  const user = this;

  if (!user.isModified('password')) return next();

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model('User', UserSchema);
