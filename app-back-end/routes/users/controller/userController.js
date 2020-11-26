const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { comparePassword, createUser } = require('../middleWare/auth');
const { createJwtToken } = require('../middleWare/token');

module.exports = {
  register: async (req, res) => {
    try {
      let newUser = await createUser(req.body);
      let savedUser = await newUser.save();
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
      });
      // res.status(200).json({
      //   message: 'Successfully signed up',
      //   token: jwtToken,
      // });
    } catch (error) {
      return res.status(500).json({
        status: 'error',
        message: error.message
      });
      // let errorMessage =
      //   error.code == 11000 ? 'Email Already Exist!' : error.message;

      // res.status(409).json({
      //   message: errorMessage,
      // });
    }
  },
  login: async (req, res) => {
    const {email , password} = await req.body
    try {
      let user = await User.findOne({email})
      if (!user) {
        return res.status(500).json({
          status: 'error',
          message: 'User Not Found'
        });
      }
      let comparedPassword = await comparePassword(
        password,
        user.password
      );
      if (comparedPassword === 409) {
        return res.status(409).json({
          status: 'error',
          message: 'Check your email and password'
        });
      }

      let jwtToken = await createJwtToken(user);
      return res.status(200).json({
        status: 'success',
        message: 'Successfully logged in',
        token: jwtToken,
      });
    } catch (error) {
      return res.status(500).json({
        status: 'error',
        message: error.message
      });
    }
  },
};
