var Sequelize = require('sequelize');
var db = require('./_db');

var Days = db.define('days', {
  number: Sequelize.INTEGER,
});

module.exports = Days
