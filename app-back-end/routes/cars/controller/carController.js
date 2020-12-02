const Cars = require('../models/Car');
const User = require('../../users/models/User');
const moment = require('moment')
require('dotenv').config();
const AWS = require('aws-sdk')
const { v4: uuidv4 } = require('uuid');

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
        
        const {make,model,year,vehicleClass,door,color,price,description,img} = JSON.parse(req.body.data);
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
        for (let i = dateFrom; i <= dateTo ; i+= 86400000){
            newCar.dateList.push({
                date: i,
                booked: false
            })
        }
        // AWS
        if(req.files){
            let filesKey = Object.keys(req.files)
            for (let i = 0 ; i < filesKey.length ; i++){
                let image = req.files[filesKey[i]]
                
    
                let s3 = new AWS.S3({
                    AWS_Access_Key_ID: process.env.AWS_ACCESS_KEY_ID,
                    AWS_Secret_Access_Key: process.env.AWS_SECRET_ACCESS_KEY
                })
                let bucketName = 'groundrtr'
                let keyName = `cars/${newCar._id}/${uuidv4()}_${image.name}`
                var objectParams = {
                    Bucket: bucketName,
                    Key: keyName,
                    Body: image.data,
                    ACL: 'public-read'
                };
                var uploadPromise = await s3.putObject(objectParams).promise();
                let url = `https://${bucketName}.s3.amazonaws.com/${keyName}`
                newCar.img.push(url)
            }
        }else{
            newCar.img.push('https://groundrtr.s3.amazonaws.com/default/placeholder.png')
        }
        await newCar.save()
            return res.status(200).json({
                status: 'success',
                message: 'Car Created',
                car: newCar
              });
        }
        catch(err){
            console.log(err)
            return res.status(500).json({
                status: 'error',
                message: err.message
              });
        };
    },

    uploadImage: async (req, res) => {
        let s3 = new AWS.S3({
            AWS_Access_Key_ID: process.env.AWS_ACCESS_KEY_ID,
            AWS_Secret_Access_Key: process.env.AWS_SECRET_ACCESS_KEY
        })
        console.log(req.files)
        let bucketName = 'groundrtr'
        let keyName = '1234'//req.files.imgFile.name
        var objectParams = {
            Bucket: bucketName,
            Key: keyName,
            Body: req.files.imgFile.data,
            ACL: 'public-read'
        };
        var uploadPromise = await s3.putObject(objectParams).promise();
        console.log(uploadPromise)
        res.status(200).json({
          message: 'Upload Complete',
          url: `https://${bucketName}.s3.amazonaws.com/${keyName}`
        });
      }

};