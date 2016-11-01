var Sequelize = require('sequelize');
var db = require('./db')

const Restaurant = db.define('restaurant', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cuisine: {
    type: Sequelize.STRING,
  },
  price:{
    type: Sequelize.INTEGER
  }
});

module.exports=Restaurant;
