const express = require('express');
const router = express.Router();
const { register, login } = require('./controller/userController');
const { validateRegister } = require('./middleWare/userRequestValidation');

router.get('/', function (req, res, next) {
  return res.status(200).send('Hello World!');
});

router.post('/register', validateRegister, register);
router.post('/login',login)
module.exports = router;
