const express = require("express");
const router = express.Router();
const service = require("../services/user_service");

module.exports = function () {
  router.post("/create", service.createUser);
  router.get("/search/:value", service.searchUser);
  router.put("/update/:id", service.updateUser);
  router.get("/get/id/:id", service.getUserbyId);
  return router;
};
