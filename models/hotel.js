var Sequelize = require('sequelize');
var db=require('./db')

const Hotel = db.define('hotel', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  num_stars: {
    type: Sequelize.INTEGER,
  },
  amenities:{
    type: Sequelize.STRING
  }
});

module.exports=Hotel;
