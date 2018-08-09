"use strict";
const mongoose = require("mongoose");
const Space = mongoose.model("Space");

exports.list_all_spaces = function(req, res) {
  Space.find({}).exec(function(err, space) {
    if (err) res.send(err);
    res.json(space);
  });
};

exports.create_a_space = function(req, res) {
  var new_space = new Space(req.body);
  new_space.save(function(err, space) {
    if (err) res.send(err);
    res.json(space);
  });
};

exports.read_a_space = function(req, res) {
  Space.findById(req.params.spaceId)
    .populate("device_list")
    .exec(function(err, space) {
      if (err) res.send(err);
      res.json(space);
    });
};

exports.read_a_space_by_major = function(req, res) {
  Space.findOne({
    major_id: req.params.majorId
  })
    .populate("device_list", "minor_id")
    .exec(function(err, space) {
      if (err) res.send(err);
      res.json(space);
    });
};

exports.update_a_space = function(req, res) {
  Space.findOneAndUpdate(
    {
      _id: req.params.spaceId
    },
    req.body,
    {
      new: true
    },
    function(err, space) {
      if (err) res.send(err);
      res.json(space);
    }
  );
};

exports.delete_a_space = function(req, res) {
  Space.remove(
    {
      _id: req.params.spaceId
    },
    function(err, space) {
      if (err) res.send(err);
      res.json({
        message: "Space successfully deleted"
      });
    }
  );
};
