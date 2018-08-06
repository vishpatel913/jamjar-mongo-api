'use strict';
module.exports = function(app) {
  const device = require('../controllers/deviceController');
  // const space = require('../controllers/spaceController');

  // device routes
  app.route('/devices')
    .get(device.list_all_devices)
    .post(device.create_a_device);

  app.route('/devices/:minorId')
    .get(device.read_a_device)
    .put(device.update_a_device)
    .delete(device.delete_a_device);

  // app.route('/device/:minorId/location')
  //   .get(space.read_a_space_by_major)

  // app.route('/devices/:majorId/')
  //   .get(device.list_devices_by_major)

  // app.route('/devices/:spaceId')
  //   .get(device.list_devices_by_space);
};
