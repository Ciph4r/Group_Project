const express = require('express');
const router = express.Router();
const {allCars, singleCar, updateCar, createCar} = require('./controller/carController');
const {authenticateToken} = require('../../middleware/authToken')
const {} = require('./middleware/requestValidation')


router.get('/', allCars)
router.get('/car/:id',singleCar)
router.put('/update',updateCar)
router.post('/create',authenticateToken,createCar)

module.exports = router;