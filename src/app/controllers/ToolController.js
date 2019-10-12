const Tool = require("../models/Tool");

module.exports = {
  async index(req, res) {
    try {
      const { tag } = req.query;
      var tools;

      if (tag && tag !== "") {
        tools = await Tool.find({ tags: tag });
      } else {
        tools = await Tool.find();
      }
      return res.json(tools);
    } catch (error) {
      return res.status(400).json({ message: "Bad request" });
    }
  },

  async store(req, res) {
    const { title, link, description, tags } = req.body;

    try {
      const tool = await Tool.create({
        title,
        link,
        description,
        tags
      });

      return res.status(201).json(tool);
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  async delete(req, res) {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Select one Tool" });
    }

    try {
      const tool = await Tool.findById(id);
      if (!tool) {
        return res.status(400).json({ error: "Tool selected doesnot exists" });
      }
      await Tool.deleteOne({ _id: id });
      return res.status(204).json();
    } catch (error) {
      return res
        .status(400)
        .json({ error: "Unable to remove selected registry" });
    }
  }
};
