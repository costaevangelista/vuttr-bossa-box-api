const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../../app");
const User = require("../../app/models/User");
const factory = require("../factories/factoryUser");

describe("Tools", () => {
  beforeEach(async () => {
    await User.deleteOne();
  });
  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("Create new user", async () => {
    const user = {
      name: "Abel Gomes Costa",
      email: "costaevangelista@live.com",
      password: "secret"
    };

    const response = await request(app)
      .post("/users")
      .send(user);
    expect(response.status).toBe(201);
  });

  it("Validade fields required by adding new user", async () => {
    const user = {
      name: "",
      email: "",
      password: ""
    };

    const response = await request(app)
      .post("/users")
      .send(user);

    expect(response.status).toBe(400);
  });
});
