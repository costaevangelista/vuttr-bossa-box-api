const routes = require("express").Router();
const path = require("path");

const authMiddleware = require("./app/middleware/auth");

const SessionController = require("./app/controllers/SessionController");
const UserController = require("./app/controllers/UserController");
const ToolController = require("./app/controllers/ToolController");

routes.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/../docs/index.html"));
});

routes.post("/sessions", SessionController.authenticate);

routes.post("/users", UserController.store);
routes.get("/users", UserController.index);

routes.get("/tools", ToolController.index);
routes.post("/tools", ToolController.store);
routes.delete("/tools/:id", ToolController.delete);

routes.use(authMiddleware);

routes.get("/dashboard", (req, res) => {
  return res.status(200).send("Welcome - SysVUTTR!");
});

module.exports = routes;
