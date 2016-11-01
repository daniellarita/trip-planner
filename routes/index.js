const router = require('express').Router();
const models=require('../models/')
const Place=require('../models/place.js')
const Promise = require('sequelize').Promise;

router.get('/', function(req, res, next) {
  Place.findAll()
  .then((place) => res.render('layout', { place: place }))
  .catch(next);
});

module.exports=router;
