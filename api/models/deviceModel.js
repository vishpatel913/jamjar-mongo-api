'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var DeviceSchema = new Schema({
  _id: Number, // minor id
  major_id: Number,
  name: String,
  description: String
});

module.exports = mongoose.model('Device', DeviceSchema);
