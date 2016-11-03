const router = require('express').Router();
const models=require('../models/')
const Place=require('../models/place.js')
const Activity=require('../models/activity.js')
const Hotel=require('../models/hotel.js')
const Restaurant=require('../models/restaurant.js')
const Promise = require('sequelize').Promise;

router.get('/', function(req, res, next) {
  // Place.findAll()
  // .then((place) => res.render('layout', { places: place }))
  // .catch(next);
  Promise.all([
    Activity.findAll(),
    Hotel.findAll(),
    Restaurant.findAll()
  ])
  .then(function(arr){
    res.render('layout', {hotels:arr[1], activities:arr[0], restaurants:arr[2]})
  })
  .catch(next)
});

module.exports=router;
