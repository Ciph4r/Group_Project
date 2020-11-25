const Cars = require('../models/Car');
const User = require('../../users/models/User');



module.exports = {
    allCars: async(req,res,next) => {
        try{
            let cars = await Cars.find();
            return res.status(200).json({cars});
        }
        catch(err){
            return res.status(500).json({
                status: 'error',
                message: 'Internal Server Error'
              });
        }
    },
    singleCar: async(req,res,next) => {
        try{
            let car = await Cars.findById(req.params.id);
            if(car){
                return res.status(200).json({car});
            }
            return res.status(404).json({
                status: 'error',
                message: 'Car Not Found'
              });

        }
        catch(err){
            return res.status(500).json({
                status: 'error',
                message: 'Internal Server Error'
              });
        };
    },
    updateCar: async(req,res,next) => {
        const {make,model,year,vehicleClass,door,color,price,description} = req.body;
        try{
            
        }
        catch(err){

        };
    },
    createCar: async(req,res,next) => {
        const {make,model,year,vehicleClass,door,color,price,description} = req.body;
        try{
        let newCar = await new Cars({
            // owner: req.user._id,
            make,
            model,
            year,
            vehicleClass,
            door,
            color,
            price,
            description
        });
        newCar.save().then((car) => {
            return res.status(200).json({
                status: 'success',
                message: 'Car Created',
                car: {car}
              });
        });
        }
        catch(err){
            return res.status(500).json({
                status: 'error',
                message: 'Internal Server Error'
              });
        };
    },

};