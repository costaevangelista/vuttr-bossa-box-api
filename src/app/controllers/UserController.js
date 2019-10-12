const User = require("../models/User");

module.exports = {
  async index(req, res) {
    const users = await User.find();
    return res.json(users);
  },
  async store(req, res) {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "E-mail already in use" });
    }

    if (!user) {
      try {
        user = await User.create({ name, email, password });
        return res.status(201).json(user);
      } catch (error) {
        return res.status(400).json(error);
      }
    }
  }
};
