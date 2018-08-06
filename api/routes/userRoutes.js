'use strict';
module.exports = function(app) {
  var user = require('../controllers/userController');
  var device = require('../controllers/deviceController');

  // user routes
  app.route('/users')
    .get(user.list_all_users)
    .post(user.create_a_user);

  app.route('/users/:userId')
    .get(user.read_a_user)
    .put(user.update_a_user)
    .delete(user.delete_a_user);

  app.route('/users/:userId/device')
    .get(user.read_user_current_device)
};
