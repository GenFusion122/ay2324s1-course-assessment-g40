const controller = require("../controllers/user.controller");

module.exports = function(app) {
  var router = require("express").Router();

  router.get("/user", controller.userBoard);
  router.post("/updateUser", controller.updateUser);
  router.post("/deleteUser", controller.deleteUser);

  app.use('/user', router);
};