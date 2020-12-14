const mongoose = require('mongoose');
const moment = require('moment');
const Schema = mongoose.Schema;

const CarSchema = new mongoose.Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  img: { type: Array },
  make: { type: String, lowercase: true, required: true, index: true },
  model: { type: String, lowercase: true, required: true, index: true },
  year: { type: Number, required: true },
  vehicleClass: { type: String, lowercase: true, required: true },
  door: { type: Number, lowercase: true, required: true },
  color: { type: String, lowercase: true, required: true },
  price: { type: Number, required: true },
  description: { type: String, index: true },
  active: { type: Boolean, default: true },
  dateList: { type: Array },
  rating: { type: Array },
  reviews: { type: Array },
  timestamp: {
    type: String,
    default: () => moment().format('MMMM Do YYYY, h:mm:ss a'),
  },
});

// CarSchema.pre('save', function (next) {
//   // capitalize
//   this.make.charAt(0).toUpperCase() + this.make.slice(1);
//   this.model.charAt(0).toUpperCase() + this.model.slice(1);
//   this.color.charAt(0).toUpperCase() + this.color.slice(1);
//   this.description.charAt(0).toUpperCase() + this.description.slice(1);
//   next();
// });

CarSchema.index({
  name: 'text',
  make: 'text',
  model: 'text',
  description: 'text',
});


module.exports = mongoose.model('Car', CarSchema);
