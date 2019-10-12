const request = require("supertest");

const mongoose = require("mongoose");
const app = require("../../app");
const User = require("../../app/models/User");
const factory = require("../factories/factoryUser");

describe("Authentication", () => {
  beforeEach(async () => {
    await User.deleteOne();
  });
  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("should authenticate with valid credentials", async () => {
    const user = await factory.create("User");

    const response = await request(app)
      .post("/sessions")
      .send({
        email: user.email,
        password: "secret"
      });
    expect(response.status).toBe(200);
  });

  it("should not authenticate with invalid credentials", async () => {
    const user = await factory.create("User");

    const response = await request(app)
      .post("/sessions")
      .send({
        email: user.email,
        password: "123456"
      });
    expect(response.status).toBe(401);
  });

  it("should return jwt token when authenticated", async () => {
    const user = await factory.create("User", {
      password: "123456"
    });

    const response = await request(app)
      .post("/sessions")
      .send({
        email: user.email,
        password: "123456"
      });
    expect(response.body).toHaveProperty("token");
  });

  it("should be able to access private routes when authenticated", async () => {
    const user = await factory.create("User", {
      password: "123456"
    });

    const response = await request(app)
      .get("/dashboard")
      .set("Authorization", `Bearer ${user.generateToken()}`);
    expect(response.status).toBe(200);
  });

  it("should not be able to access private routes whithout jwt token", async () => {
    const response = await request(app).get("/dashboard");

    expect(response.status).toBe(401);
  });

  it("should not be able to access private routes whith invalid jwt token", async () => {
    const response = await request(app)
      .get("/dashboard")
      .set("Authorization", `Bearer 1234552`);

    expect(response.status).toBe(401);
  });
});
