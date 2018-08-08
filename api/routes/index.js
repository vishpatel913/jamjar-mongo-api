const userRoutes = require("./userRoutes");
const deviceRoutes = require("./deviceRoutes");
const spaceRoutes = require("./spaceRoutes");
const chatRoutes = require("./chatRoutes");

module.exports = function(app, db) {
  userRoutes(app, db);
  deviceRoutes(app, db);
  spaceRoutes(app, db);
  chatRoutes(app, db);
};
