var Sequelize = require('sequelize');
var db=require('./db')

const Place = db.define('place', {
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING
  },
  state:{
    type: Sequelize.STRING
  },
  phone:{//string
    type: Sequelize.STRING
  },
  location:{
    //lat lon float array
    type: Sequelize.ARRAY(Sequelize.FLOAT)
  }
});

module.exports=Place;
