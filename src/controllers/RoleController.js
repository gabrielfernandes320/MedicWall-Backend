const Role = require("../models/Role");

module.exports = {
  async store(req, res) {
    const { description } = req.body;

    let role = await Role.findOne({ description });

    if (!role) {
      role = await Role.create({ description });
    }

    return res.json(role);
  },

  async index(req, res) {
    const { description } = req.body;

    let roles = [];

    if (description == null) {
      roles = await Role.find({});
    } else {
      roles = await Role.find({ description: description });
    }

    console.log(description);
    return res.json(roles);
  },

  async update(req, res) {
    const { _id } = req.body;

    const role = Role.findByIdAndUpdate(
      { _id: "5e4c41862e362a167844a8bf" },
      { description: "Isso" },
      function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
      }
    );

    return null;
  }
};
