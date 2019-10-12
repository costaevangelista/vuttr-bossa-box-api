const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../../app");
const Tool = require("../../app/models/Tool");
const factory = require("../factories/factoryTool");

describe("Tools", () => {
  beforeEach(async () => {
    await Tool.deleteOne();
  });
  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("Create new tool", async () => {
    const tool = {
      title: "hotel",
      link: "https://github.com/typicode/hotel",
      description:
        "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.",
      tags: [
        "node",
        "organizing",
        "webapps",
        "domain",
        "developer",
        "https",
        "proxy"
      ]
    };

    const response = await request(app)
      .post("/tools")
      .send(tool);
    expect(response.status).toBe(201);
  });

  it("Validade fields required by adding new tool", async () => {
    const tool = {
      title: "",
      link: "https://github.com/typicode/hotel",
      description: "",
      tags: [
        "node",
        "organizing",
        "webapps",
        "domain",
        "developer",
        "https",
        "proxy"
      ]
    };

    const response = await request(app)
      .post("/tools")
      .send(tool);

    expect(response.status).toBe(400);
  });

  it("Remove one tool", async () => {
    const tool = await factory.create("Tool");
    const response = await request(app).delete("/tools/" + tool.id);

    expect(response.status).toBe(204);
  });

  it("Remove failure tool", async () => {
    const tool = await factory.create("Tool");
    const response = await request(app).delete("/tools/" + tool.id + "xpto");

    expect(response.status).toBe(400);
  });
});
