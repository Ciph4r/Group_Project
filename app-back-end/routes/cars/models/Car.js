const mongoose = require('mongoose')
const moment = require('moment')
const Schema = mongoose.Schema


const CarSchema = new mongoose.Schema({
    owner:{type: Schema.Types.ObjectId , ref: 'User'},
    img: {type:Array},
    make: {type:String , lowercase:true, required:true},
    model: {type:String , lowercase:true, required:true},
    year: {type:Number, required:true},
    vehicleClass: {type:String , lowercase:true, required:true},
    door: {type:Number , lowercase:true, required:true},
    color: {type:String , lowercase:true, required:true},
    price: {type:Number , required:true},
    description:{type: String},
    active : {type:Boolean , default:true},
    dateList: {type:Array},
    rating: {type: Array},
    reviews: {type: Array},
    timestamp: {type:String , default: ()=> moment().format('MMMM Do YYYY, h:mm:ss a')},
})


module.exports = mongoose.model('Car' , CarSchema)