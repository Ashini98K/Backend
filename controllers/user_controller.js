const express = require("express");
const router = express.Router();
const service = require("../services/user_service");

module.exports = function () {
  router.post("/create", service.createUser);
  //   router.get("/getUserById/:id", service.getUserById)
  router.put("/update/:id", service.updateUser);
  return router;
};
