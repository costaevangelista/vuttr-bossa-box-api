const User = require("../models/User");

module.exports = {
  async authenticate(req, res) {
    const { email, password } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid email/password!" });
    }
    if (await user.checkPassword(password)) {
      return res.status(200).json({ token: user.generateToken() });
    } else {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  }
};
