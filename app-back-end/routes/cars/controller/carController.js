const Cars = require('../models/Car');
const User = require('../../users/models/User');
const moment = require('moment')


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
        const {make,model,year,vehicleClass,door,color,price,description,img} = req.body.data;
        try{
            const user = await User.findOne({_id: req.user.id})
        let newCar = await new Cars({
            owner: user._id,
            img,
            make,
            model,
            year,
            vehicleClass,
            door,
            color,
            price,
            description
        });
        // PUSH FROM TO DATE TO INTO DATE ARRAY
        const dateFrom = Date.parse(req.body.selectedDateFrom)
        const dateTo = Date.parse(req.body.selectedDate)
        // console.log('s',dateFrom)
        // console.log('e',dateTo)
        for (let i = dateFrom; i <= dateTo ; i+= 86400000){
            newCar.dateList.push({
                date: i,
                booked: false
            })
        }
        //

        await newCar.save()
            return res.status(200).json({
                status: 'success',
                message: 'Car Created',
                car: newCar
              });
        }
        catch(err){
            return res.status(500).json({
                status: 'error',
                message: err.message
              });
        };
    },

};