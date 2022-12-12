const AuthorController = require("../controllers/author.controllers");

module.exports = app => {
  app.get("/api/author/", AuthorController.findAll);
  app.get("/api/author/:id", AuthorController.findOneSingle);
  app.put("/api/author/update/:id", AuthorController.updateExisting);
  app.post("/api/author/new", AuthorController.createNew);
  app.delete("/api/author/delete/:id", AuthorController.deleteAnExisting);
};