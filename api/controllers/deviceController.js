'use strict';
const mongoose = require('mongoose');
const Device = mongoose.model('Device');
const Space = mongoose.model('Space');

exports.list_all_devices = function(req, res) {
  Device.find({}, function(err, device) {
    if (err)
      res.send(err);
    res.json(device);
  });
};

exports.list_devices_by_space = function(req, res) {
  Space.findById(req.params.spaceId, function(err, space) {
    Device.find({major_id: space.major_id}).exec(function(err, device) {
      if (err)
      res.send(err);
      res.json(device);
    });
  })
};

exports.create_a_device = function(req, res) {
  var new_device = new Device(req.body);
  new_device.save(function(err, device) {
    if (err)
      res.send(err);
    res.json(device);
  });
};

exports.read_a_device = function(req, res) {
  Device.findOne({
    _id: req.params.minorId
  }, function(err, device) {
    if (err)
      res.send(err);
    res.json(device);
  });
};

exports.update_a_device = function(req, res) {
  Device.findOneAndUpdate({
    _id: req.params.minorId
  }, req.body, {
    new: true
  }, function(err, device) {
    if (err)
      res.send(err);
    res.json(device);
  });
};

exports.delete_a_device = function(req, res) {
  Device.remove({
    _id: req.params.minorId
  }, function(err, device) {
    if (err)
      res.send(err);
    res.json({message: 'Device successfully deleted'});
  });
};
