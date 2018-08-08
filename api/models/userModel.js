"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String,
    required: "Full name of the user"
  },
  role: String,
  bio: String,
  // TODO: image storing in mongoose
  // image: { data: Buffer, contentType: String },
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
