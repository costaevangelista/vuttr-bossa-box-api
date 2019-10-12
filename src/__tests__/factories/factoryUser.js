const faker = require("faker");
const { factory } = require("factory-girl");
const User = require("../../app/models/User");

factory.define("User", User, {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: "secret"
});

module.exports = factory;
