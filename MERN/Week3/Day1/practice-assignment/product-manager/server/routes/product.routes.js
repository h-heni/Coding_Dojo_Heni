const ProductController = require("../controllers/product.controllers");

module.exports = app => {
  app.get("/api/product/", ProductController.findAllProducts);
  app.get("/api/product/:id", ProductController.findOneSingleProducts);
  app.put("/api/product/update/:id", ProductController.updateExistingProducts);
  app.post("/api/product/new", ProductController.createNewProducts);
  app.delete("/api/product/delete/:id", ProductController.deleteAnExistingProducts);
};