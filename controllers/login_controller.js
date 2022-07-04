const express = require("express");
const router = express.Router();
const service = require("../services/login_service");

module.exports = function () {
  router.post("/user", service.login);
  //   router.get("/getUserById/:id", service.getUserById)
  //   router.put("/update/:id", service.updateUser);
  return router;
};
