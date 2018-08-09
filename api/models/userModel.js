"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var UserSchema = new Schema({
  facebook_id: {
    type: String
    // unique: true,
    // required: true
  },
  name: {
    type: String,
    required: true
  },
  role: String,
  bio: String,
  email: String,
  image: String,
  status: {
    type: String,
    enum: ["inactive", "active", "busy"],
    default: "inactive"
  },
  space_list: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Space"
    }
  ],
  current_space: {
    type: mongoose.Schema.ObjectId,
    ref: "Space",
    default: null
  },
  current_device: {
    type: Number,
    ref: "Device",
    default: null
  }
});

module.exports = mongoose.model("User", UserSchema);
