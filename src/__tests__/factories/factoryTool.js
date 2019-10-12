const faker = require("faker");
const { factory } = require("factory-girl");
const Tool = require("../../app/models/Tool");

factory.define("Tool", Tool, {
  title: faker.name.findName(),
  link: faker.random.image(),
  description: faker.lorem.words(5),
  tags: faker.random.arrayElement()
});

module.exports = factory;
