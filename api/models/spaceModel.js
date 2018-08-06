"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var SpaceSchema = new Schema({
  major_id: Number,
  name: String,
  coords: {
    lat: String,
    long: String
  },
  device_list: [
    {
      type: Number,
      ref: "Device"
    }
  ]
});

module.exports = mongoose.model("Space", SpaceSchema);
