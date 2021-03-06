const express = require('express');
const router = express.Router();
const {allCars, singleCar, updateCar, createCar , bookCar ,review} = require('./controller/carController');
const {authenticateToken} = require('../../middleware/authToken')
const {} = require('./middleware/requestValidation');


router.get('/', allCars)
router.get('/car/:id',singleCar)
router.put('/update', authenticateToken,updateCar)
router.post('/create', authenticateToken ,createCar)
router.post('/bookCar/:id', authenticateToken ,bookCar)
router.post('/review/:id',authenticateToken,review)

module.exports = router;