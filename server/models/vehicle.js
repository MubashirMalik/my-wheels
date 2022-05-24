const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  make: {
        type: String,
        required: true
  },
  location: {
    type: String,
    required: true
  },
  dateAdded: {
    type: Date,
    required: true
  },
  ratings: {
    type: Number,
    required: true,
  },
  model: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    require: true
  },
  kmsUsed: {
    type: Number,
    required: true
  },
  transmission: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  engineCapacity: {
    type: Number,
    required: true
  },
  registerdIn: {
    type: String,
    required: true
  },
  sellerName: {
    type: String,
    required: true
  },
  sellerEmail: {
    type: String,
    required: true
  },
  sellerContactNumber: {
    type: Number,
    required: true
  },
  sellerComments: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Vehicle = mongoose.model('Vehicle', vehicleSchema);
module.exports = Vehicle;
