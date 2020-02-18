const express = require("express");
const routes = express.Router();

const roleController = require("./controllers/RoleController");

routes.post("/roles", roleController.store);
module.exports = routes;
