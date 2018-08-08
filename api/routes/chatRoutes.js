"use strict";
module.exports = function(app) {
  const chat = require("../controllers/chatController");
  // const user = require("../controllers/userController");

  // chat routes
  app.route("/users/:senderId/chats").get(chat.list_all_user_chats);

  app
    .route("/users/:senderId/chats/:receiverId")
    .post(chat.create_a_chat)
    .get(chat.read_a_chat)
    .put(chat.update_a_chat_with_new_message)
    .delete(chat.delete_a_chat);
};
