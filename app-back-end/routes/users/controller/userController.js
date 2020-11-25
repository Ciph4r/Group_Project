const User = require('../models/User');
const bcrypt = require('bcryptjs');
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
      res.status(200).json({
        message: 'Successfully signed up',
        token: jwtToken,
      });
    } catch (error) {
      let errorMessage =
        error.code == 11000 ? 'Email Already Exist!' : error.message;

      res.status(409).json({
        message: errorMessage,
      });
    }
  },
  login: async (req, res) => {
    try {
      let foundUser = await findOneUser(req.body.email);

      if (foundUser === 404) {
        throw {
          status: 500,
          message: 'User not found, please sign up',
        };
      }
      let comparedPassword = await comparePassword(
        req.body.password,
        foundUser.password
      );
      if (comparedPassword === 409) {
        throw {
          status: 409,
          message: 'Check your email and password',
        };
      }

      let jwtToken = await createJwtToken(foundUser);
      res.status(200).json({
        token: jwtToken,
      });
    } catch (error) {
      res.status(error.status).json({
        message: error.message,
      });
    }
  },
};
