const Role = require("../models/Role");

module.exports = {
  async store(req, res) {
    const { description } = req.body;

    let role = await Role.findOne({ description });

    if (!role) {
      role = await Role.create({ description });
    }

    return res.json(role);
  }
};
