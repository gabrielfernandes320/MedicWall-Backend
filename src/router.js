const express = require("express");
const routes = express.Router();

const roleController = require("./controllers/RoleController");

routes.post("/roles", roleController.store);
routes.get("/roles", roleController.index);
routes.put("/roles", roleController.update);

module.exports = routes;
