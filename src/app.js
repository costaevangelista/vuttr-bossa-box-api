const express = require("express");
const database = require("./app/config/database");

class AppController {
  constructor() {
    this.express = express();
    database;
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    this.express.use(require("./routes"));
  }
}
module.exports = new AppController().express;
