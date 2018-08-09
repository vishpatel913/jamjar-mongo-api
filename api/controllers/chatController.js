"use strict";
const mongoose = require("mongoose");
const Chat = mongoose.model("Chat");
var path = require("path");
var fs = require("fs");

exports.list_all_user_chats = function(req, res) {
  Chat.find({
    users: req.params.senderId
  }).exec(function(err, chat) {
    if (err) res.send(err);
    res.json(chat);
  });
};

exports.create_a_chat = function(req, res) {
  var emptyChat = {
    users: [req.params.senderId, req.params.receiverId],
    messages: []
  };
  var new_chat = new Chat(emptyChat);
  new_chat.save(function(err, chat) {
    if (err) res.send(err);
    res.json(chat);
  });
};

exports.read_a_chat = function(req, res) {
  Chat.findOne({
    users: { $all: [req.params.senderId, req.params.receiverId] }
  })
    .populate("messages.sender", "name status")
    .exec(function(err, chat) {
      if (err) res.send(err);
      res.json(chat);
    });
};

exports.update_a_chat_with_new_message = function(req, res) {
  var message = req.body; // { sender, message }
  Chat.findOneAndUpdate(
    {
      users: [req.params.senderId, req.params.receiverId]
    },
    { $push: { messages: message } },
    {
      new: true
    },
    function(err, chat) {
      if (err) res.send(err);
      res.json(chat);
    }
  );
};

exports.delete_a_chat = function(req, res) {
  Chat.remove(
    {
      users: [req.params.senderId, req.params.receiverId]
    },
    function(err, chat) {
      if (err) res.send(err);
      res.json({ message: "Chat successfully deleted" });
    }
  );
};
