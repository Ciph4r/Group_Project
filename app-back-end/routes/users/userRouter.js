const express = require('express');
const router = express.Router();
const { register, login, fetchFavorites, toggleFavorites, getUser, updateUser } = require('./controller/userController');
const { validateRegister } = require('./middleWare/userRequestValidation');
const { authenticateToken } = require('../../middleware/authToken');



router.get('/' , authenticateToken, getUser)
router.post('/register', validateRegister, register);
router.post('/login',login)
router.post('/toggle-favorites', authenticateToken, toggleFavorites);
router.get('/fetch-favorites', authenticateToken, fetchFavorites);
router.post('/update' , authenticateToken , updateUser)
module.exports = router;