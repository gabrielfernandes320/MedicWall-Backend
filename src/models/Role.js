const mongoose = require("mongoose");

const RoleSchema = new mongoose.Schema({
  description: String
});

module.exports = mongoose.model("Role", RoleSchema);
