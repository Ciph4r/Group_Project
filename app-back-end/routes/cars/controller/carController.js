const Cars = require('../models/Car');
const User = require('../../users/models/User');
const moment = require('moment');
require('dotenv').config();
const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  allCars: async (req, res, next) => {
    try {
      // filter and search querys: //
      let name = req.query.name;
      let size = req.query.size;
      let priceLT = req.query.priceLT;
      let priceGT = req.query.priceGT;

      let query = {};

      if (name) {
        query.$text = { $search: name };
      }
      if (size) {
        query.vehicleClass = { $eq: size };
      }
      if (priceLT && priceGT) {
        query.price = { $lte: priceLT, $gte: priceGT };
      } else {
        if (priceLT) {
          query.price = { $lte: priceLT };
        }
        if (priceGT) {
          query.price = { $gte: priceGT };
        }
      }

      let cars = await Cars.find(query);

      return res.status(200).json({ cars });
    } catch (err) {
      return res.status(500).json({
        status: 'error',
        message: err.message,
      });
    }
  },
  singleCar: async (req, res, next) => {
    try {
      let car = await Cars.findById(req.params.id);
      if (car) {
        return res.status(200).json({ car });
      }
      return res.status(404).json({
        status: 'error',
        message: 'Car Not Found',
      });
    } catch (err) {
      return res.status(500).json({
        status: 'error',
        message: err.message,
      });
    }
  },
  updateCar: async (req, res, next) => {
    const {
      make,
      model,
      year,
      vehicleClass,
      door,
      color,
      price,
      description,
      img,
      _id,
    } = JSON.parse(req.body.data);
    try {
      let car = await Cars.updateOne(
        { _id },
        { make, model, year, vehicleClass, door, color, price, description }
      );
      let car2 = await Cars.findById(_id);
      if (req.files) {
        let filesKey = Object.keys(req.files);
        let replaceImg = [];
        for (let i = 0; i < filesKey.length; i++) {
          replaceImg.push(filesKey[i].charAt(7));
        }
        for (let i = 0; i < filesKey.length; i++) {
          let image = req.files[filesKey[i]];

          let s3 = new AWS.S3({
            AWS_Access_Key_ID: process.env.AWS_ACCESS_KEY_ID,
            AWS_Secret_Access_Key: process.env.AWS_SECRET_ACCESS_KEY,
          });
          let bucketName = 'groundrtr';
          let keyName = `cars/${car2._id}/${uuidv4()}_${image.name}`;
          var objectParams = {
            Bucket: bucketName,
            Key: keyName,
            Body: image.data,
            ACL: 'public-read',
          };
          var uploadPromise = await s3.putObject(objectParams).promise();
          let url = `https://${bucketName}.s3.amazonaws.com/${keyName}`;
          car2.img[replaceImg[i]] = url;
        }
      }
      await car2.save();
      return res.status(200).json({
        status: 'success',
        message: 'Car been updated',
        car: car2,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        status: 'error',
        message: err.message,
      });
    }
  },
  createCar: async (req, res, next) => {
    const {
      make,
      model,
      year,
      vehicleClass,
      door,
      color,
      price,
      description,
      img,
    } = JSON.parse(req.body.data);
    try {
      const user = await User.findOne({ _id: req.user.id });
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
        description,
      });
      // PUSH FROM TO DATE TO INTO DATE ARRAY

      const dateFrom = Date.parse(req.body.selectedDateFrom);
      const dateTo = Date.parse(req.body.selectedDate);
      for (let i = dateFrom; i <= dateTo; i += 86400000) {
        newCar.dateList.push({
          date: i,
          booked: false,
        });
      
          let listingdate = new Date(i)
          const dateKey = `${listingdate.getDate()}/${listingdate.getMonth()}/${listingdate.getFullYear()}`
          newCar.dateLookUp[dateKey] = {
            date: i,
            booked: false,
          }
      }

          
      // AWS
      if (req.files) {
        let filesKey = Object.keys(req.files);
        for (let i = 0; i < filesKey.length; i++) {
          let image = req.files[filesKey[i]];

          let s3 = new AWS.S3({
            AWS_Access_Key_ID: process.env.AWS_ACCESS_KEY_ID,
            AWS_Secret_Access_Key: process.env.AWS_SECRET_ACCESS_KEY,
          });
          let bucketName = 'groundrtr';
          let keyName = `cars/${newCar._id}/${uuidv4()}_${image.name}`;
          var objectParams = {
            Bucket: bucketName,
            Key: keyName,
            Body: image.data,
            ACL: 'public-read',
          };
          var uploadPromise = await s3.putObject(objectParams).promise();
          let url = `https://${bucketName}.s3.amazonaws.com/${keyName}`;
          newCar.img.push(url);
        }
        for (let i = filesKey.length; i < 4; i++) {
          newCar.img.push(
            'https://groundrtr.s3.amazonaws.com/default/placeholder.png'
          );
        }
      } else {
        for (let i = 0; i < 4; i++) {
          newCar.img.push(
            'https://groundrtr.s3.amazonaws.com/default/placeholder.png'
          );
        }
      }
      await newCar.save();
      return res.status(200).json({
        status: 'success',
        message: 'Car Created',
        car: newCar,
      });
    } catch (err) {
      console.log(err)
      return res.status(500).json({
        status: 'error',
        message: err.message,
      });
    }
  },

  uploadImage: async (req, res) => {
    let s3 = new AWS.S3({
      AWS_Access_Key_ID: process.env.AWS_ACCESS_KEY_ID,
      AWS_Secret_Access_Key: process.env.AWS_SECRET_ACCESS_KEY,
    });
    console.log(req.files);
    let bucketName = 'groundrtr';
    let keyName = '1234'; //req.files.imgFile.name
    var objectParams = {
      Bucket: bucketName,
      Key: keyName,
      Body: req.files.imgFile.data,
      ACL: 'public-read',
    };
    var uploadPromise = await s3.putObject(objectParams).promise();
    console.log(uploadPromise);
    res.status(200).json({
      message: 'Upload Complete',
      url: `https://${bucketName}.s3.amazonaws.com/${keyName}`,
    });
  },
  bookCar: async (req, res, next) => {
    try {
      // let user = await User.findOne({ _id: req.user.id });
      let car = await Cars.findById(req.params.id);
      let {from, to} = req.body.bookingDate
      
      
      for (let i = from ; i <= to ; i += 86400000){
        let listingdate = new Date(i)
        const dateKey = `${listingdate.getDate()}/${listingdate.getMonth()}/${listingdate.getFullYear()}`
        car.dateLookUp[dateKey].booked = true
        car.dateLookUp[dateKey].user = req.user.id

      }

      car.markModified('dateLookUp')
      await car.save()
      return res.status(200).json({
        status: 'success',
        message: 'Date Booked',
        car,
      });

    } catch (err) {
      return res.status(500).json({
        status: 'error',
        message: err.message,
      });
    }
  },
};
