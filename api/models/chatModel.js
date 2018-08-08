"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var ChatSchema = new Schema({
  users: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "User"
    }
  ],
  messages: [
    {
      sender: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
      },
      message: String,
      timestamp: { type: Date, default: Date.now }
    }
  ]
});

module.exports = mongoose.model("Chat", ChatSchema);
