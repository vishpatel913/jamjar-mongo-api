var express = require("express");
var mongoose = require("mongoose");
var User = require("./api/models/userModel");
var Device = require("./api/models/deviceModel");
var Space = require("./api/models/spaceModel");
var bodyParser = require("body-parser");
var multer = require("multer");
var db = require("./config/db");
require("dotenv").config();

var app = express();
var port = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("Server Works Baby!"));

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(db.url);

// NOTE: populate tables
// require('./app');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// upload image to server side
app.set(
  multer({
    dest: "./uploads/",
    rename: function(fieldname, filename) {
      return filename;
    }
  })
);

require("./api/routes")(app, db);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.use(function(req, res) {
  res.status(404).send({ url: req.originalUrl + " not found" });
});
