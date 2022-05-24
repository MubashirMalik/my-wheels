const { response } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const Vehicle = require('../models/vehicle');

const router = express.Router();

router.get('/', function(req, res) {
  res.set('Content-Type', 'text/plain');
  res.send("Api Works");
});

// connect to mongoDB
const dbURI = "mongodb+srv://mubashir:mubashir@cluster0.8zzfp.mongodb.net/mywheels?retryWrites=true&w=majority";
mongoose.connect(dbURI).
    then((result) => {
        console.log("Connected to database.");
    }).catch((err) => console.log(err));

// Routes
router.get('/vehicles', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");

  Vehicle.find({}).exec(function(err, vehicles) {
    if (err) {
      console.log("Error retrieving vehicles..");
    } else {
      res.json(vehicles)
    }
  });
});

router.post('/vehicle', (req, res) => {
  var newVehicle = new Vehicle({
    imageUrl: req.body.imageUrl,
    title: req.body.title,
    type: req.body.type,
    make: req.body.make,
    location: req.body.location,
    dateAdded: req.body.dateAdded,
    ratings: req.body.ratings,
    model: req.body.model,
    price: req.body.price,
    kmsUsed:req.body.kmsUsed,
    transmission: req.body.transmission,
    color: req.body.color,
    engineCapacity: req.body.engineCapacity,
    registerdIn: req.body.registerdIn,
    sellerName: req.body.sellerName,
    sellerEmail: req.body.sellerEmail,
    sellerContactNumber: req.body.sellerContactNumber,
    sellerComments: req.body.sellerComments,
  });
  newVehicle.save((err, insertedVehicle) => {
    if (err) {
      console.log("Error saving record..");
      console.log(err);
    } else {
      res.send(insertedVehicle);
      console.log("Record added..");
    }
  });
});

router.delete('/vehicle/:vehicleId', async (req, res) => {
  try {
    const removedVehicle = await Vehicle.findByIdAndDelete(req.params.vehicleId);
    res.json(removedVehicle);
  } catch(err) {
    res.json({ message: err });
  }
});

router.put('/vehicle/:vehicleId', async (req, res) => {
  try {
    var updatedVehicle = {
      imageUrl: req.body.imageUrl,
      title: req.body.title,
      type: req.body.type,
      make: req.body.make,
      location: req.body.location,
      dateAdded: req.body.dateAdded,
      ratings: req.body.ratings,
      model: req.body.model,
      price: req.body.price,
      kmsUsed:req.body.kmsUsed,
      transmission: req.body.transmission,
      color: req.body.color,
      engineCapacity: req.body.engineCapacity,
      registerdIn: req.body.registerdIn,
      sellerName: req.body.sellerName,
      sellerEmail: req.body.sellerEmail,
      sellerContactNumber: req.body.sellerContactNumber,
      sellerComments: req.body.sellerComments,
    };
    await Vehicle.findByIdAndUpdate(req.params.vehicleId, updatedVehicle);
    res.json(updatedVehicle);
    console.log("Record updated..");
  } catch(err) {
    console.log(err);
    res.json({ message: err });
    console.log("Error updating record..");
  }
});


module.exports = router;
