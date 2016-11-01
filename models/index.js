var Sequelize = require('sequelize');
var Hotel=require('./hotel')
var Place=require('./place')
var Activity=require('./activity')
var Restaurant=require('./restaurant')
var db=require('./db')

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

module.exports=db;
