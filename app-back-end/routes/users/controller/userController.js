const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { comparePassword, createUser } = require('../middleWare/auth');
const { createJwtToken } = require('../middleWare/token');

module.exports = {
  register: async (req, res) => {
    try {
      let newUser = await createUser(req.body);
      let hashedPassword = await hashPassword(newUser.password);
      newUser.password = hashedPassword;
      let savedUser = await newUser.save();
      res.status(200).json({
        message: 'Successfully signed up',
      });
    } catch (error) {
      let errorMessage = await errorHandler(error);
      res.status(409).json({
        message: errorMessage,
      });
    }
  },
};
