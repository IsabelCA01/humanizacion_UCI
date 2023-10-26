const mongoose = require('mongoose');

const ValueSchema = new mongoose.Schema({
  date: String,
  value: Number,
  location: String,
});

const ValuesDB = mongoose.model('Jhon&Isabel', ValueSchema, 'Jhon&Isabel');

module.exports = { ValuesDB };