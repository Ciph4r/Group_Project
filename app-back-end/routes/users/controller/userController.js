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
};
