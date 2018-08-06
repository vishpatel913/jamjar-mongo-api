'use strict';
const mongoose = require('mongoose');
const User = mongoose.model('User');
var path = require('path');
var fs = require('fs');

exports.list_all_users = function(req, res) {
  User.find({})
    .populate('current_space', 'name coords major_id')
    .exec(function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
    });
};

exports.list_users_by_space = function(req, res) {
  User.find({
    current_space: {
      _id: req.params.spaceId
    }
  })
    .populate('current_device')
    .exec(function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
    });
};

exports.create_a_user = function(req, res) {
  var new_user = new User(req.body);
  // new_user.image.data = fs.readFileSync(req.files.userPhoto.path)
  // new_user.image.contentType = 'image/png';
  new_user.save(function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.read_a_user = function(req, res) {
  User.findById(req.params.userId)
    .populate('current_device')
    .exec(function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
    });
};

// NOTE: possibly unnecessary
exports.read_user_current_device = function(req, res) {
  User.findById(req.params.userId)
    .populate('current_device')
    .exec(function(err, user) {
      if (err)
        res.send(err);
      res.json(user.current_device);
    });
};

exports.update_a_user = function(req, res) {
  User.findOneAndUpdate({
    _id: req.params.userId
  }, req.body, {
    new: true
  }, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.delete_a_user = function(req, res) {
  User.remove({
    _id: req.params.userId
  }, function(err, user) {
    if (err)
      res.send(err);
    res.json({message: 'User successfully deleted'});
  });
};
