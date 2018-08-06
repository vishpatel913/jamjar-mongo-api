'use strict';
module.exports = function(app) {
  const space = require('../controllers/spaceController');
  const user = require('../controllers/userController');
  const device = require('../controllers/deviceController');

  // space routes
  app.route('/spaces')
    .get(space.list_all_spaces)
    .post(space.create_a_space);

  app.route('/spaces/:spaceId')
    .get(space.read_a_space)
    .put(space.update_a_space)
    .delete(space.delete_a_space);

  app.route('/spaces/:spaceId/users')
    .get(user.list_users_by_space);

  app.route('/spaces/:spaceId/devices')
    .get(device.list_devices_by_space);
};
