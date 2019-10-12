const mongoose = require("mongoose");
const app = require("../../app");
const Tool = require("../../app/models/Tool");

describe("Tool", () => {
  beforeEach(async () => {
    await Tool.deleteOne();
  });
  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("Create new object tool", async () => {
    const toolObject = {
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

    const tool = await Tool.create(toolObject);

    expect(tool.description === toolObject.description).toBe(true);
  });
});
