const User = require('../models/User');
const Inbox = require('../../inbox/models/Inbox');
const Car = require('../../cars/models/Car');
const jwt = require('jsonwebtoken');
const { comparePassword, createUser } = require('../middleWare/auth');
const { createJwtToken } = require('../middleWare/token');
const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  register: async (req, res) => {
    try {
      let newUser = await createUser(req.body);
      let savedUser = await newUser.save();
      let newInbox = await new Inbox();
      newInbox.owner = savedUser._id;
      let savedInbox = await newInbox.save();
      let jwtToken = await jwt.sign(
        { id: savedUser._id },
        process.env.SECRET_KEY,
        {
          expiresIn: 360000,
        }
      );
      return res.status(200).json({
        status: 'success',
        message: 'Successfully signed up',
        token: jwtToken,
        user: savedUser._id,
      });

    } catch (error) {
      return res.status(500).json({
        status: 'error',
        message: error.message,
      });

    }
  },
  login: async (req, res) => {
    const { email, password } = await req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(500).json({
          status: 'error',
          message: 'User Not Found',
        });
      }
      let comparedPassword = await comparePassword(password, user.password);
      if (comparedPassword === 409) {
        return res.status(409).json({
          status: 'error',
          message: 'Check your email and password',
        });
      }

      let jwtToken = await createJwtToken(user);
      return res.status(200).json({
        status: 'success',
        message: 'Successfully logged in',
        token: jwtToken,
        user: user._id,
        profilePic: user.profilePic,
        favorite: user.favorite,
      });
    } catch (error) {
      return res.status(500).json({
        status: 'error',
        message: error.message,
      });
    }
  },
  fetchFavorites: async (req, res) => {
    let user = await User.findOne({ _id: req.user.id });
    let cars = await Car.find({ _id: { $in: user.favorite } });


    return res.status(200).json(cars);
  },
  toggleFavorites: async (req, res) => {
    let user = await User.findOne({ _id: req.user.id });
    let carId = req.body.carId;
    let userHasFav = user.favorite.includes(carId);
    if (userHasFav) {
      let favorites = user.favorite.filter(favCarId => carId != favCarId);
      user.favorite = favorites;
    } else {
      user.favorite = user.favorite.concat(carId);
    }
    user = await user.save();
    return res.status(200).json(user.favorite);
  },
  updateUser: async (req,res) => {
    try{
      let user = await User.findOne({ _id: req.user.id });
      const {firstName,lastName,phone,email,password , newPassword} = JSON.parse(req.body.data)
      let comparedPassword = await comparePassword(password, user.password);
      if (comparedPassword === 409) {
        return res.status(409).json({
          status: 'error',
          message: 'Check your password',
        });
      }
      if(firstName) user.firstName = firstName
      if(lastName)user.lastName = lastName
      if(newPassword)user.password = newPassword
    
      if (req.files) {
        let image = req.files['images[0]'];

        let s3 = new AWS.S3({
          AWS_Access_Key_ID: process.env.AWS_ACCESS_KEY_ID,
          AWS_Secret_Access_Key: process.env.AWS_SECRET_ACCESS_KEY,
        });
        let bucketName = 'groundrtr';
        let keyName = `users/${user._id}/${uuidv4()}_${image.name}`;
        var objectParams = {
          Bucket: bucketName,
          Key: keyName,
          Body: image.data,
          ACL: 'public-read',
        };
        var uploadPromise = await s3.putObject(objectParams).promise();
        let url = `https://${bucketName}.s3.amazonaws.com/${keyName}`;
        user.profilePic = url;
      }
      let savedUser = await user.save()
      
      return res.status(200).json({
        status: 'success',
        profilePic: savedUser.profilePic,
      });
    }
    catch(err){
      console.log(err)
      return res.status(500).json({
        status: 'error',
        message: err.message,
      });
    }
  },
  getUser: async (req,res) => {
    try{
      let user = await User.findOne({ _id: req.user.id });


      return res.status(200).json({
        status: 'success',
        user,
      });
    }
    catch(err){
      return res.status(500).json({
        status: 'error',
        message: err.message,
      });
    }
  }
};
