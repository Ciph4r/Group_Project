const express = require('express');
const router = express.Router();
const { register, login, fetchFavorites } = require('./controller/userController');
const { validateRegister } = require('./middleWare/userRequestValidation');
const { authenticateToken } = require('../../middleware/authToken');

router.get('/', function (req, res, next) {
  return res.status(200).send('Hello World!');
});

router.post('/register', validateRegister, register);
router.post('/login',login)
router.get('/fetch-favorites', authenticateToken, fetchFavorites);

module.exports = router;