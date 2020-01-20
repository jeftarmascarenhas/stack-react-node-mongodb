const { Router } = require("express");

const DevController = require("./controllers/DevController");
const SearchControlller = require("./controllers/SearchControlller");

const routes = Router();

routes.get("/devs", DevController.index);

routes.post("/devs", DevController.store);

routes.get("/search", SearchControlller.index);

module.exports = routes;
