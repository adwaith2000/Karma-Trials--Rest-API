const Author = require("../models/Author.model.js");

module.exports = app => {
    const Author = require("../controllers/entity.controller.js");
  
    // Create a new Author
    app.post("/author", Author.create);
  
    // Retrieve all Authors
    app.get("/author", Author.findAll);
  
    // Retrieve a single Author with authorId
    app.get("/author/:authorid", Author.findOne);
  
    // Update author with authorId
    app.put("/author/:authorid", Author.update);
  
    // Delete author with authoeId
    app.delete("/author/:authorid", Author.delete);
  
  };