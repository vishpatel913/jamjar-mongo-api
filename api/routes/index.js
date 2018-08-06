const userRoutes = require('./userRoutes');
const deviceRoutes = require('./deviceRoutes');
const spaceRoutes = require('./spaceRoutes');

module.exports = function(app, db) {
  userRoutes(app, db);
  deviceRoutes(app, db);
  spaceRoutes(app, db);
};
